<template>
  <div>
    <div class="editor">
      <button @click="fnWrite">등록</button>
    </div>
    <quill-editor v-model="content"/>
  </div>
</template>

<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import {quillEditor} from 'vue-quill-editor'
export default {
  name: "editor",
  components:{
    quillEditor
  },
  watch:{
    content(val){
      this.$emit('update:parentData', val)
      this.$emit('test',val)
    },
    'form.datas.contentsValue.date'(val){

    }
  },
  props:{
    parentData:{
      type:String
    }
  },
  data(){
    return {
      content:'',
      form:{
        datas:{
          contentsValue:{
            date:''
          }
        }
      }
    }
  },
  methods:{
    fnWrite(){
      const userData = JSON.parse(localStorage.getItem("userData"))
      // this === vue
      // this.$store === vue.prototype.$store
      // this.$store.commit() : mutations (setter)
      // this.$store.getters :getter
      // this.$store.dispatch() :actions
      this.$store.commit('setContent', {content:this.content})

      // 위치/메소드
    }
  }
}
</script>

<style scoped>
.editor{
  display: flex;
  justify-content: end;
}
.editor button{
  margin : 1rem;

}
</style>