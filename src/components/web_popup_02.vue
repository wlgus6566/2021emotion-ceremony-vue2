<template>
  <div class="modal">
    <div class="overlay" @click="$emit('closeModalFc')"></div>
    <span class="close-btn" @click="$emit('closeModalFc')">
          <img src="@/assets/images/btn-x.png" alt="">
    </span>
    <div class="modal-card">
      <div class="modal-header">
        <p><strong>5장</strong>을 투표해주세요</p>
        <button :disabled="!voteDisabled" :class="{'vote-btn':true, active : voteDisabled}" @click="vote">
          투표하기<span>(<em>{{checked.length}}</em>/<em>5</em>)</span>
        </button>
      </div>
      <div class="pop3-content">
        <div class="content-left">
          <div class="swiper-area">
            <popSwiper :items="mbtiPhoto" :checked="checked" @voteCheck="voteCheck" />
          </div>
        </div>
        <div class="content-right">
          <ul class="thumb-list">
            <li v-for="(item,i) in mbtiPhoto" :key="i"
                :class=" {
                  active: item.id === swiperIdx,
                  checked: checked.some(el=>el===item.id)
                 }"
              @click="clickEvt(item.id)"
            >
<!--              {{item.id}}-->
              <span class="img-wrap">
                <img :src="item.physicalFileName" :alt="item.name">
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import popSwiper from "@/components/popup_swiper";
import {mapMutations, mapState} from "vuex";
import {
  postVotes,
} from '@/api';
export default {
  name: "modal2",
  components: {
    popSwiper
  },
  props: {
    mbtiPhoto: Array
  },
  data () {
    return {
      btnLike: false,
      checked : [],
    }
  },
  created() {
    console.log('swiper create')
  },
  computed: {
    ...mapState( ['swiperIdx']),
    voteDisabled(){
      return this.checked.length === 5
    },
  },
  methods : {
    ...mapMutations( ['SWIPER_IDX']),
    clickEvt(id){
      this.SWIPER_IDX(id)
    },
    voteCheck(id){
      console.log(id)
      const idx = this.checked.findIndex(el=>el===id)
      if (idx !== -1) {
        this.checked.splice(idx, 1);
      } else {
        this.checked.push(id);
      }
    },
    async vote(){
      try {
        const response = await postVotes()
        console.log('postVotes', response)
      } catch (e) {
        console.log('postVotes', e)
      } finally {
        console.log('postVotes finally')
      }
    },

  },
}
</script>
<style lang="scss" scoped>
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
.modal-header {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: #fff;
  font-size: 40px;
  z-index: 10000;
  .vote-btn {
    display: flex;
    align-items: center;
    padding: 0 27px;
    height: 64px;
    font-size: 30px;
    background: #999;
    span {
      display: inline-block;
      margin-left: 10px;
      font-size: 24px;
      color: #fff;
      opacity: .5;
    }
    &.active {
      background: #d33839;
    }
  }
}
.close-btn {
  position: absolute;
  right: 30px;
  top: 30px;
  z-index: 100000;
  cursor: pointer;
}
.pop3-content {
  display: flex;
  justify-content: space-between;
  position: relative;
  overflow-y: scroll;
  width: calc(100vw - 40px);
  max-width: 1280px;
  max-height: 840px;
  height: calc(100% - 100px);
  margin-top: 20px;
  padding: 60px 50px;
  box-sizing: border-box;
  z-index: 1002;
  opacity: 1;
  background: #fff;
  -ms-overflow-style: none;
}
.pop3-content::-webkit-scrollbar {display: none;}
.content-left {
  overflow: hidden;
  width: calc(50% - 18px);
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
  }
  .btn-like {
    font-size: 0;
    text-indent: -9999em;
    width: 150px;
    height: 48px;
    margin-right: -1px;
    background: url("../assets/images/pop_like_off.png") no-repeat center/cover;
    &.active {
      background: url("../assets/images/pop_like_on.png") no-repeat center/cover;
    }
  }
}
.content-right::-webkit-scrollbar {display: none;}
.content-right {
  -ms-overflow-style: none;
  width: calc(50% - 19px);
  overflow-y: scroll;
  overflow-x: hidden;
  .thumb-list {
    display: flex;
    flex-wrap: wrap;
    li {
      width: calc((100% - 40px) / 3);
      .img-wrap {
        position: relative;
        display: block;
        overflow: hidden;
        border: 3px solid #eee;
        box-sizing: border-box;
        &::after {
          content: "";
          display: block;
          padding-bottom: 100%;
        }
        img {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        }
      }
    }
    li:not(:nth-child(3n)) {
      margin-right: 20px;
    }
    li:nth-child(n+ 4) {
      margin-top: 20px;
    }
  }
  .active {
    background:blue;
  }
  .checked {
    border: 10px solid #d33839;
    box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.5);
    box-sizing: border-box;
  }
}
.user-info {
  margin-top: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    font-size: 24px;
    line-height: 24px;
    letter-spacing: -2px;
    color: #999999;
    + span {
      margin-left: 4px;
    }
  }
}


</style>
