<template>
  <swiper class="swiper" ref="mySwiper"
          :options="swiperOptions"
          @slideChange="slideChangeTransitionStart"
  >

    <swiper-slide>
      <div class="inner">
        <div class="top-area">
        <span class="top-area-img">
          <img src="http://placehold.it/300x300"/>
        </span>
          <div class="top-area-desc">
            <span class="department">경영전략본부<br/>책임리더</span>
            <strong class="name">김모션</strong>
          </div>
        </div>
        <div class="bottom-area">
          <h3 class="question">코로나가 끝나면 하고싶은 것</h3>
          <p class="answer">최대16자까지</p>
        </div>
      </div>

    </swiper-slide>
    <swiper-slide>
      <div class="inner">
        <div class="top-area">
        <span class="top-area-img">
          <img src="http://placehold.it/300x300"/>
        </span>
          <div class="top-area-desc">
            <span class="department">경영전략본부<br/>책임리더</span>
            <strong class="name">김모션</strong>
          </div>
        </div>
        <div class="bottom-area">
          <h3 class="question">코로나가 끝나면 하고싶은 것</h3>
          <p class="answer">일이삼사오육칠팔일이삼사오육칠팔</p>
        </div>
      </div>

    </swiper-slide>
    <swiper-slide>
      <div class="inner">
        <div class="top-area">
        <span class="top-area-img">
          <img src="http://placehold.it/300x300"/>
        </span>
          <div class="top-area-desc">
            <span class="department">경영전략본부<br/>책임리더</span>
            <strong class="name">김모션</strong>
          </div>
        </div>
        <div class="bottom-area">
          <h3 class="question">코로나가 끝나면 하고싶은 것</h3>
          <p class="answer">일이삼사오육칠팔일이삼사오육칠팔</p>
        </div>
      </div>

    </swiper-slide>
    <swiper-slide>
      <div class="inner">
        <div class="top-area">
        <span class="top-area-img">
          <img src="http://placehold.it/300x300"/>
        </span>
          <div class="top-area-desc">
            <span class="department">경영전략본부<br/>책임리더</span>
            <strong class="name">김모션</strong>
          </div>
        </div>
        <div class="bottom-area">
          <h3 class="question">코로나가 끝나면 하고싶은 것</h3>
          <p class="answer">일이삼사오육칠팔일이삼사오육칠팔</p>
        </div>
      </div>

    </swiper-slide>
    <swiper-slide>
      <div class="inner">
        <div class="top-area">
        <span class="top-area-img">
          <img src="http://placehold.it/300x300"/>
        </span>
          <div class="top-area-desc">
            <span class="department">경영전략본부<br/>책임리더</span>
            <strong class="name">김모션</strong>
          </div>
        </div>
        <div class="bottom-area">
          <h3 class="question">코로나가 끝나면 하고싶은 것</h3>
          <p class="answer">일이삼사오육칠팔일이삼사오육칠팔</p>
        </div>
      </div>

    </swiper-slide>
    <swiper-slide>
      <div class="inner">
        <div class="top-area">
        <span class="top-area-img">
          <img src="http://placehold.it/300x300"/>
        </span>
          <div class="top-area-desc">
            <span class="department">경영전략본부<br/>책임리더</span>
            <strong class="name">김모션</strong>
          </div>
        </div>
        <div class="bottom-area">
          <h3 class="question">코로나가 끝나면 하고싶은 것</h3>
          <p class="answer">일이삼사오육칠팔일이삼사오육칠팔</p>
        </div>
      </div>

    </swiper-slide>
    <swiper-slide>
      <div class="inner">
        <div class="top-area">
        <span class="top-area-img">
          <img src="http://placehold.it/300x300"/>
        </span>
          <div class="top-area-desc">
            <span class="department">경영전략본부<br/>책임리더</span>
            <strong class="name">김모션</strong>
          </div>
        </div>
        <div class="bottom-area">
          <h3 class="question">코로나가 끝나면 하고싶은 것</h3>
          <p class="answer">일이삼사오육칠팔일이삼사오육칠팔</p>
        </div>
      </div>

    </swiper-slide>
    <swiper-slide>
      <div class="inner">
        <div class="top-area">
        <span class="top-area-img">
          <img src="http://placehold.it/300x300"/>
        </span>
          <div class="top-area-desc">
            <span class="department">경영전략본부<br/>책임리더</span>
            <strong class="name">김모션</strong>
          </div>
        </div>
        <div class="bottom-area">
          <h3 class="question">코로나가 끝나면 하고싶은 것</h3>
          <p class="answer">일이삼사오육칠팔일이삼사오육칠팔</p>
        </div>
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
  name: 'surveySlider.vue',
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
        slidesPerView: 2,
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
.swiper-wrapper {
  max-width: 1280px;
}
.swiper-container {
  margin-top: 100px;
  padding: 0 130px;
}
.swiper-slide {
}

.swiper-button-prev, .swiper-button-next {
  width: 50px;
  height: 86px;
}
.swiper-button-prev, .swiper-button-next {
  right: 0;
}
.swiper-button-prev {
  left: 0;
}
.swiper-button-next.swiper-btn-next::before {
  content: '';
  position: absolute;
  width: 10px;
  height: 334px;
  top: 2px;
  left: 40px;
  background: #e3e1e6;
  z-index: -1;
}
.swiper-button-prev.swiper-btn-prev::before {
  content: '';
  position: absolute;
  width: 12px;
  height: 334px;
  top: 2px;
  left: -1px;
  background: #e3e1e6;
  z-index: -1;
}
.swiper-button-prev.swiper-button-disabled, .swiper-button-next.swiper-button-disabled {
  opacity: 1;
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
.top-area {
  display: flex;
  width: 100%;
  align-items: center;
  padding-left: 10px;
  .top-area-img {
    width: 260px;
    height: 260px;
    border-radius: 50%;
    border: 3px solid #fff;
    overflow: hidden;
  }
  .top-area-desc {
      display: flex;
      flex-direction: column;
      text-align: left;
      margin-left: 35px;
    .department {
      color: #999999;
      font-size: 40px;
      line-height: 50px;
      font-weight: bold;
    }
    .name {
      margin-top: 10px;
      color: #000;
      font-size: 70px;
      line-height: 1;
      font-weight: 900;
    }
  }
}
.bottom-area {
  position: relative;
  height: 330px;
  padding: 70px 92px 62px;
  margin-top: 30px;
  background: #fff;
  box-sizing: border-box;
  &::after {
    content: "";
    position: absolute;
    top: -19px;
    left: 275px;
    border-top: 0 solid transparent;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-bottom: 20px solid #fff;
  }
  .question {
    color: #666;
    font-size: 30px;
    line-height: 1;
    letter-spacing: -0.1em;
    font-weight: 500;
  }
  .answer {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    color: #e51f2f;
    font-size: 56px;
    line-height: 70px;
    font-weight: bold;
    &::before {
      content: "“";
      position: absolute;
      top: 18px;
      left: -47px;
      font-size: 120px;
      color: #aaa;
      opacity: .3;
      font-weight: bold;
    }
    &::after {
      content: "”";
      position: absolute;
      top: 33px;
      right: -47px;
      font-size: 120px;
      color: #aaa;
      opacity: .3;
      font-weight: bold;
    }
  }
}
</style>