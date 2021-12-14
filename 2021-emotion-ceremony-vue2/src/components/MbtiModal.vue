<template>
  <div class="modal">
    <div class="overlay" @click="$emit('closeMbtiModal')"></div>
    <div class="modal-card">
      <span class="close-btn" @click="$emit('closeMbtiModal')">X</span>
      <ul>
        <li v-for="data in matchData" :key="data.name">
          <img :src="data.thumbnail" :alt="data.name">
          <span>{{data.name}}</span>
          <span>{{data.position}}</span>
        </li>
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
<style scoped>
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
  max-width: 80%;
  width: 300px;
  height: 300px;
  padding: 20px;
  background-color: white;
  z-index: 1002;
  opacity: 1;
}
.close-btn {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #42b883;
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
  text-align: center;
}
</style>