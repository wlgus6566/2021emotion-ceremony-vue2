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
            투표하기<span>(<em>{{ voteList.length }}</em>/<em>3</em>)</span>
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

            <div class="img-area" >
              <img
                  v-lazy="{
                    src: imgUrl(user.imagePath + user.idImage + '.jpg'),
                    error: 'data:image/jpeg;base64,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',
                    loading: '/Spinner-1s-200px.gif'
                  }"
                  :alt="user.idImage"
              />
              <!--<img class="marquee-img" src="http://placehold.it/400X400"/>-->
            </div>

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
    allMemberList: Array,
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
      return 'http://party.emotion.co.kr/' + url;//.toLowerCase();
    },
    async vote(){
      try {
        const response = await postVotes(
            { voteMemberId: this.voteList, type: 'egle' }
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
    .btn-like {
      position: relative;
      flex:0 0 20%;
      display: flex;
      flex-direction: column;
    }
    button {
      display: inline-block;
      width: 20%;
      padding: 10px;
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
      width: 100%;
      height:0;
      padding-top:100%;
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