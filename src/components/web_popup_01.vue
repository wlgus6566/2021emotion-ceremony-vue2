<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <span class="close-btn" @click="$emit('closeModalFc')">
          <img src="@/assets/images/btn-x.png" alt="">
        </span>

        <div class="modal-header">
          <slot name="header">
            <div class="header-content">
              sdfsdfsdfsd
            </div>
          </slot>
        </div>

        <div class="modal-container">
          <div class="modal-body">
            <slot name="body">
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>

export default {
  name: "modal1",
  components: {
  },
  data () {
    return {
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