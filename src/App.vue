<template>
  <div id="app">
    <div class="header">
      <left-side />
      <header-layout />
      <right-side />
    </div>
    <div class="content">
      <router-view />
    </div>
    <ResultList v-if="isShow"/>
  </div>
</template>
<script>
import leftSide from "@/layout/leftSide";
import headerLayout from "@/layout/headerLayout";
import rightSide from "@/layout/rightSide";
import ResultList from "@/component/modal/follow/ResultList";
import '@/assets/css/main.css'
export default {
  components:{
    leftSide, headerLayout, rightSide, ResultList
  },
  computed:{
    isShow(){
      return this.$store.getters['modal/isShow']
    }
  }
}

</script>
<style>
.header{
  position: relative;
}
.content{
  position: relative;
  left: 10vw;
  width: 70vw;
  height: 100vh;
}
</style>
