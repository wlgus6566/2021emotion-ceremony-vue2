<template>
  <div>
    <vue-marquee style="height: 420px;">
      <vue-marquee-slide v-for="i in 30" :key="i">
        <span>
          <img src="../assets/images/img-card-enfj-01.png" alt="">
        </span>
      </vue-marquee-slide>
    </vue-marquee>
  </div>
</template>

<script>

export default {
  name: "section6",
  methods: {
  }
}
</script>

<style scoped>
</style>