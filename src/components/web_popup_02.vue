<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <span class="close-btn">
          <img src="@/assets/images/btn-x.png" alt="">
        </span>

        <div class="modal-header">
          <slot name="header">
            <div class="header-content">
              <div class="header-left">
                <p><span>5장</span>을 투표해주세요</p>
              </div>
              <div class="header-right">
                <p>투표하기 <span>(<em>0</em>/5)</span></p>
              </div>
            </div>
          </slot>
        </div>

        <div class="modal-container">
          <div class="modal-body">
            <slot name="body">
              <div class="modal-content">
                <div class="content-left">
                  <div class="swiper-area">
                    <popSwiper></popSwiper>
                  </div>
                  <p class="user-title">
                    일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼
                    사오육칠팔구십일이삼사오육칠팔구십일이삼사오육
                  </p>
                  <div class="user-info">
                    <div>
                      <span class="user-group">경영전략본부</span> <span class="user-name">최모션</span> <span class="user-potition">책임리더</span>
                    </div>
                    <a class="btn-like" @click="btnLike">
                      <img src="@/assets/images/pop_like_off.png" alt="">
                    </a>
                  </div>
                </div>
                <div class="content-right">
                  <div v-for="item in items" :key="item">
                      <img :src="item.src" @click="item.likeActive = !item.likeActive" :class=" { active: item.likeActive }" alt="">
                  </div>
                </div>
              </div>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import popSwiper from "@/components/popup_swiper";

export default {
  name: "modal2",
  components: {
    popSwiper
  },
  data () {
    return {
      showModal: true,
      btnLike: false,
      items: [
        {
          likeActive: false,
          src: "https://via.placeholder.com/360x360.png/888/fff"
        },
        {
          likeActive: false,
          src: "https://via.placeholder.com/180x180.png/888/fff"
        },
        {
          likeActive: false,
          src: "https://via.placeholder.com/180x180.png/888/fff"
        },
        {
          likeActive: false,
          src: "https://via.placeholder.com/180x180.png/888/fff"
        },
        {
          likeActive: false,
          src: "https://via.placeholder.com/180x180.png/888/fff"
        },
        {
          likeActive: false,
          src: "https://via.placeholder.com/180x180.png/888/fff"
        },
        {
          likeActive: false,
          src: "https://via.placeholder.com/180x180.png/888/fff"
        },
        {
          likeActive: false,
          src: "https://via.placeholder.com/180x180.png/888/fff"
        },
        {
          likeActive: false,
          src: "https://via.placeholder.com/180x180.png/888/fff"
        },
        {
          likeActive: false,
          src: "https://via.placeholder.com/180x180.png/888/fff"
        },
        {
          likeActive: false,
          src: "https://via.placeholder.com/180x180.png/888/fff"
        },
        {
          likeActive: false,
          src: "https://via.placeholder.com/180x180.png/888/fff"
        }
      ]
    }
  }
}
</script>
<style scoped>
.close-btn {
  position: absolute;
  right: 30px;
  top: 30px;
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .8);
  display: table;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-header {
  max-width: 1280px;
  margin: 0 auto 20px;
  color: #ffffff;
}

.modal-header .header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-header .header-left {
  font-size: 40px;
  line-height: 40px;
  letter-spacing: -2px;
  color: #ffffff;
}

.modal-header .header-left span {
  font-weight: bold;
}

.modal-header .header-right {
  padding: 17px 27px;
  font-size: 30px;
  line-height: 30px;
  letter-spacing: -2px;
  background-color: #999999;
  color: #ffffff;
}

.modal-header .header-right.active {
  background-color: #d33839;
}

.modal-header .header-right span {
  opacity: 0.5;
}

.modal-container {
  max-width: 1280px;
  height: 840px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
}

.close-btn {
  position: absolute;
  top: 40px;
  right: 40px;
}

.modal-content {
  display: grid;
  height: 720px;
  padding: 60px 50px;
  grid-template-columns: 560px 580px;
  justify-content: space-between;
}

.content-left .swiper-area {
  width: 560px;
  height: 560px;
}

.content-left .user-title {
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
  word-wrap:break-word;
  height: 72px; /* line-height 가 1.2em 이고 3라인을 자르기 때문에 height는 1.2em * 3 = 3.6em */
}

.content-left .btn-like {
  width: 150px;
  height: 48px;
}

.user-info {
  margin-top: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.user-info span {
  font-size: 24px;
  line-height: 24px;
  letter-spacing: -2px;
  color: #999999;
}

.content-right {
  display: grid;
  grid-template-columns: repeat(3, 180px);
  grid-template-rows: repeat(auto-fit, 180px);
  gap: 20px;
  overflow-y: scroll;
  overflow-x: hidden;
}

.content-right .active {
  outline: 10px solid #d33839;
  outline-offset: -10px;
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.5);
}

</style>