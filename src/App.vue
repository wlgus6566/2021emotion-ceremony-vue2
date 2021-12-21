<template>
  <div>
    <div class="floating"
         v-bind:class="{ active: showFloat }">
      <div class="ceo-img-wrap" @mouseenter="doMouseToggle" @mouseleave="doMouseToggle">
        <img class="ceo-img" src="@/assets/images/bn-floating-nor@2x.png" alt="플로팅 배너">
      </div>
      <img class="message"
           @mouseenter= "doMouseToggle"
           @mouseleave= "doMouseToggle"
           v-on:click = "goToVote"
           src="@/assets/images/bn-floating-hover.png"
           alt="플로팅 배너">
    </div>

    <div id="wrap">
      <div class="section1">
        <img src="@/assets/images/kv.jpg" alt="키비주얼">
      </div>
      <div class="tapContainer">
        <ul class="taplist">
          <li>
            <a href="javascript:void(0)" v-on:click="MoveScroll($event)">
              <img src="@/assets/images/tab-01.png" alt="section3">
            </a>
          </li>
          <li>
            <a href="javascript:void(0)" v-on:click="MoveScroll($event)">
              <img src="@/assets/images/tab-02.png" alt="section4">
            </a>
          </li>
          <li>
            <a href="javascript:void(0)" v-on:click="MoveScroll($event)">
              <img src="@/assets/images/tab-03.png" alt="section5">
            </a>
          </li>
          <li>
            <a href="javascript:void(0)"  v-on:click="MoveScroll($event)">
              <img src="@/assets/images/tab-04.png" alt="section6">
            </a>
          </li>
          <li>
            <a href="javascript:void(0)" v-on:click="MoveScroll($event)">
              <img src="@/assets/images/tab-05.png" alt="section7">
            </a>
          </li>
          <li>
            <a href="javascript:void(0)" v-on:click="MoveScroll($event)">
              <img src="@/assets/images/tab-06.png" alt="section8">
            </a>
          </li>
          <li>
            <a href="javascript:void(0)" v-on:click="MoveScroll($event)">
              <img src="@/assets/images/tab-07.png" alt="section9">
            </a>
          </li>
        </ul>
      </div>

      <div class="section2">
        <div class="top-container">
          <img src="@/assets/images/tit-01.png" alt="tit-01">
          <survey-slider/>
        </div>
        <div class="container survey-container">
          <ul class="wordsTab">
            <li>
              <input type="radio" id="first" name="wordsKey" v-model="words.sort" value="what">
              <label for="first">2021년은 나에게</label>
            </li>
            <li>
              <input type="radio" id="second" name="wordsKey" v-model="words.sort" value="after">
              <label for="second">코로나가 끝나면</label>
            </li>
            <li>
              <input type="radio" id="third" name="wordsKey" v-model="words.sort" value="hobby">
              <label for="third">위드코로나 추천 취미</label>
            </li>
            <li>
              <input type="radio" id="fourth" name="wordsKey" v-model="words.sort" value="want">
              <label for="fourth">이모션글로벌에게 바란다</label>
            </li>
          </ul>
          <div class="wordsContainer">
            <Loading :loading="loadingStatus"></Loading>
            <ul class="wordsList">
              <li v-for="(item, index) in words.list" :key="index">
                <p>
                  <span v-if="item['what']">2021년은 나에게 </span>
                  <span v-else-if="item['after']">코로나가 끝나면 </span>
                  <span v-else-if="item['hobby']">위드코로나 추천 취미로 </span>
                  <span v-else-if="item['want']">이모션글로벌에게 </span>
                  <strong class="answer">{{item[words.sort]}}</strong>
                  <span v-if="item['what']"> 였다</span>
                  <span v-else-if="item['after']"> 하고 싶다</span>
                  <span v-else-if="item['hobby']"> 추천한다</span>
                  <span v-else-if="item['want']"> 바란다</span>
                </p>
                <span class="desc">
                  <span class="department">{{item.department}}</span>
                  <span class="name">{{item.name}}</span>
                </span>
              </li>
            </ul>
            <pagination v-model="words.page" :per-page="words.size" :records="words.total" :options="words.options" /><!-- @paginate="myCallback" -->
          </div>
        </div>
      </div>
      <div class="section3">
        <div class="container">
          <img src="@/assets/images/tit-02.png" alt="tit-02">
          <div class="flip-wrap" >
            <MbtiItem :items="mbtilist"/>
          </div>
        </div>
      </div>

      <div class="section4">
        <img src="@/assets/images/tit-03.png" alt="tit-03" />
        <Section4 :randomPhoto="randomPhoto"/>
        <div class="btn-wrap">
          <button @click="showModalFc">투표하고 선물 100% 받기</button>
        </div>
      </div>

      <div class="section5">
        <img src="@/assets/images/tit-04.png" alt="tit-04" />
        <Section5 :randomMember="randomMember"/>
        <div class="btn-wrap">
          <button @click="showThirdModalFc">최강자 뽑으러 가기</button>
        </div>
      </div>

      <div class="section6">
        <div class="container">
          <img src="@/assets/images/tit-05.png" alt="tit-05" />
          <gallary-slider/>
        </div>
      </div>

      <div class="section7">
        <div class="container">
          <img src="@/assets/images/tit-06.png" alt="tit-06" />
          <count-down />
          <div style="position: relative; margin-bottom: 200px">
            <img style="margin-top: 120px;" src="@/assets/images/img-number.png" alt="number" />
            <span class="fight-number">85</span>
          </div>
        </div>
      </div>

      <div class="section8">
        <img src="@/assets/images/img-luckydraw.png" alt="luckydraw" />
      </div>

      <div class="section9">
        <div class="section9-container">
          <div ref="printMe">
            <div class="top-img-wrap">
              <img class="respect-save" src="@/assets/images/bg-respect-save.png" alt="저장이미지"/>
              <div class="respect">
                <img class="respect-sticker" src="@/assets/images/img-respect.png" alt="respect"/>
                <span id="photo-img" class="photo-img">
                  <img :src="this.imgUrl('img/211216/' + this.users.idImage + '.jpg')" @load="loadedImage" alt="user img"/>
                </span>
                <div class="user-info">
                  <p class="department">{{ this.users.department }}</p>
                  <P class="user-name">
                    <span class="name">{{ this.users.name }}</span>
                    <span class="level">{{ this.users.level }}</span>
                  </P>
                </div>
              </div>
            </div>
          </div>
          <div class="save-btn-area">
            <a :href="outputImage" class="save-btn" download></a>
            <img src="@/assets/images/save-btn.png" alt="btn"/>
          </div>
          <div class="container">
            <img src="@/assets/images/img-respect-end.png" alt="respect" />
          </div>
        </div>
      </div>

      <div class="section10 after-air" style="position: relative; display: block">
        <img src="@/assets/images/img-luckydraw-con-0.png" alt="luckydraw" style="position: absolute; z-index: -1;"/>
        <div class="container">
          <img src="@/assets/images/img-luckydraw-con-1.png" alt="luckydraw" style="margin-bottom: 60px;" />
          <ul class="award-list first">
            <li class="list-item">
              <img class="gift-img" src="@/assets/images/img-luckydraw-goods-1.png" alt="luckydraw"/>
              <img src="http://placehold.it/150X150"/>
              <p class="department">경영전략본부</p>
              <p class="name">최모션 책임리더</p>
            </li>
          </ul>
          <img src="@/assets/images/img-luckydraw-con-2.png" alt="luckydraw" />

          <ul class="award-list second">
            <li class="list-item">
              <img class="gift-img" src="@/assets/images/img-luckydraw-goods-2.png" alt="luckydraw"/>
              <img src="http://placehold.it/150X150"/>
              <p class="department">경영전략본부</p>
              <p class="name">최모션 책임리더</p>
            </li>
            <li class="list-item">
              <img class="gift-img" src="@/assets/images/img-luckydraw-goods-2.png" alt="luckydraw"/>
              <img src="http://placehold.it/150X150"/>
              <p class="department">경영전략본부</p>
              <p class="name">최모션 책임리더</p>
            </li>
          </ul>
          <img src="@/assets/images/img-luckydraw-con-3.png" alt="luckydraw" />

          <ul class="award-list third">
            <li class="list-item">
              <img src="http://placehold.it/150X150"/>
              <p class="department">경영전략본부</p>
              <p class="name">최모션 책임리더</p>
            </li>
            <li class="list-item">
              <img src="http://placehold.it/150X150"/>
              <p class="department">경영전략본부</p>
              <p class="name">최모션 책임리더</p>
            </li>
            <li class="list-item">
              <img src="http://placehold.it/150X150"/>
              <p class="department">경영전략본부</p>
              <p class="name">최모션 책임리더</p>
            </li>
            <li class="list-item">
              <img src="http://placehold.it/150X150"/>
              <p class="department">경영전략본부</p>
              <p class="name">최모션 책임리더</p>
            </li>
            <li class="list-item">
              <img src="http://placehold.it/150X150"/>
              <p class="department">경영전략본부</p>
              <p class="name">최모션 책임리더</p>
            </li>
          </ul>
          <img src="@/assets/images/img-luckydraw-con-4.png" alt="luckydraw" />

          <ul class="award-list fourth">
            <li class="list-item">
              <img src="http://placehold.it/150X150"/>
              <p class="department">경영전략본부</p>
              <p class="name">최모션 책임리더</p>
            </li>
            <li class="list-item">
              <img src="http://placehold.it/150X150"/>
              <p class="department">경영전략본부</p>
              <p class="name">최모션 책임리더</p>
            </li>
            <li class="list-item">
              <img src="http://placehold.it/150X150"/>
              <p class="department">경영전략본부</p>
              <p class="name">최모션 책임리더</p>
            </li>
            <li class="list-item">
              <img src="http://placehold.it/150X150"/>
              <p class="department">경영전략본부</p>
              <p class="name">최모션 책임리더</p>
            </li>
            <li class="list-item">
              <img src="http://placehold.it/150X150"/>
              <p class="department">경영전략본부</p>
              <p class="name">최모션 책임리더</p>
            </li>
            <li class="list-item">
              <img src="http://placehold.it/150X150"/>
              <p class="department">경영전략본부</p>
              <p class="name">최모션 책임리더</p>
            </li>
            <li class="list-item">
              <img src="http://placehold.it/150X150"/>
              <p class="department">경영전략본부</p>
              <p class="name">최모션 책임리더</p>
            </li>
            <li class="list-item">
              <img src="http://placehold.it/150X150"/>
              <p class="department">경영전략본부</p>
              <p class="name">최모션 책임리더</p>
            </li>
            <li class="list-item">
              <img src="http://placehold.it/150X150"/>
              <p class="department">경영전략본부</p>
              <p class="name">최모션 책임리더</p>
            </li>
            <li class="list-item">
              <img src="http://placehold.it/150X150"/>
              <p class="department">경영전략본부</p>
              <p class="name">최모션 책임리더</p>
            </li>
          </ul>

          <img src="@/assets/images/img-luckydraw-con-5.png" alt="luckydraw" />
          <ul class="award-list fifth">
            <li class="list-item">
              <img src="http://placehold.it/150X150"/>
              <p class="department">경영전략본부</p>
              <p class="name">최모션 책임리더</p>
            </li>
            <li class="list-item">
              <img src="http://placehold.it/150X150"/>
              <p class="department">경영전략본부</p>
              <p class="name">최모션 책임리더</p>
            </li>
            <li class="list-item">
              <img src="http://placehold.it/150X150"/>
              <p class="department">경영전략본부</p>
              <p class="name">최모션 책임리더</p>
            </li>
            <li class="list-item">
              <img src="http://placehold.it/150X150"/>
              <p class="department">경영전략본부</p>
              <p class="name">최모션 책임리더</p>
            </li>
            <li class="list-item">
              <img src="http://placehold.it/150X150"/>
              <p class="department">경영전략본부</p>
              <p class="name">최모션 책임리더</p>
            </li>
            <li class="list-item">
              <img src="http://placehold.it/150X150"/>
              <p class="department">경영전략본부</p>
              <p class="name">최모션 책임리더</p>
            </li>
            <li class="list-item">
              <img src="http://placehold.it/150X150"/>
              <p class="department">경영전략본부</p>
              <p class="name">최모션 책임리더</p>
            </li>
            <li class="list-item">
              <img src="http://placehold.it/150X150"/>
              <p class="department">경영전략본부</p>
              <p class="name">최모션 책임리더</p>
            </li>
            <li class="list-item">
              <img src="http://placehold.it/150X150"/>
              <p class="department">경영전략본부</p>
              <p class="name">최모션 책임리더</p>
            </li>
            <li class="list-item">
              <img src="http://placehold.it/150X150"/>
              <p class="department">경영전략본부</p>
              <p class="name">최모션 책임리더</p>
            </li>
          </ul>

        </div>
      </div>

      <div>
        <modal2 @closeModalFc="closeModalFc" :mbtiPhoto="mbtiPhoto" v-if="showModal"></modal2>
        <modal3 :allMemberList="allMemberList"
                @closeModalFc="closeThirdModalFc"
                v-if="showModal3">
        </modal3>
      </div>
    </div>
  </div>
