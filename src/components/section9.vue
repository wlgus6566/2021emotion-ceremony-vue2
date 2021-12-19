<template>
  <div>
    <div ref="printMe">
      <div class="top-img-wrap">
        <img src="@/assets/images/bg-respect.png" alt=""/>
        <img class="respect-sticker" src="@/assets/images/img-respect.png" alt=""/>
        <span class="photo-img">
          <img src="http://placehold.it/150X150" alt="dummy-img"/>
        </span>
        <a :href="output" class="save-btn" download></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Section9',
  data() {
    return {
      output: null
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