<template>
  <div>
    <!-- marquee area -->
    <!-- <vue-marquee style="height: 420px;" direction="right" :showProgress="false" :duration="52011"> -->
    <vue-marquee style="height: 250px;" direction="left" :showProgress="false">
      <vue-marquee-slide v-for="i in 3" :key="i">
        <div>
        <img class="marquee-img" src="../assets/images/img-card-enfp-01.png" />
        </div>
        <div>
        <img class="marquee-img" src="../assets/images/img-card-enfp-02.png" />
        </div>
        <div>
        <img class="marquee-img" src="../assets/images/img-card-esfp-01.png" />
        </div>
        <div>
        <img class="marquee-img" src="../assets/images/img-card-esfp-02.png" />
        </div>
        <div>
        <img class="marquee-img" src="../assets/images/img-card-entp-01.png" />
        </div>
      </vue-marquee-slide>
    </vue-marquee>
    <!-- modal area -->
    <div class="modal" v-if="isModalViewed" @closeMbtiModal="closeMbtiModal">
      <div class="overlay" @click="$emit('closeMbtiModal')"></div>
      <div class="modal-card">
        <span class="close-btn" @click="$emit('closeMbtiModal')">X</span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "section6",
  data() {
    return {
      isModalViewed: false,
    }
  },
  methods: {
    openMbtiModal(item) {
      this.isModalViewed = true;
      this.matchData = item.match;
      this.fact = item.fact;
      document.querySelector('body').classList.add('modal-open');
    },
    closeMbtiModal() {
      this.isModalViewed = false;
      document.querySelector('body').classList.remove('modal-open');
    }
  }
}
</script>

<style lang="scss" scoped>
  .marquee-slide {
    > div {
      display: inline-block;
      width: 250px;
      height: 250px;
      padding : 10px;
      box-sizing: border-box;
      overflow: hidden;
    }
  }
  .marquee-img {
    max-width: 100%;
  }
</style>