</template>

<script>

import {
  getMemberContents,
  getMemberCardImage,
  getAllMemberCardImage,
  getSurvey,
  getMbti,
  postVotes,
  getAllPhoto
}
from '@/api';
import {commonMethods} from "@/utils/common-methods";
import MbtiItem from '@/components/MbtiItem'
import Loading from "@/components/Loading";
import Pagination from 'vue-pagination-2';

//
import Section4 from "./components/section4";
import Section5 from "@/components/section5";
import SurveySlider from "@/components/surveySlider";
import modal2 from "@/components/web_popup_02";
import modal3 from "@/components/web_popup_03";
import GallarySlider from "@/components/gallarySlider";
import CountDown from "@/components/countDown";
import {mapMutations} from "vuex";

export default {
  name: 'App',
  components: {
    CountDown,
    GallarySlider,
    SurveySlider,
    Loading,
    MbtiItem,
    Pagination,
    Section4,
    Section5,
    modal2,
    modal3,
  },
  mixins: [commonMethods],
  data() {
    return {
      users: [],
      awardList: {
        first: [],
        second: [],
        third: [],
        fourth: [],
      },
      now: '',
      outputImage: null,
      showModal: false,
      showModal3: false,
      loadingStatus: false,
      showFloat: false,
      mbtilist: [
        {
          mbti: "intj",
        },
        {
          mbti: "intp",
        },
        {
          mbti: "enfj",
        },
        {
          mbti: "entp",
        },
        {
          mbti: "infj",
        },
        {
          mbti: "infp",
        },
        {
          mbti: "entj",
        },
        {
          mbti: "enfp",
        },
        {
          mbti: "istj",
        },
        {
          mbti: "istp",
        },
        {
          mbti: "estj",
        },
        {
          mbti: "estp",
        },
        {
          mbti: "isfj",
        },
        {
          mbti: "isfp",
        },
        {
          mbti: "esfj",
        },
        {
          mbti: "esfp",
        },
        {
          mbti: "other",
        }
      ],
      mbtiPhoto : [],
      randomPhoto : [],
      randomMember : [],
      allMemberList: [],
      words: {
        page: 1, // 현재페이지
        size: 10, // 한페이지에 뿌려줄 갯수
        sort: 'what', // 유저가 고른 탭의 value
        list: [], // 백엔드에서 받은 글 목록
        total: 2000, // 백엔드에서 받은 전체 글의 갯수
        options: {
          texts: { count: '' },
          chunk: 5 // pagination 의 max 페이지 수
        },
      },
    };
  },
  created() {
    const mail = new URL(window.location).searchParams.get('mail');
    console.log(mail)
    window.addEventListener('scroll', this.showFloating);
    this.timeOut();
    this.startSpinner();
    this.getMemberContents();
    this.getMemberCardImage();
    this.getAllMemberCardImage();
    this.getSurvey();
    //this.getRandomMemberTen();
    this.getMbti();
    this.getAllPhoto();
  },
  watch: {
    'words.page'(){
      this.getSurvey()
    },
    'words.sort'(){
      this.words.page = 1;
      this.getSurvey()
    },
  },
  methods: {
    ...mapMutations( ['SWIPER_IDX']),
    async saveImage() {// 상장 이미지 저장
      const el = this.$refs.printMe;
      const options = {
        type: 'dataURL',
        allowTaint: false,
        useCORS: true
      }
      this.outputImage = await this.$html2canvas(el, options);
    },
    async getAllPhoto(){
      try {
        const response = await getAllPhoto()
        this.mbtiPhoto = response.filter(el=>el.physicalFileName);
        console.log(this.mbtiPhoto);
        this.SWIPER_IDX(this.mbtiPhoto[0].id)
        this.randomPhoto = this.mbtiPhoto.filter((el, i)=>i<10);
      } catch (e) {
        console.log('getAllPhoto', e)
      } finally {
        console.log('getAllPhoto finally')
      }
    },
    async getMemberContents(){
      try {
        const response = await getMemberContents()
        console.log('getMemberContents', response)
      } catch (e) {
        console.log('getMemberContents', e)
      } finally {
        console.log('getMemberContents finally')
      }
    },
    async getMemberCardImage(){
      try {
        const response = await getMemberCardImage()
        this.users = response;
        console.log('getMemberCardImage', response);
        /*this.saveImage();*/
      } catch (e) {
        console.log('getMemberCardImage', e)
      } finally {
        console.log('getMemberCardImage finally')

      }
    },
    async getAllMemberCardImage(){ //이글리안 3명투표
      try {
        const response = await getAllMemberCardImage()
        console.log('getAllMemberCardImage', response);
        this.allMemberList = response;
        this.randomMember = this.allMemberList.filter((el, i)=>i<10);
        console.log(this.randomMember)
      } catch (e) {
        console.log('getAllMemberCardImage', e)
      } finally {
        console.log('getAllMemberCardImage finally')
      }
    },
    async getSurvey(){
      try {
        this.startSpinner();
        const response = await getSurvey({
          page : this.words.page,
          sort : this.words.sort,
        })
        console.log('getSurvey', response);
        this.words.list = response.surveyResponseList;
        this.words.total = response.paging.totalCount;
      } catch (e) {
        console.log('getSurvey', e)
      } finally {
        console.log('getSurvey finally')
        this.endSpinner();
      }
    },

    /*async getRandomMemberTen(){
      try {
        const response = await getRandomMemberTen()
        console.log('getRandomMemberTen', response)
      } catch (e) {
        console.log('getRandomMemberTen', e)
      } finally {
        console.log('getRandomMemberTen finally')
      }
    },*/
    async getMbti(){
      try {
        const response = await getMbti({
               mbti : "esfp"
            }
        )
        console.log('getMbti', response);
        //this.saveImage();
      } catch (e) {
        console.log('getMbti', e)

      } finally {
        console.log('getMbti finally')
      }
    },
    async postVotes(){
      try {
        const response = await postVotes()
        console.log('postVotes', response)
      } catch (e) {
        console.log('postVotes', e)
      } finally {
        console.log('postVotes finally')
      }
    },
    doMouseToggle(event) {
      document.querySelector('.ceo-img').classList.toggle('active');
      document.querySelector('.message').classList.toggle('active');
    },
    startSpinner() {
      this.loadingStatus = true;
    },
    endSpinner() {
      this.loadingStatus = false;
    },
    showModalFc() {
      this.showModal = true;
      document.querySelector('body').classList.add('modal-open');
    },
    closeModalFc() {
      this.showModal = false;
      document.querySelector('body').classList.remove('modal-open');
    },
    showThirdModalFc() {
      this.getAllMemberCardImage();
      this.showModal3 = true;
      document.querySelector('body').classList.add('modal-open');
    },
    closeThirdModalFc() {
      this.showModal3 = false;
      document.querySelector('body').classList.remove('modal-open');
    },
    MoveScroll(e) {
      const locate = e.target.alt;
      const locateSection =  document.querySelector(`.${locate}`);
      const targetBoxOffset = locateSection.offsetTop;
      window.scrollTo({top:targetBoxOffset, left:0, behavior:'smooth'});
    },
    goToVote() {
      const voteLocation =  document.querySelector('.section4');
      window.scrollTo({top:voteLocation.offsetTop, left:0, behavior:'smooth'});
    },
    showFloating() {
      const Section4Offset = document.querySelector('.section4').offsetTop;
      if ( window.scrollY > Section4Offset) {
        this.showFloat = true;
      } else {
        this.showFloat = false;
      }
    },
    loadedImage() {
      this.saveImage();
    },
    timeOut() {
      setTimeout(function (){
        const date = new Date();
        this.now = date.getDay() + ":" + date.getMinutes() + ":"
            + date.getSeconds();
        console.log(date.getDay() + ":" + date.getMinutes() + ":"
            + date.getSeconds())
      },1000);
    }
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.showFloating);
  }
}
</script>

