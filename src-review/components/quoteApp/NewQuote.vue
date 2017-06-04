<template>
  <div class="row justify-content-center">
    <div class="col-sm-8 col-md-6 form-group mt-4">
      <textarea name="name"
                rows="8"
                cols="80"
                v-model.trim="quote"
                placeholder="Add quote"
                class="form-control"
                style="resize: none">
      </textarea>
      <button type="button"
              @click="addQuote(quote)"
              :disabled="!isValid()"
              class="btn btn-outline-primary mt-3">Add Quote
      </button>
    </div>

    <!-- MODAL -->
    <div class="modal fade vertical-align-middle">
      <div class="modal-dialog"
           role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Disclaimer</h5>
            <button type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close">

              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>Please delete quote before, and try again!</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'

export default {
    data () {
      return {
        quote: ''
      }
    },
    computed: {
      ...mapActions(['QUOTE_ADDED']),
      ...mapGetters(['QUOTE_COUNT'])
    },
    methods: {
      isValid () {
        return this.quote.trim().length > 0;
      },
      // addQuote (quote) {
      //   if(this.isValid()){
      //     if(this.MAX_QUOTES >= 10){
      //       return $('.modal').modal('show')
      //     }
      //     this.$store.dispatch('QUOTE_ADDED', quote)
      //     this.quote = ''
      //   }
      // }

      addQuote (quote) {
        if(this.isValid()){
          if(this.QUOTE_COUNT >= 10){
            return $('.modal').modal('show')
          }
          this.$store.dispatch('QUOTE_ADDED', quote);
          this.quote = '';
        }
      }
    }
}
</script>

<style scoped>
  button.btn:disabled{
    background-color: #EEE;
    color: #666;
    border: none;
  }
</style>
