<template>
  <div>
    <div class="editor-outline">
      <quill-editor :options="editorOption" v-model="contents" @change="fnChange" class="edit"/>
      <div class="mini-editor">
        <span class="xi-tags icon"></span>
        <input type="text" class="edit" v-model="hashtags" @input="fnHashtag">
      </div>
      <div class="mini-editor">
        <span class="xi-link icon"></span>
        <input type="url" class="edit" v-model="links" @input="fnLink">
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "postEditor",
  props:{
    content:{
      type:String
    },
    link:{
      type:String
    },
    hashtag:{
      type:[Array,String]
    }
  },
  beforeMount(){
    this.contents=this.content
    this.hashtags = this.hashtag
    this.links = this.link

  },
  mounted() {
    this.fnChange({html:this.contents})
    this.fnLink({target:{value:this.links}})
    this.fnHashtag({target:{value:this.hashtags}})
  },
  watch:{
  },
  data(){
    return {
      contents:'',
      links:'',
      hashtags:'',
      editorOption: {
        // some quill options
        modules: {
          toolbar: [
            ["bold", "italic", "underline", "strike"],
            ["blockquote", "code-block"]
          ],
        }
      }
    }
  },
  methods:{
    fnChange(val){
      // this.content = val.html
      // this.$emit('update:content', val.html)
      console.log('123',val)
      this.$emit('fnChange', val.html)
    },
    fnHashtag(e){
      const value = e.target.value.replaceAll(' ','')
      const arr = value.split("#").splice(1)
      // this.$emit('update:hashtag', arr)
      this.$emit('fnHashtag', arr)
    },
    fnLink(e){
      // this.$emit('update:link', e.target.value)
      this.$emit('fnLink', e.target.value)

    }
  }
}
</script>

<style scoped>
  .editor-outline{
    border: 1px solid rgb(187, 186, 186);
    padding: 0.8rem;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
  }
  .edit{
    margin-top: 0.4rem;
    margin-bottom: 0.4rem;
  }
  .mini-editor{
    position: relative;
    display: flex;
  }
  .icon{
    position: absolute;
    top: 0.3rem;
    left: 0.1rem;
    padding: 0.1rem;
    border:1px solid rgb(187, 186, 186); ;
    color: rgb(176, 175, 175);
    font-size: 1.8rem;
    border-radius: 5px;
  }
  [type=text].edit{
    height: 2rem;
    width: 80%;
    border: 1px solid rgb(187, 186, 186);
    border-radius: 5px;
    padding: 0.2rem 0.2rem 0.2rem 2.5rem;
    font-size: 1.3rem;
  }
  [type=url].edit{
    height: 2rem;
    width: 80%;
    border: 1px solid rgb(187, 186, 186);
    border-radius: 5px;
    padding: 0.2rem 0.2rem 0.2rem 2.5rem;
    font-size: 1.3rem;
  }
</style>