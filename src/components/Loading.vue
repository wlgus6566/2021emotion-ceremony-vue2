<template>
  <div class="box" v-if="loading">
    <div class="loader6"></div>
  </div>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      required: true,
    },
  },
}
</script>

<style>

.box:nth-child(2n-1){
/*  background-color: rgba(0,0,0,0.05);*/
}

.box{
  position: absolute;
  margin: 0 -4px -5px -2px;
  transition: all .2s ease;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
.loader6{
  position: relative;
  width: 12px;
  height: 12px;
  top: 42%;
  left: calc(50% - 6px);
  border-radius: 12px;
  background-color: #e51f2f;
  -webkit-transform-origin:  50% 50%;
  transform-origin:  50% 50% ;
  -webkit-animation: loader6 1s ease-in-out infinite;
  animation: loader6 1s ease-in-out infinite;
}

.loader6:before{
  content: "";
  position: absolute;
  background-color: #e51f2f;
  opacity: .5;
  top: 0;
  left: -25px;
  height: 12px;
  width: 12px;
  border-radius: 12px;
}

.loader6:after{
  content: "";
  position: absolute;
  background-color: #e51f2f;
  opacity: .5;
  top: 0;
  left: 25px;
  height: 12px;
  width: 12px;
  border-radius: 12px;
}


@-webkit-keyframes loader6{
  0%{-webkit-transform:rotate(0deg);}
  50%{-webkit-transform:rotate(180deg);}
  100%{-webkit-transform:rotate(180deg);}
}

@keyframes loader6{
  0%{transform:rotate(0deg);}
  50%{transform:rotate(180deg);}
  100%{transform:rotate(180deg);}
}

</style>
