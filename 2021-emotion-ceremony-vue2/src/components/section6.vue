<template>
  <div>
    <!-- marquee area -->
    <!-- <vue-marquee style="height: 420px;" direction="right" :showProgress="false" :duration="52011"> -->
    <vue-marquee style="height: 420px;" direction="left" :showProgress="false">
      <vue-marquee-slide v-for="i in 10" :key="i">
        <div class="flip-3d">
          <figure>
            <img src="../assets/images/img-card-enfp-01.png" />
            <figcaption>
              <img src="../assets/images/img-card-enfp-02.png" />
              <button class="btn-mbti" v-on:click="openMbtiModal">나와 같은 mbti 보기</button>
            </figcaption>
          </figure>
        </div>
      </vue-marquee-slide>
    </vue-marquee>
    <!-- modal area -->
    <div class="modal" v-if="isModalViewed" @closeMbtiModal="closeMbtiModal">
      <div class="overlay" @click="$emit('closeMbtiModal')"></div>
      <div class="modal-card">
        <span class="close-btn" @click="$emit('closeMbtiModal')">X</span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "section6",
  data() {
    return {
      isModalViewed: false,
    }
  },
  methods: {
    openMbtiModal(item) {
      this.isModalViewed = true;
      this.matchData = item.match;
      this.fact = item.fact;
      document.querySelector('body').classList.add('modal-open');
    },
    closeMbtiModal() {
      this.isModalViewed = false;
      document.querySelector('body').classList.remove('modal-open');
    }
  }
}
</script>

<style scoped>
.flip-3d figure {
  position: relative;
  transform-style: preserve-3d;
  transition: 1s transform;
  font-size: 1.6rem;
  margin: 0;
}

.flip-3d figure img {
  width: 100%;
  height: auto;
}

.flip-3d figure figcaption {
  position: absolute;
  width: 100%;
  height: 96%;
  box-sizing: border-box;
  top: 0;
  transform: rotateY(.5turn) translateZ(1px);
  text-align: center;
  border-radius: 5%;
  transition: 1s .5s opacity;
  background: #fff;
}

.flip-3d:hover figure {
  transform: rotateY(.5turn);
}

.flip-3d:hover  figure figcaption {
  opacity: 1;
}
.btn-mbti {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  background: #42b883;
  border: 1px solid #000;
}

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