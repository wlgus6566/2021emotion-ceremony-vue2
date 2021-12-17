<template>
<!--  <swiper class="swiper" ref="mySwiper">-->
  <swiper class="swiper" ref="mySwiper" :options="swiperOptions" @slideChange="slideChangeTransitionStart">

    <swiper-slide v-for="item in items" >
      <img :src="item.imgUrl">
    </swiper-slide>

    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</template>

<script>
import { Swiper,SwiperSlide } from 'vue-awesome-swiper'

export default {
  name: "popSwiper",
  components: {
    Swiper,
    SwiperSlide
  },
  props: {
    items: Array,
  },
  data() {
    return {
      swiperOptions: {
        loop: true,
/*        autoplay:{
          delay:3000
        },*/
        slidesPerView: 1,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    }
  }
}
</script>

<style lang="scss" scoped>
.swiper-container {
  width: 100%;
  height: 560px;
  img {
    width: 100%;
    height: 100%;
  }
}

.swiper-slide {
}

.swiper-button-prev, .swiper-button-next {
  width: 40px;
  height: 60px;
  right: 0;
}

.swiper-button-prev, .swiper-container-rtl .swiper-button-next {
  left: 0;
}

.swiper-button-prev.swiper-button-disabled, .swiper-button-next.swiper-button-disabled {
  opacity: 1;
}

.swiper-button-prev:before, .swiper-button-next:after {
  width: 100%;
  height: 100%;
  background: url("../assets/images/pop_arrow_right.png") no-repeat center/cover;
  font-size: 0;
}

.swiper-container .swiper-button-prev:after {
  width: 100%;
  height: 100%;
  background: url("../assets/images/pop_arrow_left.png") no-repeat center/cover;
  font-size: 0;
}
</style>