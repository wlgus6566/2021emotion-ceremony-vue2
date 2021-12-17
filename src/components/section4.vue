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
          <div>
            <img class="marquee-img" src="http://placehold.it/400X400"/>
          </div>
          <div>
            <img class="marquee-img" src="http://placehold.it/400X400"/>
          </div>
          <div>
            <img class="marquee-img" src="http://placehold.it/400X400"/>
          </div>
          <div>
            <img class="marquee-img" src="http://placehold.it/400X400"/>
          </div>
          <div>
            <img class="marquee-img" src="http://placehold.it/400X400"/>
          </div>
        </vue-marquee-slide>
      </vue-marquee>
      <vue-marquee
          style="height: 400px;"
          direction="right"
          :showProgress="false">
        <vue-marquee-slide v-for="i in 4" :key="i">
          <div>
            <img class="marquee-img" src="http://placehold.it/400X400"/>
          </div>
          <div>
            <img class="marquee-img" src="http://placehold.it/400X400"/>
          </div>
          <div>
            <img class="marquee-img" src="http://placehold.it/400X400"/>
          </div>
          <div>
            <img class="marquee-img" src="http://placehold.it/400X400"/>
          </div>
          <div>
            <img class="marquee-img" src="http://placehold.it/400X400"/>
          </div>
        </vue-marquee-slide>
      </vue-marquee>
    </div>
  </div>
</template>

<script>

export default {
  name: "section4",
  data() {
    return {

    }
  },
  methods: {

  }
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
  }

</style>