<template>
  <div class="hello">
    <div class="left" v-if="hide">
      <mine/>
      <img src="../../assets/images/hide.png" class="left-hide" @click="hideCont">
    </div>
    <img src="../../assets/images/show.png" class="left-show" v-if="show" @click="hideCont">
  </div>
</template>

<script>

import mine from "./mine";
export default {
  name: "left",
  data(){
    return{
      hide:true,
      show:false,

    }
  },
  components:{
    mine

  },
  methods:{
    hideCont: function() {
      this.show = !this.show;
      this.hide = !this.hide
    }

  }
}
</script>

<style scoped>

 .hello p{
    margin: 0;
    padding: 0;
  }
 .hello .left{
    width: 400px;
    height: 875px;
    background-color: #f0f0f0;
    border-right: 1px solid #E2E2E2;

  }
 .hello .left-hide{
    width: 30px;
    height: 30px;
    position: absolute;
    top:430px;
    left: 385px;
  }
 .hello .left-show{
    width: 30px;
    height: 30px;
    position: absolute;
    top:430px;
    left: 0;
    z-index: 999;
  }
</style>
