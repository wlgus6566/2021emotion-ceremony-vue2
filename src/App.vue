<template>
  <div>
    <span v-bind:class="{ active: showFloat }" class="floating">
      <span class="santa"
      >
        싼타사진</span>
      <span class="message">
        투표해주세요투표해줘어어어</span>
    </span>
    <Loading :loading="loadingStatus"></Loading>
    <div id="wrap">
      <div class="section1">
        <img src="@/assets/images/kv.jpg" alt="">
      </div>
      <ul class="taplist">
        <li>
          <a href="javascript:void(0)" data-section="section1" v-on:click="MoveScroll">섹션1</a>
        </li>
        <li>
          <a href="javascript:void(0)" data-section="section2" v-on:click="MoveScroll">섹션2</a>
        </li>
        <li>
          <a href="javascript:void(0)" data-section="section3" v-on:click="MoveScroll">섹션3</a>
        </li>
        <li>
          <a href="javascript:void(0)" data-section="section4" v-on:click="MoveScroll">섹션4</a>
        </li>
        <li>
          <a href="javascript:void(0)" data-section="section5" v-on:click="MoveScroll">섹션5</a>
        </li>
      </ul>

      <div class="section2">
        <div class="top-container">
          <img src="@/assets/images/tit-01.png" alt="">
          <survey-slider/>
        </div>
        <div class="container survey-container">
          <ul class="wordsTab">
            <li>
              <input checked type="radio" id="first" name="wordsKey" v-model="words.sort" value="2021년은 나에게">
              <label for="first"></label>
            </li>
            <li>
              <input type="radio" id="second" name="wordsKey" v-model="words.sort" value="코로나가 끝나면">
              <label for="second"></label>
            </li>
            <li>
              <input type="radio" id="third" name="wordsKey" v-model="words.sort" value="위드코로나 추천 취미">
              <label for="third"></label>
            </li>
            <li>
              <input type="radio" id="fourth" name="wordsKey" v-model="words.sort" value="이모션글로벌에게 바란다">
              <label for="fourth"></label>
            </li>

            <!--            <li>
                          <label>
                            <input type="radio" name="wordsKey" v-model="words.sort" value="코로나가 끝나면">
                          </label>
                        </li>
                        <li>
                          <label>
                            <input type="radio" name="wordsKey" v-model="words.sort" value="위드코로나 추천 취미">
                          </label>
                        </li>
                        <li>
                          <label>
                            <input type="radio" name="wordsKey" v-model="words.sort" value="이모션글로벌에게 바란다">
                          </label>
                        </li>-->
          </ul>
          <!--          <ul class="wordsList" v-for="(item, index) in words.list" :key="index">
                      <li>{{item.body}}</li>
                    </ul>-->
          <div class="wordsContainer">
            <ul class="wordsList">
              <li>
                <p>
                  코로나가 끝나면 <span class="answer">유럽해외여행</span> 하고 싶다.
                </p>
                <span class="desc">
                  <span class="department">CD본부</span>
                  <span class="name">김모션</span>
                </span>
              </li>
              <li>
                <p>
                  코로나가 끝나면 <span class="answer">유럽해외여행</span> 하고 싶다.
                </p>
                <span class="desc">
                  <span class="department">CD본부</span>
                  <span class="name">김모션</span>
                </span>
              </li>
              <li>
                <p>
                  코로나가 끝나면 <span class="answer">유유럽해외여행유럽해외여행유럽해외여행해외여행</span> 하고 싶다.
                </p>
                <span class="desc">
                  <span class="department">CD본부</span>
                  <span class="name">김모션</span>
                </span>
              </li>
              <li>
                <p>
                  코로나가 끝나면 <span class="answer">유럽해외여행유럽해외여행유럽해외여행유럽해외여행</span> 하고 싶다.
                </p>
                <span class="desc">
                  <span class="department">CD본부</span>
                  <span class="name">김모션</span>
                </span>
              </li>
              <li>
                <p>
                  코로나가 끝나면 <span class="answer">유럽유럽해외여행유럽해외여행</span> 하고 싶다.
                </p>
                <span class="desc">
                  <span class="department">CD본부</span>
                  <span class="name">김모션</span>
                </span>
              </li>
            </ul>
            <pagination v-model="words.page" :per-page="words.size" :records="words.total" :options="words.options" /><!-- @paginate="myCallback" -->
          </div>
        </div>
      </div>
      <div class="section3">
        <div class="container">
          <img src="@/assets/images/tit-02.png" alt="">
          <div class="flip-wrap" >
            <MbtiItem :items="mbtilist"/>
          </div>
        </div>
      </div>

      <div class="section4">
        <img src="@/assets/images/tit-03.png" alt="" />
        <Section4/>
        <div class="btn-wrap">
          <button>투표하고 선물 100% 받기</button>
        </div>
      </div>

      <div class="section5">
        <img src="@/assets/images/tit-04.png" alt="" />
        <Section5/>
        <div class="btn-wrap">
          <button>최강자 뽑으러 가기</button>
        </div>
      </div>

      <div class="section6">
        <div class="container">
          <img src="@/assets/images/tit-05.png" alt="" />
          <gallary-slider/>
        </div>
      </div>

      <div class="section7">
        <div class="container">
          <img src="@/assets/images/tit-06.png" alt="" />
          <img style="margin-top: 120px;" src="@/assets/images/img-ready.png" alt="" />
          <Section7 />
          <img style="margin-top: 120px;" src="@/assets/images/img-number.png" alt="" />
        </div>
      </div>

      <div class="section8">
        <img src="@/assets/images/img-luckydraw.png" alt="" />
      </div>

      <div class="section9">
        <img src="@/assets/images/bg-respect.png" alt="" />
        <img src="@/assets/images/img-respect-end.png" alt="" />
      </div>

      <div>
        <a href="javascript:void(0)" @click="showModalFc">클릭</a>
        <modal2 @closeModalFc="closeModalFc" v-if="showModal"></modal2>
      </div>
    </div>
  </div>
