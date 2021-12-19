<template>

  <div>
    <swiper class="swiper" ref="mySwiper" :options="swiperOptions"
    @slideChangeTransitionStart="slideChangeTransitionStart">

      <swiper-slide v-for="(item, i) in items" :key="i" >
        <div class="img">
          <img :src="item.physicalFileName">
        </div>
        <p class="user-title">
          {{item.id}}
          {{item.description}}
        </p>
        <div class="user-info">
          <div>
            <span class="department">{{ item.department }}</span>
            <span class="name">{{item.name}}</span>
            <span class="position">{{ item.position }}</span>
          </div>
          <button
              :class="{
                'btn-like':true,
                 active: checked.some(el=>el===item.id)
              }"
              :disabled="!checked.some(el=>el===item.id) && checked.length >= 5"
              @click="$emit('voteCheck', item.id)"
          >
            투표하기
          </button>
        </div>
      </swiper-slide>

      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper,SwiperSlide } from 'vue-awesome-swiper';
import { mapState, mapMutations } from 'vuex';
export default {
  name: "popSwiper",
  components: {
    Swiper,
    SwiperSlide
  },
  props: {
    checked: Array,
    items: Array,
  },
  computed : {
    ...mapState( ['swiperIdx']),
    swiper() {
      return this.$refs.mySwiper.$swiper
    }
  },
  watch: {
    swiperIdx(){
      this.slideTo();
    },
  },
  mounted() {
    this.$nextTick(()=>{
      this.slideTo();
    })
  },
  data() {
    return {
      swiperOptions: {
        loop: true,
        slidesPerView: 1,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    }
  },
  methods: {
    ...mapMutations( ['SWIPER_IDX']),
    slideChangeTransitionStart(){
      const idx = this.items[this.swiper.realIndex]?.id
      this.SWIPER_IDX(idx)
      console.log(idx)
    },
    slideTo(){
      const idx = this.items.findIndex(el=>el.id === this.swiperIdx)
      if (idx !== -1){
        this.swiper.slideTo(idx + 1, 0, false)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.swiper-container {
  width: 100%;
  height: 560px;
  img {
    width: 100%;
    height: 100%;
  }
}

.user-title {
  margin-top: 28px;
  font-size: 28px;
  line-height: 36px;
  letter-spacing: -2px;
  color: #333333;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* 라인수 */
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  height: 72px; /* line-height 가 1.2em 이고 3라인을 자르기 때문에 height는 1.2em * 3 = 3.6em */
}
.btn-like {
  font-size: 0;
  text-indent: -9999em;
  width: 150px;
  height: 48px;
  background: url("../assets/images/pop_like_off.png") no-repeat center/cover;
  &.active {
    background: url("../assets/images/pop_like_on.png") no-repeat center/cover;
  }
}

.swiper-slide {
}

.swiper-button-prev, .swiper-button-next {
  width: 40px;
  height: 60px;
  right: 0;
}

.swiper-button-prev, .swiper-container-rtl .swiper-button-next {
  left: 0;
}

.swiper-button-prev.swiper-button-disabled, .swiper-button-next.swiper-button-disabled {
  opacity: 1;
}

.swiper-button-prev:before, .swiper-button-next:after {
  width: 100%;
  height: 100%;
  background: url("../assets/images/pop_arrow_right.png") no-repeat center/cover;
  font-size: 0;
}

.swiper-container .swiper-button-prev:after {
  width: 100%;
  height: 100%;
  background: url("../assets/images/pop_arrow_left.png") no-repeat center/cover;
  font-size: 0;
}
</style>