<style lang="scss">
@import url('assets/css/reset.css');

body {
  font-family: 'Noto Sans KR', sans-serif;
  margin: 0 auto;
}
body.modal-open {
  overflow: hidden;
}
.container {
  width: 1280px;
  min-width: 1280px;
  margin: 0 auto;
  box-sizing: border-box;
}
#wrap {
  width: 100%;
  min-width: 1540px;
  margin: 0 auto;
  background: #000;
}
#wrap > div {
  min-width: 1280px;
  overflow: hidden;
  text-align: center;
}
#wrap .section1 {
  background: #0e0e10;
}
#wrap .section2 {
  background: #e3e1e6;
  padding-bottom: 200px;
}
#wrap .section2 .top-container {
  width: 1540px;
  overflow: hidden;
  margin: 0 auto;
}
#wrap .section2 .survey-container {
  background: #fff;
  margin: 0 auto;
}
#wrap .section3 {
  background: #d7d7db;
  padding-bottom: 200px;
}
#wrap .section3 .flip-wrap {
  width: 66.6%;
  margin: 0 auto;
  margin-top: 100px;
}
#wrap .section4 {
  padding-bottom: 100px;
  background: #e3e1e6;
}
#wrap .section5 {
  padding-bottom: 200px;
  background: #d7d7db;
}
#wrap .section6 {
  margin: 0 auto;
  padding-bottom: 214px;
  background: #e3e1e6;
  .container {
    width: 1540px;
    min-width: 1540px;
  }
}
#wrap .section7 {
  background: #212024;
}
#wrap .section8 {
  background: #212024;
  margin: 0 auto;
}

