<template>
  <div class="modal">
    <div class="overlay" @click="$emit('closeModalFc')"></div>
    <span class="close-btn" @click="$emit('closeModalFc')">
          <img src="@/assets/images/btn-x.png" alt="">
    </span>
    <div class="modal-card">
      <div class="modal-header">
          <p><strong>3장</strong>을 투표해주세요</p>
          <button :disabled="!voteDisabled"
                  :class="{'vote-btn':true, active : voteDisabled}"
                  @click="vote"
                  >
            투표하기<span>(<em>0</em>/<em>3</em>)</span>
          </button>
      </div>
      <div class="pop3-content">
        <div class="egle-list">
          <button v-for="(user, i) in allMemberList" :key="i"
                 @click="voteMember(user.id)" :disabled="!voteList.some(el=>el===user.id) && voteList.length >= 3"
                 :class="{
                 'btn-like':true,
                  active: voteList.some(el=>el===user.id)
              }"
          >
            <span class="img-area">
              <img :src="imgUrl(user.imagePath + user.idImage + '.jpg')" :alt="user.idImage">
            </span>
            <span class="info-area">
              <span class="department"> {{ user.department }} </span>
              <strong class="name">{{ user.name }} <span class="position">{{ user.level }}</span></strong>
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  postVotes,
} from '@/api';

export default {
  name: "modal3",
  props: {
    allMemberList: []
  },
  data() {
    return {
      showModal: true,
      voteList: [],
      limit: 3,
    }
  },
  computed: {
    voteDisabled(){
      return this.voteList.length === 3
    },
  },
  methods: {
    voteMember(id) {
      const idx = this.voteList.findIndex(el=>el===id)
      if (idx !== -1) {
        this.voteList.splice(idx, 1);
      } else {
        this.voteList.push(id);
      }
    },
    imgUrl(url) {
      return 'http://party.emotion.co.kr' + url;
    },
    async vote(){
      try {
        const response = await postVotes(
            { id: this.voteList, type: 'egle' }
        )
        console.log('postVotes', response)
      } catch (e) {
        console.log('postVotes', e)
      } finally {
        console.log('postVotes finally')
      }
    },
  }
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
  position: relative;
  overflow-y: scroll;
  width: calc(100vw - 40px);
  max-width: 1280px;
  max-height: 840px;
  height: calc(100% - 100px);
  margin-top: 20px;
  padding: 0 40px 60px;
  box-sizing: border-box;
  z-index: 1002;
  opacity: 1;
  background: #fff;

  .egle-list {
    display: flex;
    flex-wrap: wrap;
    button {
      display: inline-block;
      width: 20%;
      padding: 0 10px;
      margin-top: 63px;
      box-sizing: border-box;

      &.active {
          .img-area {
            box-shadow: 0 10px 14px 0 rgba(0, 0, 0, 0.2);
            &:before {
              content: '';
              position: absolute;
              border: 10px solid #d33839;
              width: 100%;
              height: 100%;
              left: 0;
              top: 0;
              box-sizing: border-box;
              border-radius: 50%;
              z-index: 1;
          }
        }
      }

    }

    .img-area {
      position: relative;
      display: block;
      border-radius: 50%;
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

    .info-area {
      display: block;
      margin-top: 33px;

      .department {
        font-size: 24px;
        font-weight: 500;
        line-height: 1;
      }

      .name {
        display: block;
        margin-top: 10px;
        font-size: 30px;
        line-height: 1;
        font-weight: bold;
      }
    }
  }
}

</style>