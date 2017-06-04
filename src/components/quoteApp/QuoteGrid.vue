<template>
  <div class="row">
    <app-quote v-for="(quote, i) in quotes"
               @click.native="deleteQuote(i)"
               :key="quote"
               slot="quoted">{{ quote }}
    </app-quote>
  </div>
</template>

<script>

export default {
  props: ['quotes'],
  methods: {
    deleteQuote (i) {
      this.$emit('quoteDeleted', i)
    }
  }
}

</script>

<style>
</style>
