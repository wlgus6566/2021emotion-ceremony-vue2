<template>
  <div class="modal">
    <div class="overlay" @click="$emit('closeMbtiModal')"></div>
    <span class="close-btn" @click="$emit('closeMbtiModal')">
          <img src="@/assets/images/btn-x.png" alt="">
    </span>
    <div class="modal-card">
      <h4>
        이글리안에 있는 <strong>ENTP</strong>
      </h4>
      <ul class="mbti-wrap">
        <li>
          <div class="user-thumb">
            <img src="http://placehold.it/150X150"/>
          </div>
          <div class="user-info">
            <span class="position">경영전략본부</span>
            <span class="name">최모션</span>
          </div>
        </li>
        <li>
          <div class="user-thumb">
            <img src="http://placehold.it/150X150"/>
          </div>
          <div class="user-info">
            <span class="position">경영전략본부</span>
            <span class="name">최모션</span>
          </div>
        </li>
        <li>
          <div class="user-thumb">
            <img src="http://placehold.it/150X150"/>
          </div>
          <div class="user-info">
            <span class="position">경영전략본부</span>
            <span class="name">최모션</span>
          </div>
        <li>
          <div class="user-thumb">
            <img src="http://placehold.it/150X150"/>
          </div>
          <div class="user-info">
            <span class="position">경영전략본부</span>
            <span class="name">최모션</span>
          </div>
        </li>
        <li>
          <div class="user-thumb">
            <img src="http://placehold.it/150X150"/>
          </div>
          <div class="user-info">
            <span class="position">경영전략본부</span>
            <span class="name">최모션</span>
          </div>
        </li>
        <li>
          <div class="user-thumb">
            <img src="http://placehold.it/150X150"/>
          </div>
          <div class="user-info">
            <span class="position">경영전략본부</span>
            <span class="name">최모션</span>
          </div>
        </li>

<!--        <li v-for="(data,i) in matchData" :key="i">
          <img src="http://placehold.it/150X150"/>
          <span>{{data.name}}</span>
          <span>{{data.position}}</span>
        </li>-->
      </ul>
      <p>mbti팩폭: {{ fact }}</p>
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
  padding: 60px 40px;
  background-color: white;
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
.mbti-wrap {
  display: flex;
  flex-wrap: wrap;
  min-width: 1280px;
  li {
    width: 20%;
    padding: 10px;
    margin-top: 63px;
    box-sizing: border-box;
    img {
      width: 100%;
    }
  }
}
</style>