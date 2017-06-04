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
              @click="addQuote"
              :disabled="!isValid()"
              class="btn btn-outline-primary mt-3">Add Quote
      </button>
    </div>
  </div>
</template>

<script>
  export default {
      data () {
        return {
          quote: ''
        }
      },
      methods: {
        isValid () {
          return this.quote.trim().length > 0
        },
        addQuote () {
          if(this.isValid()){
            this.$emit('quoteAdded', this.quote)
            this.quote = ''
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
