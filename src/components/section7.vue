<template>
  <!-- https://github.com/philipjkim/vue2-flip-countdown -->
  <div class="count-wrap">
    <div>
      <!-- parameters :showDays="false" -->
      <flip-countdown deadline="2021-12-23 00:00:00" :showDays="false"></flip-countdown>
    </div>
  </div>
</template>

<script>
import FlipCountdown from 'vue2-flip-countdown'

export default {
  name: "section7",
  components: {
    FlipCountdown
  }
}

</script>

<style lang="scss">
.count-wrap {
  .flip-clock__piece {
    width: 380px;
  }
  .flip-clock__card.flip-card {
    font-size: 200px;
    font-family: "HelveticaNeue-Medium";
    letter-spacing: 0;
  }
  .flip-clock__slot {
    display: none !important;
  }
}

</style>