#wrap .section9 {
  background: #0e0d0f;
  margin: 0 auto;
  .respect {
    position: absolute;
    top: 3%;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .section9-container {
    max-width: 1920px;
    margin: 0 auto;
    width: 100%;
    .top-img-wrap {
      position: relative;
      background: url("./assets/images/bg_respect_top.png") center/cover;
      .respect-save {
        width: 80%;
        margin: 0 auto;
        text-align: center;
        margin-top: 4%;
      }
      .respect-sticker {
        position: absolute;
        left: 26.5%;
        top: 32%;
        width: 20%;
        z-index: 1;
      }

      .user-info {
        position: absolute;
        top: 54%;
        left: 50%;
        transform: translateX(-50%);
        .department {
          font-size: 60px;
          line-height: 1;
          color: #dcdce5;
        }
        .user-name {
          margin-top: 30px;
          font-size: 90px;
          line-height: 1;
          color: #fff;
          font-weight: bold;
        }
      }
      .photo-img {
        position: absolute;
        width: 34%;
        top: 20.5%;
        left: 50%;
        transform: translateX(-50%);
        opacity: 1;
        border-radius: 50%;
        overflow: hidden;
        box-sizing: border-box;
/*        background: url("../src/assets/images/frame.jpg") no-repeat center/cover;*/
        &:after {
      /*    content: "";
          display: block;
          padding-bottom: 100%;*/
        }
        img + img {
          position: absolute;
          top: 50%;
          left: 50%;
          width: calc(100% - 40px);
          height: calc(100% - 40px);
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }
      }

    }
    img {
      width: 100%;
    }
  }
}
.save-btn-area {
  position: relative;
  .save-btn {
    position: absolute;
    left: 36%;
    top: 0;
    width: 28%;
    height: 67%;
    opacity: 0;
  }
}
.tapContainer {
  position: sticky;
  top: 0;
  width: 100%;
  background: #000;
  margin: 0 auto;
  z-index: 1000;
  .taplist {
    display: flex;
    justify-content: space-between;
    max-width: 1280px;
    height: 80px;
    margin: 0 auto;
    align-items: center;
    li {
      color: #fff;
      a {
        display: inline-block;
        width: 100%;
        text-align: center;
        img {
          padding: 29px 0;
        }
      }
    }
  }
}



