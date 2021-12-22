<template>
  <swiper class="swiper" ref="mySwiper"
          :options="swiperOptions"
          @slideChange="slideChangeTransitionStart"
  >

    <swiper-slide>
      <div class="inner">
        <span>
           <img src="@/assets/images/slide1.jpg"/>
        </span>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="inner">
        <span>
           <img src="@/assets/images/slide2.jpg"/>
        </span>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="inner">
        <span>
           <img src="@/assets/images/slide3.jpg"/>
        </span>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="inner">
        <span>
           <img src="@/assets/images/slide4.jpg"/>
        </span>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="inner">
        <span>
           <img src="@/assets/images/slide5.jpg"/>
        </span>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="inner">
        <span>
           <img src="@/assets/images/slide6.jpg"/>
        </span>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="inner">
        <span>
           <img src="@/assets/images/slide7.jpg"/>
        </span>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="inner">
        <span>
           <img src="@/assets/images/slide8.jpg"/>
        </span>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="inner">
        <span>
           <img src="@/assets/images/slide9.jpg"/>
        </span>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="inner">
        <span>
           <img src="@/assets/images/slide10.jpg"/>
        </span>
      </div>
    </swiper-slide>

    <!-- navigation -->
    <div class="swiper-button-prev swiper-btn-prev" slot="button-prev"></div>
    <div class="swiper-button-next swiper-btn-next" slot="button-next"></div>
  </swiper>
</template>


<script>
import 'swiper/css/swiper.css'
import {Swiper,SwiperSlide} from 'vue-awesome-swiper'

export default {
  name: 'gallarySlider',
  components: {
    Swiper,
    SwiperSlide
  },
  methods: {
    slideChangeTransitionStart() {
      console.log(this.swiper.activeIndex); //현재 index값 얻기
    }
  },
  data() {
    return {
      swiperOptions: {
        //loop: true,
        // autoplay:{
        //   delay:1000
        // },
        slidesPerView: 1,
        spaceBetween: 120,
        pagination: {
          el: '.swiper-pagination'
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    }
  },

  //참조하고 있는 값이 변경될 때마다 정의된 계산식에 따라 값을 출력
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    }
  },

  //el이 새로 생성된 vm.$el로 인스턴스가 마운트 된 직후
  mounted() {
    //console.log('Current Swiper instance object', this.swiper)
    //this.swiper.slideTo(3, 1000, false)
  }


}
</script>

<style lang="scss" scoped>

.swiper-container {
  margin-top: 100px;
}
.swiper-button-prev.swiper-button-disabled, .swiper-button-next.swiper-button-disabled {
  opacity: 1;
}
.swiper-button-prev, .swiper-button-next {
  width: 50px;
  height: 86px;
}
.swiper-button-prev {
  left: 0;
}
.swiper-button-next {
  right: 0;
}
.swiper-button-prev:before, .swiper-button-next:after {
  width: 100%;
  height: 100%;
  background: url("../assets/images/arrow-r.png") no-repeat center/cover;
  font-size: 0;
}
.swiper-container .swiper-button-prev:after {
  width: 100%;
  height: 100%;
  background: url("../assets/images/arrow-l.png") no-repeat center/cover;
  font-size: 0;
}
.inner > span {
  position: relative;
  display: inline-block;
  width: 1280px;
  height: 730px;
  overflow: hidden;
  > img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
/*    background: url(./../assets/images/frame.jpg) no-repeat top left/100% 100%;*/
    z-index: -1;
  }
}
</style>