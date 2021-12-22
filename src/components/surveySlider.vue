<template>
  <swiper class="swiper" ref="mySwiper"
          :options="swiperOptions"
  >

    <swiper-slide>
      <div class="inner">
        <div class="top-area">
        <span class="top-area-img">
          <img src="http://party.emotion.co.kr/img/211216/jihyun-ahn.jpg"/>
        </span>
          <div class="top-area-desc">
            <span class="department">SP본부<br/>본부장</span>
            <strong class="name">안지현</strong>
          </div>
        </div>
        <div class="bottom-area">
          <h3 class="question">나에게 2021년은?</h3>
          <p class="answer">나이와 잔고는 반비례</p>
        </div>
      </div>

    </swiper-slide>
    <swiper-slide>
      <div class="inner">
        <div class="top-area">
        <span class="top-area-img">
          <img src="http://party.emotion.co.kr/img/211216/harin-kim.jpg"/>
        </span>
          <div class="top-area-desc">
            <span class="department">CP1본부<br/>리더</span>
            <strong class="name">김하린</strong>
          </div>
        </div>
        <div class="bottom-area">
          <h3 class="question">코로나가 끝나면 하고싶은 것</h3>
          <p class="answer">해외 가야지 더운나라 무조건</p>
        </div>
      </div>

    </swiper-slide>
    <swiper-slide>
      <div class="inner">
        <div class="top-area">
        <span class="top-area-img">
          <img src="http://party.emotion.co.kr/img/211216/sunwoo-park.jpg"/>
        </span>
          <div class="top-area-desc">
            <span class="department">CD1본부<br/>책임리더</span>
            <strong class="name">박선우</strong>
          </div>
        </div>
        <div class="bottom-area">
          <h3 class="question">코로나가 끝나면 하고싶은 것</h3>
          <p class="answer">스트릿 맨 파이터 참가신청</p>
        </div>
      </div>

    </swiper-slide>
    <swiper-slide>
      <div class="inner">
        <div class="top-area">
        <span class="top-area-img">
          <img src="http://party.emotion.co.kr/img/211216/yuseok-seo.jpg"/>
        </span>
          <div class="top-area-desc">
            <span class="department">BT1부문<br/>부문장</span>
            <strong class="name">서유석</strong>
          </div>
        </div>
        <div class="bottom-area">
          <h3 class="question">위드코로나 취미로 추천!</h3>
          <p class="answer">강인한 리더님 놀리기</p>
        </div>
      </div>

    </swiper-slide>
    <swiper-slide>
      <div class="inner">
        <div class="top-area">
        <span class="top-area-img">
          <img src="http://party.emotion.co.kr/img/211216/hyunmi-song.jpg"/>
        </span>
          <div class="top-area-desc">
            <span class="department">CT본부<br/>리더</span>
            <strong class="name">송현미</strong>
          </div>
        </div>
        <div class="bottom-area">
          <h3 class="question">나에게 2021년은?</h3>
          <p class="answer">확찐자</p>
        </div>
      </div>

    </swiper-slide>
    <swiper-slide>
      <div class="inner">
        <div class="top-area">
        <span class="top-area-img">
          <img src="http://party.emotion.co.kr/img/211216/yoonhye-kim.jpg"/>
        </span>
          <div class="top-area-desc">
            <span class="department">SP본부<br/>리더</span>
            <strong class="name">김윤혜</strong>
          </div>
        </div>
        <div class="bottom-area">
          <h3 class="question">이모션글로벌에게 바라는 것</h3>
          <p class="answer">주택자금대출<br/>(1억이상/무이자)</p>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="inner">
        <div class="top-area">
        <span class="top-area-img">
          <img src="http://party.emotion.co.kr/img/211216/euijeong-yi.jpg"/>
        </span>
          <div class="top-area-desc">
            <span class="department">CP1본부<br/>리더</span>
            <strong class="name">이의정</strong>
          </div>
        </div>
        <div class="bottom-area">
          <h3 class="question">이모션글로벌에게 바라는 것</h3>
          <p class="answer">IU, BTS 콘서트 보내주세요</p>
        </div>
      </div>

    </swiper-slide>
    <swiper-slide>
      <div class="inner">
        <div class="top-area">
        <span class="top-area-img">
          <img src="http://party.emotion.co.kr/img/211216/seonyeong-an.jpg"/>
        </span>
          <div class="top-area-desc">
            <span class="department">CP1본부<br/>팀원</span>
            <strong class="name">안선영</strong>
          </div>
        </div>
        <div class="bottom-area">
          <h3 class="question">나에게 2021년은?</h3>
          <p class="answer">콜라는 펩시<br/>
            ㄴ 사이다는 칠성</p>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="inner">
        <div class="top-area">
        <span class="top-area-img">
          <img src="http://party.emotion.co.kr/img/211216/raeseob-park.jpg"/>
        </span>
          <div class="top-area-desc">
            <span class="department">CT본부<br/>책임리더</span>
            <strong class="name">박래섭</strong>
          </div>
        </div>
        <div class="bottom-area">
          <h3 class="question">코로나가 끝나면 하고 싶은 것</h3>
          <p class="answer">뱃살 좀 없어지게</p>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="inner">
        <div class="top-area">
        <span class="top-area-img">
          <img src="http://party.emotion.co.kr/img/211216/seungjin.kang.jpg"/>
        </span>
          <div class="top-area-desc">
            <span class="department">사업대표</span>
            <strong class="name">강승진</strong>
          </div>
        </div>
        <div class="bottom-area">
          <h3 class="question">위드코로나 취미로 추천!</h3>
          <p class="answer">제안 ^^ ㅋ</p>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="inner">
        <div class="top-area">
        <span class="top-area-img">
          <img src="http://party.emotion.co.kr/img/211216/sungsoo.oh.jpg"/>
        </span>
          <div class="top-area-desc">
            <span class="department">CX본부<br/>본부장</span>
            <strong class="name">오성수</strong>
          </div>
        </div>
        <div class="bottom-area">
          <h3 class="question">이모션글로벌에게 바라는 점</h3>
          <p class="answer">자부심이 되어주길</p>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="inner">
        <div class="top-area">
        <span class="top-area-img">
          <img src="http://party.emotion.co.kr/img/211216/yonggu.kim.jpg"/>
        </span>
          <div class="top-area-desc">
            <span class="department">CX본부<br/>PD</span>
            <strong class="name">김용구</strong>
          </div>
        </div>
        <div class="bottom-area">
          <h3 class="question">코로나가 끝나면 하고 싶은 것</h3>
          <p class="answer">한국만 벗어나자</p>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="inner">
        <div class="top-area">
        <span class="top-area-img">
          <img src="http://party.emotion.co.kr/img/211216/seojin.kim.jpg"/>
        </span>
          <div class="top-area-desc">
            <span class="department">CM본부<br/>팀원</span>
            <strong class="name">김서진</strong>
          </div>
        </div>
        <div class="bottom-area">
          <h3 class="question">이모션글로벌에게 바라는 점</h3>
          <p class="answer">이모션 자체 사업 성공...?</p>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="inner">
        <div class="top-area">
        <span class="top-area-img">
          <img src="http://party.emotion.co.kr/img/211216/jisun.jang.jpg"/>
        </span>
          <div class="top-area-desc">
            <span class="department">CM본부<br/>팀원</span>
            <strong class="name">장지선</strong>
          </div>
        </div>
        <div class="bottom-area">
          <h3 class="question">이모션글로벌에게 바라는 점</h3>
          <p class="answer">↑↑연봉↑↑ / 주 4일 근무</p>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="inner">
        <div class="top-area">
        <span class="top-area-img">
          <img src="http://party.emotion.co.kr/img/211216/sungmin.kim.jpg"/>
        </span>
          <div class="top-area-desc">
            <span class="department">CD1본부<br/>팀원</span>
            <strong class="name">김성민</strong>
          </div>
        </div>
        <div class="bottom-area">
          <h3 class="question">이모션글로벌에게 바라는 점</h3>
          <p class="answer">그룹사 내 소개팅 주최</p>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="inner">
        <div class="top-area">
        <span class="top-area-img">
          <img src="http://party.emotion.co.kr/img/211216/chaerim.byun.jpg"/>
        </span>
          <div class="top-area-desc">
            <span class="department">CM본부<br/>팀원</span>
            <strong class="name">변채림</strong>
          </div>
        </div>
        <div class="bottom-area">
          <h3 class="question">위드코로나 취미로 추천!</h3>
          <p class="answer">홈트로 <br/>복근만들기</p>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="inner">
        <div class="top-area">
        <span class="top-area-img">
          <img src="http://party.emotion.co.kr/img/211216/mijoo.choi.jpg"/>
        </span>
          <div class="top-area-desc">
            <span class="department">CD1본부<br/>리더</span>
            <strong class="name">최미주</strong>
          </div>
        </div>
        <div class="bottom-area">
          <h3 class="question">나에게 2021년은?</h3>
          <p class="answer">남편이 생긴 해</p>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="inner">
        <div class="top-area">
        <span class="top-area-img">
          <img src="http://party.emotion.co.kr/img/211216/seungwon.jeong.jpg"/>
        </span>
          <div class="top-area-desc">
            <span class="department">CD1본부<br/>팀원</span>
            <strong class="name">정승원</strong>
          </div>
        </div>
        <div class="bottom-area">
          <h3 class="question">이모션글로벌에게 바라는 것</h3>
          <p class="answer">신형맥🥺</p>
        </div>
      </div>
    </swiper-slide>

    <swiper-slide>
      <div class="inner">
        <div class="top-area">
        <span class="top-area-img">
          <img src="http://party.emotion.co.kr/img/211216/hyoungwook.kim.jpg"/>
        </span>
          <div class="top-area-desc">
            <span class="department">CT본부<br/>책임리더</span>
            <strong class="name">김형욱</strong>
          </div>
        </div>
        <div class="bottom-area">
          <h3 class="question">위드코로나 취미로 추천!</h3>
          <p class="answer">술 마시다 잠자기</p>
        </div>
      </div>

    </swiper-slide>
    <swiper-slide>
      <div class="inner">
        <div class="top-area">
        <span class="top-area-img">
          <img src="http://party.emotion.co.kr/img/211216/seungki.min.jpg"/>
        </span>
          <div class="top-area-desc">
            <span class="department">CT본부<br/>팀원</span>
            <strong class="name">민승기</strong>
          </div>
        </div>
        <div class="bottom-area">
          <h3 class="question">코로나가 끝나면</h3>
          <p class="answer">밤새 소주먹기</p>
        </div>
      </div>

    </swiper-slide>
    <swiper-slide>
      <div class="inner">
        <div class="top-area">
        <span class="top-area-img">
          <img src="http://party.emotion.co.kr/img/211216/jihyeon-kim.jpg"/>
        </span>
          <div class="top-area-desc">
            <span class="department">CT본부<br/>팀원</span>
            <strong class="name">김지현</strong>
          </div>
        </div>
        <div class="bottom-area">
          <h3 class="question">위드코로나 취미로 추천!</h3>
          <p class="answer">빵 냄시 폴폴 <br/>베이킹 하기 🥨</p>
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
  name: 'surveySlider',
  components: {
    Swiper,
    SwiperSlide
  },
  methods: {
  },
  data() {
    return {
      swiperOptions: {
        loop: true,
        autoplay:{
           delay: 2500
         },
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
  content: "";
  position: absolute;
  width: 200px;
  height: 620px;
  top: -286px;
  left: -73px;
  background: #e3e1e6;
  z-index: -1;
}
.swiper-button-prev.swiper-btn-prev::before {
  content: "";
  position: absolute;
  width: 200px;
  height: 620px;
  top: -286px;
  left: -73px;
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
    position: relative;
    width: 260px;
    height: 260px;
    border-radius: 50%;
    background: url("../assets/images/frame.png") no-repeat center/cover;
    overflow: hidden;
    &:after {
      content: "";
      display: block;
      padding-bottom: 100%;
    }
    img {
      position: absolute;
      top: 50%;
      left: 50%;
      width: calc(100% - 20px);
      height: calc(100% - 20px);
      border-radius: 50%;
      transform: translate(-50%, -50%);
    }
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
    word-break: keep-all;
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