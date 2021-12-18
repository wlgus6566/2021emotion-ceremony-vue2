<template>
  <div class="modal">
    <div class="overlay" @click="$emit('closeMbtiModal')"></div>
    <span class="close-btn" @click="$emit('closeMbtiModal')">
          <img src="@/assets/images/btn-x.png" alt="">
    </span>
    <div class="modal-card">
      <h4 class="title">
        이글리안에 있는 <strong :class = this.mbti >{{ mbti.toLocaleUpperCase() }}</strong>
      </h4>
      <ul class="mbti-wrap">
        <li v-for="(data ,i) in matchData" :key="i" >
          <div class="user-thumb">
            <img src="http://placehold.it/150X150"/>
          </div>
          <div class="user-info">
            <span class="department">{{ data.name }}</span>
            <span class="name">
              {{data.name}} {{data.position}}
            </span>
          </div>
        </li>
<!--        <li>
          <div class="user-thumb">
            <img src="http://placehold.it/150X150"/>
          </div>
          <div class="user-info">
            <span class="department">경영전략본부</span>
            <span class="name">
              최모션 책임리더
            </span>
          </div>
        </li>
        <li>
          <div class="user-thumb">
            <img src="http://placehold.it/150X150"/>
          </div>
          <div class="user-info">
            <span class="department">경영전략본부</span>
            <span class="name">
              최모션 책임리더
            </span>
          </div>
        </li>
        <li>
          <div class="user-thumb">
            <img src="http://placehold.it/150X150"/>
          </div>
          <div class="user-info">
            <span class="department">경영전략본부</span>
            <span class="name">
              최모션 책임리더
            </span>
          </div>
        </li>
        <li>
          <div class="user-thumb">
            <img src="http://placehold.it/150X150"/>
          </div>
          <div class="user-info">
            <span class="department">경영전략본부</span>
            <span class="name">
              최모션 책임리더
            </span>
          </div>
        </li>
        <li>
          <div class="user-thumb">
            <img src="http://placehold.it/150X150"/>
          </div>
          <div class="user-info">
            <span class="department">경영전략본부</span>
            <span class="name">
              최모션 책임리더
            </span>
          </div>
        </li>
        <li>
          <div class="user-thumb">
            <img src="http://placehold.it/150X150"/>
          </div>
          <div class="user-info">
            <span class="department">경영전략본부</span>
            <span class="name">
              최모션 책임리더
            </span>
          </div>
        </li>
        <li>
          <div class="user-thumb">
            <img src="http://placehold.it/150X150"/>
          </div>
          <div class="user-info">
            <span class="department">경영전략본부</span>
            <span class="name">
              최모션 책임리더
            </span>
          </div>
        </li>
        <li v-for="(data,i) in matchData" :key="i">
          <img src="http://placehold.it/150X150"/>
          <span>{{data.name}}</span>
          <span>{{data.position}}</span>
        </li>-->
      </ul>
      <div class="fact-wrap" v-if="!this.mbti === other">
        <h4>잘봐, 팩폭 들어간다</h4>
        <p v-html="handleNewLine( this.fact )"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    mbti: String,
    matchData: Array,
    fact: String,
  },
  methods: {
    handleNewLine(str) {
      return str ? str.toString().replace(/(\n|\r\n)/g, "<br>") : "";
    },
  },
  computed: {

  },
}
</script>
<style scoped lang="scss">
.modal {
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal,
.overlay {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1001;
}
.overlay {
  opacity: 0.5;
  background-color: black;
  z-index: 1001;
}
.modal-card {
  position: relative;
  overflow-y: scroll;
  width: calc(100vw - 40px);
  max-width: 1280px;
  max-height: 840px;
  height: calc(100% - 100px);
  padding: 60px 40px;
  background-color: white;
  box-sizing: border-box;
  z-index: 1002;
  opacity: 1;
}
.close-btn {
  position: absolute;
  right: 30px;
  top: 30px;
  z-index: 100000;
  cursor: pointer;
}
.title {
  color: #666;
  font-size: 40px;
  line-height: 1;
  strong {
    display: block;
    font-size: 88px;
    margin-top: 24px;
    color: #764195;
    font-family: "Gotham", 'Noto Sans KR', sans-serif;
    &.intj {color: #8e4065;}
    &.intp {color: #a76082;}
    &.entj {color: #a076b7;}
    &.entp {color: #764195;}
    &.infj {color: #b9c544;}
    &.infp {color: #8e4065;}
    &.enfj {color: #6e9d36;}
    &.enfp {color: #477a0a;}
    &.istj {color: #72c9cb;}
    &.istp {color: #229b9e;}
    &.enfp {color: #477a0a;}
    &.estj {color: #24abcd;}
    &.estp {color: #0996ba;}
    &.isfj {color: #f4c020;}
    &.isfp {color: #c79701;}
    &.esfj {color: #e6ca05;}
    &.esfp {color: #cc8b1f;}
    &.other {color: #e51f2f;}
  }
}
.mbti-wrap {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: calc(100% - 40px);
  max-width: 1280px;
  li {
    width: 20%;
    padding: 10px;
    margin-top: 63px;
    box-sizing: border-box;
    .user-info {
      margin-top: 33px;
      .department {
        display: block;
        font-size: 24px;
        color: #999;
      }
      .name {
        font-size: 30px;
        font-weight: bold;
        line-height: 1;
      }
    }
    .user-thumb {
      border-radius: 50%;
      overflow: hidden;
      border: 1px solid #eee;
      img {
        width: 100%;
      }
    }
  }
}
.fact-wrap {
  margin-top: 140px;
  h4 {
    position: relative;
    font-size: 58px;
    line-height: 1;
    font-weight: bold;
    &:before, &:after  {
      content: '';
      position: absolute;
      top: 50%;
      transform: translateY(-2px);
      width: calc( (100% - 521px) / 2 );
      height: 4px;
      background-color: #333;
    }
    &:before {
      left: 0;
    }
    &:after {
      right: 0;
    }
  }
  p {
    font-size: 30px;
    line-height: 50px;
    color: #999;
    margin-top: 40px;
    padding-bottom: 40px;
  }

}
</style>