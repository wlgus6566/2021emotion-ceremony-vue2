<template>
  <!-- https://github.com/philipjkim/vue2-flip-countdown -->
  <div class="count-wrap">
    <div v-if="!this.countEnd">
      <img class="img-ready" src="@/assets/images/img-ready.png" alt="" />
      <flip-countdown
          deadline="2021-12-23 17:00:00"
          :showDays="false"
          @timeElapsed="timeElapsedHandler"></flip-countdown>
    </div>
    <div v-else style="position: relative">
      <img src="@/assets/images/img-onair.png" style="margin-top:120px;" alt="카운트 다운 끝" />
      <img src="@/assets/images/btn-fight.png" style="margin-top:52px;" alt="카운트 다운 끝" />
      <a href="https://us06web.zoom.us/j/84714722589?pwd=aVlsMC9aaEdEUXlMcVhJWFBuU21KZz09" target="_blank" style="position: absolute; top:78%; left:30%; width: 40%; height: 24%; text-indent: -9999em; font-size: 0;">라이브 보러가기 FIGHT!</a>
    </div>
  </div>
</template>

<script>
import FlipCountdown from 'vue2-flip-countdown'
export default {
  name: "countDown",
  data() {
    return {
      countEnd: false,
    }
  },
  components: {
    FlipCountdown
  },
  mounted() {
    this.countEnd = new Date() > new Date('2021-12-23 17:00:00')
  },
  methods : {
    getTime() {
      const time = new Date();
    },
    timeElapsedHandler() {
      console.log('끝!');
      this.countEnd = true;
    }
  }
}
</script>

<style lang="scss">
.count-wrap {
  .flip-clock {
    height: 260px;
  }
  .flip-clock__piece {
      width: 30%;
      position: relative;
    + .flip-clock__piece {
      +  .flip-clock__piece {
        &:after {
          content: ":";
          position: absolute;
          top: 6%;
          left: -13%;
          font-size: 150px;
          color: #999;
          z-index: 1000;
        }
      }
    }
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
    position: absolute;
    z-index: 1;
    opacity: .3;
  }
  .flip-card__bottom, .flip-card__back-bottom {
    border-top: none !important;
  }
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
  .flip-card {
    line-height: 1;
  }
}

[class^=flip-clock__piece] + [class^=flip-clock__piece]:before {
  display: block;
  width: 10px;
  height: 10px;
  background-color: #ffffff;
}
.img-ready {
 margin: 120px 0 40px;
}
</style>