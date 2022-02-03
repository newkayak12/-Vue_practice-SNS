<template>
  <div id="app">
    <div class="header">
      <left-side />
      <header-layout />
      <right-side />
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
<style>
.header{
  display: flex;
}
.leftSide{
  width: 20vw;
  height: 100vh;
}
</style>
