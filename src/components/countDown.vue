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
  name: "countDown",
  components: {
    FlipCountdown
  }
}

</script>

<style lang="scss">
.count-wrap {
  .flip-clock__piece {
      width: 30%;
  }
  .flip-clock__card.flip-card {
    color: #fff !important;
    font-size: 200px;
    font-family: "HelveticaNeue-Medium", sans-serif;
    letter-spacing: 0;
  }
  .flip-clock__slot {
    display: none !important;
  }
  .flip-clock__card.flip-card {
    position: relative;
  }
  .flip-clock {
    display: flex;
    justify-content: space-between;
    position: relative;
  }
  .flip-clock::before {
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 50%;
    //background: #1b1a1d;
    position: absolute;
    z-index: 1;
    opacity: .3;
  }
  /*.flip-card__back {
    color: #fff !important;
    background: #1b1a1d !important;
    font-weight: normal;
  }*/
  /*.flip-card__top-4digits,
  .flip-card__bottom-4digits,
  .flip-card__back-bottom-4digits,
  .flip-card__back-4digits::before,
  .flip-card__back-4digits::after {
    color: #fff !important;
    background: #1b1a1d !important;
    font-weight: normal;
  }*/
  .flip-card__bottom, .flip-card__back-bottom,
  .flip-card__bottom-4digits, .flip-card__back-bottom-4digits {
    color: #fff !important;
    background: #1b1a1d !important;
    font-weight: normal;
  }
  .flip-card__top,
  .flip-card__bottom,
  .flip-card__back-bottom,
  .flip-card__back::before,
  .flip-card__back::after {
    width: 380px !important;
    color: rgba(255, 255, 255, 1) !important;
    background: #1b1a1d !important;
    font-weight: normal;
  }
  .flip-card__top,
  .flip-card__back::before,
  .flip-card__back::after{
    color: rgba(255, 255, 255, .75) !important;
  }

}

[class^=flip-clock__piece] + [class^=flip-clock__piece]:before {
  display: block;
  width: 10px;
  height: 10px;
  background-color: #ffffff;
}

</style>