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
          <div class="marquee-img-wrap">
            <img class="marquee-img" src="http://placehold.it/400X400"/>
          </div>
          <div class="marquee-img-wrap">
            <img class="marquee-img" src="http://placehold.it/400X400"/>
          </div>
          <div class="marquee-img-wrap">
            <img class="marquee-img" src="http://placehold.it/400X400"/>
          </div>
          <div class="marquee-img-wrap">
            <img class="marquee-img" src="http://placehold.it/400X400"/>
          </div>
          <div class="marquee-img-wrap">
            <img class="marquee-img" src="http://placehold.it/400X400"/>
          </div>
        </vue-marquee-slide>
      </vue-marquee>
    </div>
  </div>
</template>

<script>
export default {
  name: "section5",
}
</script>

<style lang="scss" scoped>
  .marquee-img-wrap img{
    border-radius: 50%;
  }
</style>