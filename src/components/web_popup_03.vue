<template>
  <div class="modal">
    <div class="overlay" @click="$emit('closeModalFc')"></div>
    <span class="close-btn" @click="$emit('closeModalFc')">
          <img src="@/assets/images/btn-x.png" alt="">
    </span>
    <div class="modal-card">
      <div class="modal-header">
          <p><strong>3장</strong>을 투표해주세요</p>
          <button disabled
                  v-bind:class="{ active: completeVote }"
                  class="vote-btn">
            투표하기<span>(<em>0</em>/<em>3</em>)</span>
          </button>
      </div>
      <div class="pop3-content">
        <ul>
          <li v-for="(user, i) in allMemList" :key="i"
              @click="voteMember(user)"
              v-bind:class="{ active: user.likeActive }"
              >
            <div class="img-area">
              <img :src="user.src" alt="">
            </div>
            <div class="info-area">
              <span class="department"> {{ user.userGroup }} </span>
              <p class="name">{{ user.userName }} <span class="position">{{ user.userPosition }}</span></p>
            </div>
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script>

export default {
  name: "modal3",
  data() {
    return {
      showModal: true,
      voteList: [],
      limit: 3,
      allMemList: [
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
      ],
      completeVote: false,
    }
  },
  watch: {
    voteList() {
    }
  },
  methods: {
    voteMember(user) {
      const Index = this.voteList.indexOf(user);
      if(Index != -1){
        this.voteList.splice(Index, 1); //다시 체크하면 인덱스 찾아서 제거
      } else {
        this.voteList.push(user);
      }

      const voteLength = this.voteList.length; //체크된 아이들의 배열의 수
      this.voteList.splice(this.limit, 999); //더이상 체크되면 자르기.
      this.completeVote = voteLength === this.limit;

      //const Index = this.voteList.findIndex((user) => user);

      /*      if(user.likeActive){
        this.voteList.push(user);
      } else {

      }
      if(activeLength <= 3) {
        user.likeActive = !user.likeActive;
      }
      const voteLength = this.voteList.length; //체크된 아이들의 배열의 수
      this.voteList.splice(3, 999);
      this.completeVote = voteLength === this.limit - 1;
    }*/
    }
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
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      width: 20%;
      padding: 0 13px;
      margin-top: 63px;
      box-sizing: border-box;
      &.active {
        .img-area {
          box-shadow: 0 10px 14px 0 rgba(0, 0, 0, 0.2);
          &::before {
            content: '';
            position: absolute;
            border: 10px solid #d33839;
            width: 100%;
            height: 100%;
            left:0;
            top: 0;
            box-sizing: border-box;
            border-radius: 50%;
          }
        }
      }
      .img-area {
        position: relative;
        width: 100%;
        border-radius: 50%;
        overflow: hidden;
        border: 1px solid #eee;
        box-sizing: border-box;
        img {
          width: 100%;
        }
      }
      .info-area {
        margin-top: 33px;
        .department {
          font-size: 24px;
          font-weight: 500;
          line-height: 1;
        }
        .name {
          margin-top: 10px;
          font-size: 30px;
          line-height: 1;
          font-weight: bold;
        }
      }
    }
  }
}
</style>