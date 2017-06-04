<template>
  <div class="row">
    <div class="col-sm-12">
      <kbd>The Quote App</kbd>
      <transition name="motion" mode="out-in" appear>
        <div class="progress mt-3" v-if="isShowing()">
          <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" :style="{width: (quoteCount / maxQuotes) * 100 + '%'}">{{quoteCount}} / {{maxQuotes}}</div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      quoteCount: 'QUOTE_COUNT',
      maxQuotes: 'MAX_QUOTES'
    })
  },
  methods: {
    isShowing () {
      // return this.$parent.quotes.length > 0;
      return this.quoteCount > 0;
    }
  }
}
</script>

<style scoped>
  .motion-enter-active{
    animation: motion-in .1s forwards;
  }
  .motion-leave-active{
    animation: motion-out .1s forwards;
  }
  kbd{
    font-size: 32px;
    padding: 10px 20px;
  }
  @keyframes motion-in {
    from {
      transform: translateX(-30px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  @keyframes motion-out {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(-30px);
      opacity: 0;
    }
  }
</style>
