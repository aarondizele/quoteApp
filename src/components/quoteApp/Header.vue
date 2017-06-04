<template>
  <div class="row">
    <div class="col-sm-12">
      <kbd>The Quote App</kbd>
      <div class="progress mt-3" v-if="isShowing()">
        <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" :style="{width: (quoteCount / maxQuotes) * 100 + '%'}">{{quoteCount}} / {{maxQuotes}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['maxQuotes','quoteCount'],
    methods: {
      isShowing () {
        return this.$parent.quotes.length > 0;
      }
    }
  }
</script>

<style scoped>
  kbd{
    font-size: 32px;
  }
</style>
