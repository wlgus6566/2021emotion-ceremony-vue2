<template>
  <!-- https://github.com/philipjkim/vue2-flip-countdown -->
  <div class="count-wrap">
    <div>
      나의 파이트 넘버 :
      <span style="color: #ff0000;">85</span>
    </div>
    <div>
      <!-- parameters :showDays="false" -->
      <flip-countdown deadline="2021-12-23 00:00:00" :showDays="false"></flip-countdown>
      <span>후 배틀 시작</span>
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
  .flip-card {
    font-size: 150px;
  }
}

</style>