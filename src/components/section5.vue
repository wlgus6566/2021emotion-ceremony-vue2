<template>
  <div>
    <div class="marquee-slide-container">
      <vue-marquee
          style="height: 400px;"
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
export default {
  name: "section5",
  props : {
    randomMember : Array,
  },
  methods : {
    imgUrl(url) {
      return 'http://party.emotion.co.kr/' + url;
    },
  },
}
</script>

<style lang="scss" scoped>
  .marquee-img-wrap img{
    border-radius: 50%;
    width:100%;
    height:100%;
  }
</style>