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

</style>