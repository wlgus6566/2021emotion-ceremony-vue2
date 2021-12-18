<template>
  <div>
    <ul class="flip-3d-wrap">
      <li class="flip-3d" v-for="item in items" :key="item.name">
        <figure>
          <img :src="require(`@/assets/images/img-card-${item.mbti}-01.png`)" />
          <figcaption>
            <img :src="require(`@/assets/images/img-card-${item.mbti}-02.png`)" />
            <button class="btn-mbti" v-on:click = "openMbtiModal(item)">나와 같은 mbti 보기</button>
          </figcaption>
        </figure>
      </li>
    </ul>
    <MbtiModal :matchData ="matchData"
               :fact ="fact"
               v-if="isModalViewed"
               @closeMbtiModal="closeMbtiModal"
    />
  </div>
</template>

<script>
import MbtiModal from "./MbtiModal";
export default {
  data() {
    return {
      isModalViewed: false,
      matchData: [],
      fact: '',
    }
  },
  components: {MbtiModal},
  props: {
    items: Array,
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
.flip-3d-wrap {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.flip-3d {
  perspective: 1200px;
  width: 23.5%;
  margin-top: 0;
}

.flip-3d:nth-child(n+5) {
  margin-top: 2%;
}
.flip-3d:last-child {
  margin: 0 auto;
  margin-top: 2%;
}
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
</style>