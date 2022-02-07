<template>
  <div class="post-container">
    <div class="postLayer">
      <div class="buttonLayer" >
        <span v-if="meta.areYouWrite" @click="fnWrite" class="writeLayer">
          <span class="xi-pen"></span>
          글쓰기
        </span>
        <span v-else  class="undoLayer">
          <span @click="fnUndo" class="undoLayer-firstSkin">
              <span class="xi-undo"></span>
              취소하기
          </span>
          <span @click="fnEnroll" class="undoLayer-firstSkin">
              <span class="xi-border-color"></span>
              등록하기
          </span>
        </span>

      </div>
      <post-editor v-if="!meta.areYouWrite" :content.sync="form.content"
                   :link.sync="form.link" :hashtag.sync="form.hashtag"/>
    </div>
    <div v-if="fetchedData.posts.length>0" class="post-container">
      <post-card :main-data="item" v-for="(item, index) in fetchedData.posts"
                 :key="index" v-on:fnModify="fnModify" v-on:fnDelete="fnDelete"/>
    </div>
    <div v-else class="no-post-container">
      <span class="xi-info-o"> 포스트가 없습니다.</span>
    </div>
  </div>
</template>

<script>
import postCard from "@/component/postCard/postCard";
import postEditor from "@/component/postEditor/postEditor";
import throttle from "lodash.throttle";

export default {
  name: "index",
  beforeMount() {
    window.addEventListener('scroll', throttle(()=>{
      if(window.scrollY+document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
        this.fetchData()
      }
    },800))
    const userData = JSON.parse(localStorage.getItem("userData")||{})
    if(Object.values(userData).length > 0){
      this.form.userNo = userData.userNo
      this.form.userId = userData.id
      this.form.userName = userData.name
      this.form.profileImg = userData.img
    }
  },
  components:{
    postCard, postEditor
  },
  data(){
    return {
      meta:{
        hasMorePost:true,
        areYouWrite:true
      },
      form:{
        userNo:1,
        userId:'',
        profileImg:'',
        userName:'',
        content:'',
        regDate: new Date(),
        link:'',
        hashtag:[],
        isMain:false,
        likeList:[]
      },
      fetchedData:{
        posts:[]
      },
      beforeFetch:{
        posts:[
          {
            postNo:1,
            profileImg:'http://localhost:8080/img/400x400.be9612a3.jpg',
            userId:'@_IUofficial',
            userName:"아이유(IU) Official Twitter",
            regDate: new Date(),
            isMain:true,
            content:'<p>hello</p>',
            hashtag:['아이유', 'IU', '조각집', 'Pieces', 'PiecesByIU', '스물아홉_아이유가_모은_조각집'],
            link: 'https://www.melon.com/album/detail.htm?albumId=10827816',
            img:[
              {path:'https://twitter.com/edam_ent/status/1486987564406177792/photo/1'},
              {path:'https://twitter.com/flytorifly/status/1486988551065841664/photo/1'}
            ],
            likeList:[]
          },
          {
            postNo:2,
            profileImg:'http://localhost:8080/img/400x400.be9612a3.jpg',
            userId:'@_IUofficial',
            userName:"아이유(IU) Official Twitter",
            regDate: new Date(),
            isMain:false,
            content:'<p>hello</p>',
            hashtag:['아이유', 'IU', '조각집', 'Pieces', 'PiecesByIU', '스물아홉_아이유가_모은_조각집'],
            link: 'https://www.melon.com/album/detail.htm?albumId=10843381',
            img:[
              {path:'https://twitter.com/edam_ent/status/1486987564406177792/photo/1'},
              {path:'https://twitter.com/flytorifly/status/1486988551065841664/photo/1'}
            ],
            likeList:[]
          },
          {
            postId:1,
            profileImg:'http://localhost:8080/img/400x400.be9612a3.jpg',
            userId:'@_IUofficial',
            userName:"아이유(IU) Official Twitter",
            regDate: new Date(),
            isMain:false,
            content:'<p>hello</p>',
            hashtag:['아이유', 'IU', '조각집', 'Pieces', 'PiecesByIU', '스물아홉_아이유가_모은_조각집'],
            link: 'https://www.naver.com',
            img:[
              {path:'https://twitter.com/edam_ent/status/1486987564406177792/photo/1'},
              {path:'https://twitter.com/flytorifly/status/1486988551065841664/photo/1'}
            ],
            likeList:[]
          }
        ]
      }
    }
  },
  computed:{
  },
  methods:{
    fetchData(){
      if(!this.meta.hasMorePost){
        return
      }

      this.beforeFetch.posts.forEach((v,i)=>{
        this.fetchedData.posts.push(v)
      })
      console.log(this.fetchedData.posts)
    },
    fnWrite(){
      this.meta.areYouWrite = !this.meta.areYouWrite
    },
    fnUndo(){
      this.meta.areYouWrite = !this.meta.areYouWrite
    },
    fnEnroll(){
      this.meta.areYouWrite = !this.meta.areYouWrite
      console.log(this.form)
      this.fetchedData.posts.unshift(JSON.parse(JSON.stringify(this.form)))
      this.form.content=''
      this.form.link=''
      this.form.hashtag=''
    },
    fnModify(postNo){
      console.log(postNo)
    },
    fnDelete(postNo){
      console.log(postNo)
    }


  }
}
</script>

<style scoped>
.post-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}
.postLayer{
  padding: 1rem;
}
.buttonLayer{
  padding: 0.4rem;
  display: flex;
  justify-content: flex-end;
}
.xi-pen{
  color:rgb(106, 171, 111)
}
.writeLayer{
  cursor: pointer;
}
.undoLayer{
  cursor:pointer;
}
.undoLayer-firstSkin{
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}
.xi-undo{
  color: rgb(171, 106, 168)
}
.xi-border-color{
  color:rgb(106, 171, 111)
}
.no-post-container{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15rem;
}
</style>