.wordsTab {
  display:flex;
  justify-content:center;
  width: 100%;
  background:#7e7d80;
  padding: 0 59px;
  margin-top: 100px;
  box-sizing: border-box;
  li {
    input:checked + label {
      background: url("../src/assets/images/txt-tab-prs-01.png") no-repeat center center;
      &:before {
        content: "";
        position: absolute;
        bottom: -1px;
        left: 50%;
        border-top: 0 solid transparent;
        border-left: 15px solid transparent;
        border-right: 15px solid transparent;
        border-bottom: 20px solid #fff;
        transform: translateX(-50%);
      }
    }
    position: relative;
    padding: 0 44px;
    label {
      position: relative;
      display: block;
      width: 185px;
      height: 28px;
      padding: 46px 0;
      text-indent:-9999px;
      background: url("../src/assets/images/txt-tab-nor-01.png") no-repeat center center;
    }
    input {
      position:absolute;
      width:1px;
      height:1px;
      padding:0;
      margin:-1px;
      overflow:hidden;
      clip:rect(0,0,0,0);
      border:0;
      text-indent: -9999em;
    }
    &:nth-child(2) {
      label {
        width: 183px;
        background: url("../src/assets/images/txt-tab-nor-02.png") no-repeat center center;
      }
      input:checked + label {
        background: url("../src/assets/images/txt-tab-prs-02.png") no-repeat center center;
      }
    }
    &:nth-child(3) {
      label {
        width: 240px;
        background: url("../src/assets/images/txt-tab-nor-03.png") no-repeat center center;
      }
      input:checked + label {
        background: url("../src/assets/images/txt-tab-prs-03.png") no-repeat center center;
      }
    }
    &:nth-child(4) {
      label {
        width: 284px;
        background: url("../src/assets/images/txt-tab-nor-04.png") no-repeat center center;
      }
      input:checked + label {
        background: url("../src/assets/images/txt-tab-prs-04.png") no-repeat center center;
      }
    }
  }

}
.wordsContainer {
  position: relative;
  padding: 51px 40px 61px;
  box-sizing: border-box;
  .wordsList {
    li {
      display: flex;
      justify-content: space-between;
      line-height: 79px;
      padding: 0 20px 0 30px;
      font-size: 26px;
      border-bottom: 1px solid #ccc;
      p {
        display: flex;
        justify-content: flex-start;
        flex: 1;
        text-align: left;
        .answer {
          max-width: 642px;
          text-align: left;
          color: #e51f2f;
          font-weight: bold;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          + span {
            margin-left: 5px;
          }
        }
        span {
          margin-right: 5px;
          text-align: left;
          color: #333;
        }
      }
      .desc {
        .department {
          display: inline-block;
          margin-left: 50px;
          color: #666;
        }
        .name {
          display: inline-block;
          margin-left: 50px;
          color: #666;
        }
      }
    }
  }
}

