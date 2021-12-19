<template>
  <div>
    <!-- SOURCE -->
    <div ref="printMe">
      <div class="top-img-wrap">
        <img src="@/assets/images/bg-respect.png" alt=""/>
        <img class="respect-sticker" src="@/assets/images/img-respect.png" alt=""/>
        <span class="photo-img">
          <img src="http://placehold.it/150X150" alt="dummy-img"/>
        </span>
        <!--      <button class="save-btn" >저장하기</button>-->
        <a :href="output" class="save-btn" download></a>
      </div>
    </div>

    <!-- OUTPUT -->
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
    // exportToPDF () {
    //   //window.scrollTo(0, 0);
    //   html2pdf(this.$refs.pdfarea, {
    //     margin: 0,
    //     filename: 'document.pdf',
    //     image: {type:"jpg", quality: 0.95},
    //     // allowTaint 옵션추가
    //     html2canvas: { scrollY: 0,scale:1, dpi: 300, letterRendering: true, allowTaint: true },
    //     jsPDF: {orientation: 'portrait', unit: 'mm', format: 'a4', compressPDF: true}
    //   })
    // }
    // printPage() {
    //   var initBody;
    //   window.onbeforeprint = function () {
    //     initBody = document.body.innerHTML;
    //     document.body.innerHTML = document.getElementById('print').innerHTML;
    //   };
    //   window.onafterprint = function () {
    //     document.body.innerHTML = initBody;
    //   };
    //   window.print();
    //   return false;
    // }
    // print() {
    //   const el = this.$refs.printcontent;
    //   const options = {
    //     type: 'dataURL'
    //   }
    //   this.output = this.$html2canvas(el, options)
    //   // this.download = 'default.jpg'
    // },
    async print() {
      const el = this.$refs.printMe;
      const options = {
        type: 'dataURL'
      }
      this.output = await this.$html2canvas(el, options);
    },
    downLoad() {
      // console.log('init')

    }
  },
  mounted() {
    this.print()
  }
}
</script>

<style scoped>

</style>