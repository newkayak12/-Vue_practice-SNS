<template>
<<<<<<< HEAD
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
      <post-editor v-if="!meta.areYouWrite"
                   :content="form.content"
                   :link="form.link"
                   :hashtag="form.hashtag"
                   @fnChange="fnChange"
                   @fnLink="fnLink"
                   @fnHashtag="fnHashtag"

      />
    </div>
    <div v-if="fetchedData.posts.length>0" class="post-container">
      <post-card :main-data="item" v-for="(item, index) in fetchedData.posts"
                 :idx="index" @fnChange="fnModifyContent"
                 :key="index" @fnModify="fnModify" @fnDelete="fnDelete"
                 @fnLike="fnLike" @fnUnLike="fnUnLike"
      />
    </div>
    <div v-else class="no-post-container">
      <span class="xi-info-o"> 포스트가 없습니다.</span>
    </div>
=======
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
>>>>>>> e0403201c05a7dcbd4193ba37a04054df55ab4cd
  </div>
</template>

<script>
<<<<<<< HEAD
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
            content:'<p>안녕</p>',
            hashtag:['아이유', 'IU', '조각집', 'Pieces', 'PiecesByIU', '스물아홉_아이유가_모은_조각집'],
            link: 'https://www.melon.com/album/detail.htm?albumId=10827816',
            img:[
              {path:'https://twitter.com/edam_ent/status/1486987564406177792/photo/1'},
              {path:'https://twitter.com/flytorifly/status/1486988551065841664/photo/1'}
            ],
            likeList:[1]
          },
          {
            postNo:2,
            profileImg:'http://localhost:8080/img/400x400.be9612a3.jpg',
            userId:'@_IUofficial',
            userName:"아이유(IU) Official Twitter",
            regDate: new Date(),
            isMain:false,
            content:'<p>hi</p>',
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
            likeList:[1]
          }
        ]
      }
    }
  },
  computed:{
  },
  methods: {
    fnChange(val) {
      this.$set(this.form, 'content', val)
    },
    fnLink(val){
      this.$set(this.form, 'link', val)
    },
    fnHashtag(val){
      this.$set(this.form, 'hashtag', val)
    },
    fetchData() {
      if (!this.meta.hasMorePost) {
        return
      }
      this.beforeFetch.posts.forEach((v, i) => {
        this.fetchedData.posts.push(v)
      })
    },
    fnWrite() {
      this.meta.areYouWrite = !this.meta.areYouWrite
    },
    fnUndo() {
      this.meta.areYouWrite = !this.meta.areYouWrite
    },
    fnEnroll() {
      this.meta.areYouWrite = !this.meta.areYouWrite
      this.form.postNo = Math.ceil(Math.random()*10000+1)
      console.log(this.form.postId)
      this.fetchedData.posts.unshift(JSON.parse(JSON.stringify(this.form)))

      this.form.content = ''
      this.form.link = ''
      this.form.hashtag = ''
    },
    fnModify(postNo) {
      console.log(postNo)
    },
    fnDelete(postNo) {
      const idx = this.fetchedData.posts.findIndex((v,i)=>{
        console.log(v)
        if(v.postNo===postNo){
          return v
        }
      })
      console.log(idx)
      this.fetchedData.posts.splice(idx,1)
    },
    fnModifyContent(val={}){
      this.$set(this.fetchedData.posts[val.index], 'content' , val.content )
      this.$set(this.fetchedData.posts[val.index], 'link' , val.link )
      this.$set(this.fetchedData.posts[val.index], 'hashtag' , val.hashtag )
    },
    fnLike(val){
      console.log(val)
      const idx = this.fetchedData.posts.findIndex((v)=>{
        console.log(v)
        if(v.postNo===val.postNo){
          return v
        }
      })
      console.log(this.fetchedData.posts[idx])
      this.fetchedData.posts[idx].likeList.push(val.userNo)
    },
    fnUnLike(val) {
      const idx = this.fetchedData.posts.findIndex((v)=>{
        if(v.postNo===val.postNo){
          return v
        }
      })
      const userNoIdx= this.fetchedData.posts[idx].likeList.findIndex((v)=>{
        if(v===val.userNo){
          return v
        }
      })
      this.fetchedData.posts[idx].likeList.splice(userNoIdx,1)
    }
  }
=======
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




>>>>>>> e0403201c05a7dcbd4193ba37a04054df55ab4cd
}
</script>

<style scoped>
<<<<<<< HEAD
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
=======

>>>>>>> e0403201c05a7dcbd4193ba37a04054df55ab4cd
</style>