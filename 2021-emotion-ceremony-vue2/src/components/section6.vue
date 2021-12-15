<template>
  <div class="promo-carousel" id="grouploop-1" :key="grouploop">
    <div class="item-wrap">
      <div class="item active">
        <a href="#">Recent Deals</a>
      </div>
      <div class="item">
        <a href="#">Super Special</a>
      </div>
      <div class="item">
        <a href="#">Promo Code
          <br/>SAVE30</a>
      </div>
      <div class="item">
        <a href="#">20% Off Sale!</a>
      </div>
      <div class="item">
        <a href="#">New Products!</a>
      </div>
      <div class="item">
        <a href="#">Used deals</a>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import * as grouploop from "../assets/js/grouploop-1.0.3"

export default {
  name: "section6",
  data () {
    return {
    }
  },
  methods: {
    grouploop() {
      $('#grouploop-1').grouploop({
        velocity: 2,
        forward: false,
        pauseOnHover: true,
        childNode: ".item",
        childWrapper: ".item-wrap",
        complete: function () { console.log("Initialized a grouploop with id: " + $(this).attr('id')) }
      });
    }
  }
}
</script>

<style scoped>

</style>