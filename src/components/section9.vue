<template>
  <div ref="printMe">
    <div class="top-img-wrap">
      <img src="@/assets/images/bg-respect.png" alt=""/>
      <img class="respect-sticker" src="@/assets/images/img-respect.png" alt=""/>
      <span class="photo-img">
        <img :src="imgUrl('img/211216/' + data.idImage + '.jpg')" alt="dummy-img"/>
        <div></div>
      </span>
      <a :href="output" class="save-btn" download></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Section9',
  props: {
    users: Array,
  },
  data() {
    return {
      output: null,
      name: '김지현',
    }
  },
  methods: {
    async print() {
      const el = this.$refs.printMe;
      const options = {
        type: 'dataURL'
      }
      this.output = await this.$html2canvas(el, options);
    },
  },
  mounted() {
    this.print()
  }
}
</script>

<style scoped>

</style>