</template>

<script>



import { fetchUser, fetchWords } from '@/api';
import MbtiItem from '@/components/MbtiItem'
import Loading from "@/components/Loading";
import Pagination from 'vue-pagination-2';

//
import Section4 from "./components/section4";
import Section5 from "@/components/section5";
import Section7 from "./components/section7";
import SurveySlider from "@/components/surveySlider";
// import modal from "@/components/web_popup_01";
import modal3 from "@/components/web_popup_03";
import GallarySlider from "@/components/gallarySlider";

export default {
  name: 'App',
  components: {
    GallarySlider,
    SurveySlider,
    Loading,
    MbtiItem,
    Pagination,
    Section4,
    Section5,
    Section7,
    //modal3
  },
  data() {
    return {
      users: [],
      showModal: false,
      loadingStatus: false,
      showFloat: false,
      mbtilist: [
        {
          mbti: "intj",
          match:[
            {
              name: "김지현",
              position: "디벨로퍼",
              thumbnail: 'http://placehold.it/50X50'
            },
            {
              name: "김재훈",
              position: "디벨로퍼",
              thumbnail: 'http://placehold.it/50X50'
            },
          ],
          fact: "개썅마웨~ 이상주의자",
          desc:
              "자유로운 연예인유형~~~~~~"
        },
        {
          mbti: "intp",
          match:[
            {
              name: "정소현",
              position: "책임리더",
              thumbnail: 'http://placehold.it/50X50'
            },
            {
              name: "이보경",
              position: "디벨로퍼",
              thumbnail: 'http://placehold.it/50X50'
            },
          ],
          fact: "좋아하는 사람 싫어하는 사람 명확",
          desc:
              "통솔자형~~~~~"
        },
        {
          mbti: "enfj",
          match:[
            {
              name: "김빠빠",
              position: "리더",
              thumbnail: 'http://placehold.it/50X50'
            },
            {
              name: "김삐삐",
              position: "디벨로퍼",
              thumbnail: 'http://placehold.it/50X50'
            },
          ],
          fact: "나한테 못해주면 걍 1도 없음",
          desc:
              "사랑스런유형~~~~~~"
        },
        {
          mbti: "entp",
          match:[
            {
              name: "라푸",
              position: "리더",
              thumbnail: 'http://placehold.it/50X50'
            },
            {
              name: "라스",
              position: "디벨로퍼",
              thumbnail: 'http://placehold.it/50X50'
            },
          ],
          fact: "모든이와 찰떡궁합",
          desc:
              "핵인싸유형~~~~~~"
        },
        {
          mbti: "infj",
          match:[
            {
              name: "김지현",
              position: "디벨로퍼",
              thumbnail: 'http://placehold.it/50X50'
            },
            {
              name: "김재훈",
              position: "디벨로퍼",
              thumbnail: 'http://placehold.it/50X50'
            },
          ],
          fact: "개썅마웨~ 이상주의자",
          desc:
              "자유로운 연예인유형~~~~~~"
        },
        {
          mbti: "infp",
          match:[
            {
              name: "정소현",
              position: "책임리더",
              thumbnail: 'http://placehold.it/50X50'
            },
            {
              name: "이보경",
              position: "디벨로퍼",
              thumbnail: 'http://placehold.it/50X50'
            },
          ],
          fact: "좋아하는 사람 싫어하는 사람 명확",
          desc:
              "통솔자형~~~~~"
        },
        {
          mbti: "entj",
          match:[
            {
              name: "김빠빠",
              position: "리더",
              thumbnail: 'http://placehold.it/50X50'
            },
            {
              name: "김삐삐",
              position: "디벨로퍼",
              thumbnail: 'http://placehold.it/50X50'
            },
          ],
          fact: "나한테 못해주면 걍 1도 없음",
          desc:
              "사랑스런유형~~~~~~"
        },
        {
          mbti: "enfp",
          match:[
            {
              name: "라푸",
              position: "리더",
              thumbnail: 'http://placehold.it/50X50'
            },
            {
              name: "라스",
              position: "디벨로퍼",
              thumbnail: 'http://placehold.it/50X50'
            },
          ],
          fact: "모든이와 찰떡궁합",
          desc:
              "핵인싸유형~~~~~~"
        },
        {
          mbti: "istj",
          match:[
            {
              name: "김지현",
              position: "디벨로퍼",
              thumbnail: 'http://placehold.it/50X50'
            },
            {
              name: "김재훈",
              position: "디벨로퍼",
              thumbnail: 'http://placehold.it/50X50'
            },
          ],
          fact: "개썅마웨~ 이상주의자",
          desc:
              "자유로운 연예인유형~~~~~~"
        },
        {
          mbti: "istp",
          match:[
            {
              name: "정소현",
              position: "책임리더",
              thumbnail: 'http://placehold.it/50X50'
            },
            {
              name: "이보경",
              position: "디벨로퍼",
              thumbnail: 'http://placehold.it/50X50'
            },
          ],
          fact: "좋아하는 사람 싫어하는 사람 명확",
          desc:
              "통솔자형~~~~~"
        },
        {
          mbti: "estj",
          match:[
            {
              name: "김빠빠",
              position: "리더",
              thumbnail: 'http://placehold.it/50X50'
            },
            {
              name: "김삐삐",
              position: "디벨로퍼",
              thumbnail: 'http://placehold.it/50X50'
            },
          ],
          fact: "나한테 못해주면 걍 1도 없음",
          desc:
              "사랑스런유형~~~~~~"
        },
        {
          mbti: "estp",
          match:[
            {
              name: "라푸",
              position: "리더",
              thumbnail: 'http://placehold.it/50X50'
            },
            {
              name: "라스",
              position: "디벨로퍼",
              thumbnail: 'http://placehold.it/50X50'
            },
          ],
          fact: "모든이와 찰떡궁합",
          desc:
              "핵인싸유형~~~~~~"
        },
        {
          mbti: "isfj",
          match:[
            {
              name: "김지현",
              position: "디벨로퍼",
              thumbnail: 'http://placehold.it/50X50'
            },
            {
              name: "김재훈",
              position: "디벨로퍼",
              thumbnail: 'http://placehold.it/50X50'
            },
          ],
          fact: "개썅마웨~ 이상주의자",
          desc:
              "자유로운 연예인유형~~~~~~"
        },
        {
          mbti: "isfp",
          match:[
            {
              name: "정소현",
              position: "책임리더",
              thumbnail: 'http://placehold.it/50X50'
            },
            {
              name: "이보경",
              position: "디벨로퍼",
              thumbnail: 'http://placehold.it/50X50'
            },
          ],
          fact: "좋아하는 사람 싫어하는 사람 명확",
          desc:
              "통솔자형~~~~~"
        },
        {
          mbti: "esfj",
          match:[
            {
              name: "김빠빠",
              position: "리더",
              thumbnail: 'http://placehold.it/50X50'
            },
            {
              name: "김삐삐",
              position: "디벨로퍼",
              thumbnail: 'http://placehold.it/50X50'
            },
          ],
          fact: "나한테 못해주면 걍 1도 없음",
          desc:
              "사랑스런유형~~~~~~"
        },
        {
          mbti: "esfp",
          match:[
            {
              name: "라푸",
              position: "리더",
              thumbnail: 'http://placehold.it/50X50'
            },
            {
              name: "라스",
              position: "디벨로퍼",
              thumbnail: 'http://placehold.it/50X50'
            },
          ],
          fact: "모든이와 찰떡궁합",
          desc:
              "핵인싸유형~~~~~~"
        },
      ],
      words: {
        page: 1, // 현재페이지
        size: 10, // 한페이지에 뿌려줄 갯수
        sort: 'a', // 유저가 고른 탭의 value
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
    window.addEventListener('scroll', this.showFloating);
    this.startSpinner();
    fetchUser()
        .then( (response) => {
          this.users = response.data;
          this.endSpinner();
          /*         this.$store.commit("MU_EMAIL", response.data);*/
        })
        .catch(error => console.log(error));
    this.getWords();
  },
  watch: {
    'this.words.page'(){
      this.getWords()
    },
    'this.words.sort'(){
      this.getWords()
    },
  },
  methods: {
    async getWords(){
      try {
        this.startSpinner();
        const {data : response} = await fetchWords({
          page : this.words.page,
          size : this.words.size,
          sort : this.words.sort,
        })
        //this.words.list = response.list;
        //this.words.total = response.total;
      } catch (e) {
        console.log(e)
      } finally {
        this.endSpinner();
      }
    },
    startSpinner() {
      console.log('패치');
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
    MoveScroll(e) {
      const locate = e.target.dataset.section;
      const locateSection =  document.querySelector(`.${locate}`);
      const targetBoxOffset = locateSection.offsetTop;
      window.scrollTo({top:targetBoxOffset, left:0, behavior:'smooth'});
    },
    showFloating() {
      const Section3Offset = document.querySelector('.section3').offsetTop;
      if ( window.scrollY > Section3Offset) {
        this.showFloat = true;
      } else {
        this.showFloat = false;
      }
    },
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
  margin: 0 auto;
  box-sizing: border-box;
}
button {
  width: 200px;
  height: 50px;
  border: 1px solid #000;
}
#wrap {
  width: 100%;
  margin: 0 auto;
}
#wrap > div {
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
    width: 1580px;
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
}
.taplist {
  position: sticky;
  top: 0;
  display: flex;
  width: 100%;
  margin: 0 auto;
  padding: 10px 0;
  background: #000;
  z-index: 1000;
}
.taplist li {
  width: 25%;
  color: #fff;
  border-left: 1px solid #fff;
}
.taplist li a {
  display: inline-block;
  width: 100%;
  text-align: center;
}

.wordsTab {
  display:flex;
  justify-content:center;
  width: 100%;
  background:#7e7d80;
  padding: 0 59px;
  box-sizing: border-box;
  li {
    input:checked + label {
      background: url("../src/assets/images/txt-tab-prs-01.png") no-repeat center center;
    }
    position: relative;
    padding: 0 44px;
    label {
      display: block;
      width: 185px;
      height: 28px;
      padding: 46px 0;
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
        color: #333;
        .answer {
          color: #e51f2f;
          font-weight: bold;
          flex: 1;
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


.wordsTab {
  margin-top: 100px;
  li:not(:first-child)::before {
    content: '';
    position: absolute;
    width: 2px;
    height: 24px;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    background: #fff;
  }
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
  bottom: 10%;
  right: 5%;
  text-align: center;
  width: 300px;
  height: 300px;
  transform: translateY(50%);
  opacity: 0;
  transition: 0.4s;
  z-index: 999;
}
.floating.active {
  opacity: 1;
  transform: translateY(0%);
}

.floating .santa {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  border-radius: 50%;
  background: #f40009;
  opacity: 1;
  transition: 0.4s;
}

.floating:hover .santa {
  opacity: 0;
  transform: translateY(50%);
  transition: 0.4s;
}
.floating .message {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: palevioletred;
  transform: translateY(50%);
  opacity: 0;
  transition: 0.4s;
}
.floating:hover .message {
  transform: translateY(0%);
  opacity: 1;
  transition: 0.4s;
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
</style>