.wordsTab li:not(:first-child)::before {
  content: '';
  position: absolute;
  width: 2px;
  height: 24px;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  background: #fff;
}

.pagination {
  display:flex;
  justify-content:center;
  margin-top: 22px;
}
.pagination li a {
  padding:0 10px;
  font-size: 28px;
  color: #999;
  font-weight: normal;
}
.pagination li.active a{
  color: #000;
  font-weight: bold;
}
.VuePagination__pagination-item-prev-chunk , .VuePagination__pagination-item-next-chunk {
  display: none;
}
.pagination li + li {margin-left:10px;}
.VuePagination__count {display:none}

.floating {
  position: fixed;
  right: 60px;
  bottom: 40px;
  width: 720px;
  height: 520px;
  text-align: center;
  transform: translateY(50%);
  opacity: 0;
  visibility: hidden;
  transition: 0.4s;
  z-index: 999;
}
.floating.active {
  opacity: 1;
  visibility: visible;
  transform: translateY(0%);

}

.floating .ceo-img-wrap {
  position: absolute;
  width: 280px;
  height: 370px;
  right: 0;
  bottom: 0;
}

.floating .ceo-img {
  position: absolute;
  width: 280px;
  height: 370px;
  right: 0;
  bottom: 0;
  opacity: 1;
  transition: 0.4s ease-in-out;
  transform: translateY(0) scale(1);
  z-index: 2000;
  visibility: visible;
 /* animation: upDown 2s infinite;
  animation-fill-mode : both;*/
}
/*@keyframes upDown {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(5%);
  }
  100% {
    transform: translateY(0);
  }
}*/
.floating .ceo-img.active {
  opacity: 0;
  transform: translateY(50%) scale(0);
  visibility: hidden;
  transform-origin: right bottom;
}

