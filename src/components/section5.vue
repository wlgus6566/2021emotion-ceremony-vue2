<template>
  <div>
    <div class="marquee-slide-container">
      <vue-marquee
          style="height: 440px;"
          direction="left"
          :showProgress="false">
        <vue-marquee-slide v-for="i in 4" :key="i">
          <div class="marquee-img-wrap" v-for="(user, idx) in randomMember" :key="idx">
            <img :src="imgUrl(user.imagePath + user.idImage + '.jpg')" :alt="user.idImage">
            <!--<img class="marquee-img" src="http://placehold.it/400X400"/>-->
          </div>
        </vue-marquee-slide>
      </vue-marquee>
    </div>
  </div>
</template>

<script>
import {commonMethods} from "@/utils/common-methods";

export default {
  name: "section5",
  props : {
    randomMember : Array,
  },
  mixins: [commonMethods],
  methods : {
  },
}
</script>

<style lang="scss" scoped>
.marquee-slide-container {
  max-width: 1920px;
  margin: 100px auto 0;
}
  .marquee-img-wrap img{
    border-radius: 50%;
    width:100%;
    height:100%;
  }
  .marquee-slide > div {
    width: 440px;
    height: 440px;
    max-width: 440px;
  }
  .marquee-slide {
    width: 2200px;
  }
</style>