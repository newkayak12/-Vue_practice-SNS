<template>
  <div style="width: 70vw">
<!--
  부모가 자식에게 데이터를 주는 방법은 props
  반대는??
  1. .sync > props.sync=""
  2. $emit > 상위 메소드로 보내는 eventbus
  3. vuex > 모든 데이터를 중앙에서 관리한다.

-->
    <div class="editor">
      <editor
          :parent-data.sync="parentContent"
      ></editor>
    </div>
    <post-component v-for="(item,index) in list" :key="index" :userData="userData" :data="item"/>
  </div>
</template>

<script>
import postComponent from "@/components/pages/post/postComponent";
import editor from "@/components/editor/editor";
export default {
  name: "post-index",
  components:{
    postComponent,editor
  },
  beforeMount() {
  },
  data(){
    return{
      parentContent:'parent',
      userData:localStorage.getItem("userData"),
      list:[
        {
          postNo:1,
          regDate:new Date(),
          content:"DATA1"
        },
        {
          postNo:1,
          regDate:new Date(),
          content:"DATA1"
        },
        {
          postNo:1,
          regDate:new Date(),
          content:"DATA1"
        },
        {
          postNo:1,
          regDate:new Date(),
          content:"DATA1"
        }
      ]
    }
  },
  methods:{
    testMethod(values){
      alert(values)
    }
  }




}
</script>

<style scoped>

</style>