.floating .message {
  position: absolute;
  width: 720px;
  height: 520px;
  left: 0;
  top: 0;
  transform: translateY(50%) scale(0);
  opacity: 0;
  transition: 0.4s;
  visibility: hidden;
  transform-origin: right bottom;
  cursor: pointer;
}
.floating .message.active {
  transform: translateY(0%) scale(1);
  opacity: 1;
  transition: 0.4s ease-in-out;
  visibility: visible;
}
.btn-wrap {
  margin-top: 100px;
  button {
    width: 640px;
    height: 120px;
    background-color: #e51f2f;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url("./assets/images/txt-btn-03.png");
    border: none;
    font-size: 0;
    text-indent: -9999em;
  }
  button.after {
    background-image: url("./assets/images/txt-btn-01.png");
    background-color: #666666;
  }
}
.section4 {
  button {
    background-image: url("./assets/images/txt-btn-02.png");
  }
}
.fight-number  {
  position: absolute;
  font-size: 160px;
  font-weight: 900;
  left: 50%;
  top: 59%;
  color: #fff;
  transform: translate(-50%, -50%);
  letter-spacing: 0.02em;
}
.section10 {
  background: #18171a;
  .award-list {
    display: flex;
    justify-content: center;
    padding: 60px 0;
    width: 100%;
    .list-item {
      position: relative;
      display: flex;
      justify-content: center;
      flex-direction: column;

      .gift-img {
        position: absolute;
        bottom: 9%;
        left: -37%;
        transform: translateY(-50%);
        width: 300px;
        height: 250px;

        + img {
          width: 428px;
          height: 428px;
          border-radius: 50%;
        }
      }

      .department {
        margin-top: 60px;
        color: #999;
        font-size: 48px;
        font-weight: 500;
        line-height: 1;
      }

      .name {
        margin-top: 20px;
        color: #fff;
        font-size: 60px;
        font-weight: bold;
        line-height: 1;
      }
    }
    &.second {
      .list-item {
        margin: 0 60px;
        .gift-img {
          bottom: 16%;
          left: -23%;
          transform: translateY(-50%);
          width: 200px;
          height: 136px;

          + img {
            width: 320px;
            height: 320px;
            border-radius: 50%;
          }
        }

        .department {
          margin-top: 60px;
          font-size: 36px;
        }

        .name {
          font-size: 50px;
        }
      }
    }
    &.third {
      padding: 60px 0 0;
      margin-bottom: 160px;
      .list-item {
        margin: 0 10px;
        img {
          width: 214px;
          height: 214px;
          border-radius: 50%;
        }
        .department {
          margin-top: 30px;
          font-size: 24px;
        }
        .name {
          margin-top: 10px;
          font-size: 30px;
        }
      }
    }
    &.fourth, &.fifth {
      margin-bottom: 160px;
      flex-wrap: wrap;
      justify-content: center;
      padding: 0;
      .list-item {
        margin: 60px 10px 0;
        img {
          width: 214px;
          height: 214px;
          border-radius: 50%;
        }
        .department {
          margin-top: 30px;
          font-size: 24px;
        }
        .name {
          margin-top: 10px;
          font-size: 30px;
        }
      }
    }
  }
}

</style>
