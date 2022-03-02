<template>
  <div id="app">
    <div class="header">
      <left-side class="leftSide"/>
      <header-layout class="center"/>
      <router-view class="content"></router-view>
      <right-side  class="rightSied"/>
    </div>
  </div>
</template>
<script>
import leftSide from "@/layout/leftSide";
import headerLayout from "@/layout/headerLayout";
import rightSide from "@/layout/rightSide";
import '@/assets/css/main.css'
export default {
  components:{
    leftSide, headerLayout, rightSide
  }
}

</script>
<style scoped>
.header{
  display: flex;
  position: relative;
}
.leftSide{
  width: 10vw;
  height: 100vh;
  position: fixed;
  left:0;
}
.center{
  position: fixed;
  z-index: 20;
  left: 10vw
}
.rightSied{
  position: fixed;
  left:80vw
}
.content{
  position: absolute;
  left: 10vw;
  top: 4rem;
}
</style>
