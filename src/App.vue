<template>
  <div id="app">
    <div class="header">
      <left-side class="leftSide"/>
      <header-layout class="center"/>
      <router-view class="content"></router-view>
      <right-side  class="rightSied"/>
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
<style scoped>
.header{
<<<<<<< HEAD
  position: relative;
}
.content{
  position: relative;
  left: 10vw;
  width: 70vw;
=======
  display: flex;
  position: relative;
}
.leftSide{
  width: 10vw;
>>>>>>> e0403201c05a7dcbd4193ba37a04054df55ab4cd
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
