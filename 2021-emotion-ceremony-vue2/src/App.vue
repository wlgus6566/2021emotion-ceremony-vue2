<template>
  <div>
    <Loading :loading="loadingStatus"></Loading>
    <div id="wrap">
      <div class="section1">
        <div class="container">
           <img src="@/assets/images/kv.jpg" alt="">
        </div>
      </div>
      <ul class="taplist">
          <li>
            <a href="javascript:void(0)" data-section = "section1" v-on:click="MoveScroll">섹션1</a>
          </li>
          <li>
            <a href="javascript:void(0)" data-section = "section2" v-on:click="MoveScroll">섹션2</a>
          </li>
          <li>
            <a href="javascript:void(0)" data-section = "section3" v-on:click="MoveScroll">섹션3</a>
          </li>
          <li>
            <a href="javascript:void(0)" data-section = "section4" v-on:click="MoveScroll">섹션4</a>
          </li>
          <li>
            <a href="javascript:void(0)" data-section="section5" v-on:click="MoveScroll">섹션5</a>
          </li>
        </ul>
      <div class="section2">
        <div class="container">
<<<<<<< HEAD
          <img src="@/assets/images/tit-01.png" alt="">
=======
          페이지네이션
          <ul class="wordsTab">
            <li>
              <label>
                <input type="radio" name="wordsKey" v-model="words.sort" value="a">
                aaa
              </label>
            </li>
            <li>
              <label>
                <input type="radio" name="wordsKey" v-model="words.sort" value="b">
                bbb
              </label>
            </li>
            <li>
              <label>
                <input type="radio" name="wordsKey" v-model="words.sort" value="c">
                ccc
              </label>
            </li>
          </ul>
          <ul class="wordsList" v-for="(item, index) in words.list" :key="index">
            <li>{{item.body}}</li>
          </ul>
          <pagination v-model="words.page" :per-page="words.size" :records="words.total" :options="words.options" /><!-- @paginate="myCallback" -->
>>>>>>> 24647265632b0d1164b11fc5bba9cc380f47a6c5
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
        <div class="container">
          <img src="@/assets/images/tit-03.png" alt="">
          <div style="font-size: 50px; text-align: center; padding: 100px 0;">
            스와이퍼 적용
          </div>
        </div>
      </div>
      <div class="section5">
        <div class="container">
          <img src="@/assets/images/tit-04.png" alt="">
          <div style="font-size: 50px; text-align: center; padding: 100px 0;">
            스와이퍼 적용
          </div>
        </div>
      </div>
      <div class="section6">
        <div class="container">
          <section6>

          </section6>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
<<<<<<< HEAD
import { fetchUser, fetchWords } from '@/api';
=======
import { fetchUser,fetchWords } from '@/api';
>>>>>>> 24647265632b0d1164b11fc5bba9cc380f47a6c5
import MbtiItem from '@/components/MbtiItem'
import Loading from "@/components/Loading";
import Pagination from 'vue-pagination-2';
import section6 from "./components/section6";

export default {
  name: 'App',
  components: {
    Loading,
    MbtiItem,
    Pagination,
    section6
  },
  data() {
    return {
      users : [],
      loadingStatus: false,
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
      ]
    };
  },
  created() {
    this.startSpinner();
    fetchUser()
        .then( (response) => {
          this.users = response.data;
          this.endSpinner();
          /*         this.$store.commit("MU_EMAIL", response.data);*/
        })
        .catch(error => console.log(error));
  },
  methods: {
    startSpinner() {
      console.log('패치');
      this.loadingStatus = true;
    },
    endSpinner() {
      this.loadingStatus = false;
    },
    MoveScroll(e) {
      const locate = e.target.dataset.section;
      const locateSection =  document.querySelector(`.${locate}`);
      const targetBoxOffset = locateSection.offsetTop;
      window.scrollTo({top:targetBoxOffset, left:0, behavior:'smooth'});
    }
  },
}
</script>

<style>
@import url('assets/css/reset.css');
body.modal-open {
  overflow: hidden;
}
.container {
  max-width: 1280px;
  margin: 0 auto;
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
  height: 1200px;
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
  background: #e3e1e6;
  height: 700px;
}
#wrap .section5 {
  background: #d7d7db;
  height: 700px;
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
</style>
