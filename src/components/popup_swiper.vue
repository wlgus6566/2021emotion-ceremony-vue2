<template>
<!--  <swiper class="swiper" ref="mySwiper">-->
  <swiper class="swiper" ref="mySwiper" :options="swiperOptions" @slideChange="slideChangeTransitionStart">

    <swiper-slide>
      <img src="https://via.placeholder.com/1200x1200.png/888/fff" alt="">
    </swiper-slide>

    <swiper-slide>
      <img src="https://via.placeholder.com/560x560.png/888/fff" alt="">
    </swiper-slide>

    <swiper-slide>
      <img src="https://via.placeholder.com/1020x1020.png/888/fff" alt="">
    </swiper-slide>

    <!-- navigation -->
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
  data() {
    return {
      swiperOptions: {
        loop: true,
        autoplay:{
          delay:3000
        },
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