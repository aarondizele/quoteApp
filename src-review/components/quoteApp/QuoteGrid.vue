<template>
  <div class="row">
    <app-quote v-for="(quote, index) in quotes"
               @click.native="deleteQuote(index)"
               :key="quote"
               slot="quoted">{{ quote }}
    </app-quote>
  </div>
</template>

<script>

import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapActions(['QUOTE_DELETED']),
    ...mapGetters({quotes: 'QUOTE'})
  },
  methods: {
    deleteQuote (index) {
      this.$store.dispatch('QUOTE_DELETED', index)
    }
  }
}

</script>

<style>
</style>
