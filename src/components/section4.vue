<template>
  <div>
    <div class="marquee-slide-container">
      <!-- marquee area -->
      <!-- <vue-marquee style="height: 420px;" direction="right" :showProgress="false" :duration="52011"> -->
      <vue-marquee
          style="height: 400px;"
          direction="left"
          :showProgress="false">
        <vue-marquee-slide v-for="i in 4" :key="i">
          <div v-for="item in photoList1" :key="item.id" @click="clickEvt(item.id)">
            <img :src="imgUrl(`uploadFolder/${item.physicalFileName}`)" class="marquee-img" />
<!--            <img class="marquee-img" src="http://placehold.it/400X400"/>-->
          </div>
        </vue-marquee-slide>
      </vue-marquee>
      <vue-marquee
          style="height: 400px;"
          direction="right"
          :showProgress="false">
        <vue-marquee-slide v-for="i in 4" :key="i">
          <div v-for="item in photoList2" :key="item.id" @click="clickEvt(item.id)">
            <img :src="imgUrl(`uploadFolder/${item.physicalFileName}`)" class="marquee-img" />
<!--            <img class="marquee-img" src="http://placehold.it/400X400"/>-->
          </div>
        </vue-marquee-slide>
      </vue-marquee>
    </div>
  </div>
</template>

<script>
import {mapMutations} from "vuex";

export default {
  name: "section4",
  props: {
    randomPhoto : Array,
  },
  computed : {
    photoList1(){
      return this.randomPhoto.slice(0,5)
    },
    photoList2(){
      return this.randomPhoto.slice(5,10)
    },
  },
  methods : {
    ...mapMutations( ['SWIPER_IDX']),
    imgUrl(url) {
      return 'http://party.emotion.co.kr/' + url;
    },
    clickEvt(id){
      console.log(id)
      this.SWIPER_IDX(id)
      this.$emit('showModalFc')
    },
  },
}
</script>

<style lang="scss">
  .marquee-slide-container {
    max-width: 1920px;
    margin: 120px auto 0;
  }
  .marquee-container {
    box-sizing: border-box;
    overflow: hidden;
  }
  .marquee-slide {
    width: 2000px;
    > div {
      display: inline-block;
      width: 400px;
      max-width: 400px;
      height: 400px;
      box-sizing: border-box;
      padding : 20px;
      overflow: hidden;
    }
    + .marquee-slide {
    }
  }
  .marquee-img {
    width: 100%;
    height:100%;
    border-radius: 50%;
  }

</style>
