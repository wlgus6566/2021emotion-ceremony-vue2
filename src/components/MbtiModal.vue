<template>
  <div class="modal">
    <div class="overlay" @click="$emit('closeMbtiModal')"></div>
    <span class="close-btn" @click="$emit('closeMbtiModal')">
          <img src="@/assets/images/btn-x.png" alt="">
    </span>
    <div class="modal-card">
      <h4 class="title">
        이글리안에 있는 <strong>ENTP</strong>
      </h4>
      <ul class="mbti-wrap">
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
<!--        <li v-for="(data,i) in matchData" :key="i">
          <img src="http://placehold.it/150X150"/>
          <span>{{data.name}}</span>
          <span>{{data.position}}</span>
        </li>-->
      </ul>
      <div class="fact-wrap">
        <h4>잘봐, 팩폭 들어간다</h4>
        <p>
          개썅마웨, 이상주의자<br/>
          혼자서 돌아다니는게 제일 편함, 독립심 강함<br/>
          겉으론 인싸 속모습은 아싸<br/>
          나한테 잘해주는 사람은 두 배로 잘해주는데 나한테 못해주면 걍 1도 없음<br/>
          내 의견이랑 상대 의견 다르면 설득하려는 스타일<br/>
          직설적이고 솔직하게 내 맘을 표현하는 것에 거리낌이 없음<br/>
          좋아하는 사람 싫어하는 사람 명확히 구분됨
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    matchData: Array,
    fact: String,
  },
  methods: {

  }
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
  width: 1280px;
  height: 840px;
  overflow-y: scroll;
  max-width: calc(100vw - 40px);
  max-height: calc(100vh - 200px);
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
  }
}
.mbti-wrap {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
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