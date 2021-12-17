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
                <p><span>3장</span>을 투표해주세요</p>
              </div>
              <div class="header-right">
                <p>투표하기 <span>(<em>0</em>/3)</span></p>
              </div>
            </div>
          </slot>
        </div>

        <div class="modal-container">
          <div class="modal-body">
            <slot name="body">
              <div class="modal-content">
                <div class="pop3-content">
                  <ul>
                    <li v-for="user in pop3" :key="user">
                      <div class="img-area">
                        <img :src="user.src" @click="user.likeActive = !user.likeActive" :class=" { active: user.likeActive } " alt="">
                      </div>
                      <div class="info-area">
                        <h2 class="user-group"> {{ user.userGroup }} </h2>
                        <p class="user-name">{{ user.userName }} <span class="user-positiob">{{ user.userPosition }}</span></p>
                      </div>
                    </li>
                  </ul>
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

export default {
  name: "modal3",
  data () {
    return {
      showModal: true,
      pop3: [
        {
          likeActive: false,
          userGroup: '경영전략본부',
          userName: '최모션',
          userPosition: '책임리더',
          src: "https://via.placeholder.com/360x360.png/888/fff"
        },
        {
          likeActive: false,
          userGroup: 'CT본부',
          userName: '김지현',
          userPosition: '팀원',
          src: "https://via.placeholder.com/400x400.png/888/fff"
        },
        {
          likeActive: false,
          userGroup: '경영전략본부',
          userName: '김모션',
          userPosition: '리더',
          src: "https://via.placeholder.com/720x720.png/888/fff"
        },
        {
          likeActive: false,
          userGroup: '경영전략본부',
          userName: '최모션',
          userPosition: '책임리더',
          src: "https://via.placeholder.com/180x180.png/888/fff"
        },
        {
          likeActive: false,
          userGroup: '경영전략본부',
          userName: '최모션',
          userPosition: '책임리더',
          src: "https://via.placeholder.com/360x360.png/888/fff"
        },
        {
          likeActive: false,
          userGroup: 'CT본부',
          userName: '김지현',
          userPosition: '팀원',
          src: "https://via.placeholder.com/400x400.png/888/fff"
        },
        {
          likeActive: false,
          userGroup: '경영전략본부',
          userName: '김모션',
          userPosition: '리더',
          src: "https://via.placeholder.com/720x720.png/888/fff"
        },
        {
          likeActive: false,
          userGroup: '경영전략본부',
          userName: '최모션',
          userPosition: '책임리더',
          src: "https://via.placeholder.com/180x180.png/888/fff"
        },
        {
          likeActive: false,
          userGroup: '경영전략본부',
          userName: '최모션',
          userPosition: '책임리더',
          src: "https://via.placeholder.com/360x360.png/888/fff"
        },
        {
          likeActive: false,
          userGroup: 'CT본부',
          userName: '김지현',
          userPosition: '팀원',
          src: "https://via.placeholder.com/400x400.png/888/fff"
        },
        {
          likeActive: false,
          userGroup: '경영전략본부',
          userName: '최모션',
          userPosition: '책임리더',
          src: "https://via.placeholder.com/360x360.png/888/fff"
        },
        {
          likeActive: false,
          userGroup: 'CT본부',
          userName: '김지현',
          userPosition: '팀원',
          src: "https://via.placeholder.com/400x400.png/888/fff"
        },
        {
          likeActive: false,
          userGroup: '경영전략본부',
          userName: '김모션',
          userPosition: '리더',
          src: "https://via.placeholder.com/720x720.png/888/fff"
        },
        {
          likeActive: false,
          userGroup: '경영전략본부',
          userName: '최모션',
          userPosition: '책임리더',
          src: "https://via.placeholder.com/180x180.png/888/fff"
        },
        {
          likeActive: false,
          userGroup: '경영전략본부',
          userName: '최모션',
          userPosition: '책임리더',
          src: "https://via.placeholder.com/360x360.png/888/fff"
        },
        {
          likeActive: false,
          userGroup: 'CT본부',
          userName: '김지현',
          userPosition: '팀원',
          src: "https://via.placeholder.com/400x400.png/888/fff"
        },
        {
          likeActive: false,
          userGroup: '경영전략본부',
          userName: '김모션',
          userPosition: '리더',
          src: "https://via.placeholder.com/720x720.png/888/fff"
        },
        {
          likeActive: false,
          userGroup: '경영전략본부',
          userName: '최모션',
          userPosition: '책임리더',
          src: "https://via.placeholder.com/180x180.png/888/fff"
        },
        {
          likeActive: false,
          userGroup: '경영전략본부',
          userName: '최모션',
          userPosition: '책임리더',
          src: "https://via.placeholder.com/360x360.png/888/fff"
        },
        {
          likeActive: false,
          userGroup: 'CT본부',
          userName: '김지현',
          userPosition: '팀원',
          src: "https://via.placeholder.com/400x400.png/888/fff"
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
  height: 720px;
  padding: 60px 50px;
  overflow-y: scroll;
}

.pop3-content {

}

.pop3-content ul {
  display: grid;
  grid-template-columns: repeat(5, 220px);
  column-gap: 15px;
  row-gap: 60px;
}

.modal-content .img-area {

}

.modal-content .img-area img {
  width: 220px;
  height: 220px;
  border-radius: 50%;
}

.modal-content .img-area img.active {
  outline: 10px solid #d33839;
  outline-offset: -10px;
  box-shadow: 0 10px 14px 0 rgba(0, 0, 0, 0.2);
}

.info-area {

}

.info-area .user-group {
  margin-top: 30px;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: -2px;
  color: #999999;
}

.info-area .user-name {
  margin-top: 10px;
  font-size: 30px;
  font-weight: bold;
  line-height: 30px;
  letter-spacing: -2px;
  color: #333333;
}

</style>