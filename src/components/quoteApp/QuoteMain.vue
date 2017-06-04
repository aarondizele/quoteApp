<template>
  <div class="container">
      <app-header :maxQuotes="maxQuotes" :quoteCount="quotes.length"></app-header>
      <app-new-quote @quoteAdded="addQuote"></app-new-quote>
      <app-quote-grid :quotes="quotes" @quoteDeleted="deleteQuote"></app-quote-grid>

      <div class="col-sm-12 alert alert-info mt-5">
        Click on Quote to delete it!
      </div>


      <div class="modal fade vertical-align-middle">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Disclaimer</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
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
  export default {
    data () {
      return {
        quotes: [],
        maxQuotes: 10,
      }
    },
    methods: {
      maxQuotesToAdd () {
        return this.quotes.length >= 10
      },
      addQuote (quote) {
        if(this.maxQuotesToAdd()){
          return $('.modal').modal('show')
        }
        this.quotes.push(quote)
      },
      deleteQuote (quote) {
        this.quotes.splice(quote, 1)
      },
    }
  }
</script>

<style>
</style>
