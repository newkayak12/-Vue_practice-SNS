<template>
  <div class="post-line">
    <div class="post-outer" @click.stop.prevent="fnCloseTooltip">
      <div class="main-post" v-if="mainData.isMain">
        <span class="xi-bookmark"></span>
        메인 트윗
      </div>
      <div class="info">
        <div class="info-img-container">
          <img :src="mainData.profileImg" alt="">
        </div>
        <div class="info-letter-container">
            <h5 class="name">{{mainData.userName}}</h5>
            <p class="id">{{mainData.userId}}</p>
        </div>
        <div class="info-date-container">
          <span class="xi-ellipsis-h" @click.prevent.stop="fnShowTooltip"></span>
          <p>{{mainData.regDate |moment('YYYY년 MM월 DD일')}}</p>
        </div>
        <div class="tooltip" v-if="meta.tooltip">
            <button class="delete" @click.stop.prevent="fnDelete">삭제</button>
            <button class="modify" @click.stop.prevent="fnModify">수정</button>
        </div>
      </div>
      <div class="content" v-if="!meta.isModify">
        <div class="main-content" v-html="mainData.content"></div>
        <div class="hash-content">
          <a href="#" v-for="(item,index) in mainData.hashtag" :key="index">
            {{item|hashtag}}
          </a>
          <br v-if="index/2">
        </div>
        <div class="photo-content">
          <img :src="item.path" alt="" v-for="(item,index) in mainData.img" :key="index">
        </div>
        <div class="link-content" v-if="mainData.link!==null">
          <vuelinkpreview :url="mainData.link" @click="handleClick"/>
        </div>
      </div>
      <div v-else>
        <button @click="fnModifyChange">수정</button>
        <post-editor :content="mainData.content" :link="mainData.link"
                     :hashtag="hash"
                     @fnChange="fnChange"
                     @fnLink="fnLink"
                     @fnHashtag="fnHashtag"
        />

      </div>
      <div class="buttons">
        <p v-if="amILiked(mainData.likeList)" @click="fnUnLike">
          <span class="xi-heart" ></span>
          unlike
        </p>
        <p v-else  @click="fnLike">
          <span class="xi-heart-o"></span>
          like
        </p>
        <p>
          <span class="xi-share"></span>
          retweet
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Vuelinkpreview from '@ashwamegh/vue-link-preview'
import postEditor from "@/component/postEditor/postEditor";
export default {
  name: "postCard",
  components:{
    Vuelinkpreview, postEditor
  },
  filters:{
    hashtag(val){
      return '#'+val
    }
  },
  data(){
    return {
      meta:{
        tooltip:false,
        isModify:false,
        content:'',
        link:'',
        hashtag:'',
      },
    }
  },
  props:{
    mainData:{
      type:Object,
      required:true,
    },
    idx:{
      type:Number
    }
  },
  computed:{
    hash(){
      console.log(this.mainData)
       return this.mainData.hashtag===null? '':'#'+this.mainData.hashtag.join('#')
    }
  },
  methods: {
    handleClick(preview) {
      // console.log('click', preview.domain, preview.title, preview.description, preview.img)
    },
    amILiked(likeList){
      const meta = localStorage.getItem("userData")||''
      const userData = JSON.parse(meta)
      console.log( 'amIliked',likeList.includes(parseInt(userData.userNo)))
      console.log(likeList, userData.userNo)
      return likeList.includes(parseInt(userData.userNo))? true:false
    },
    fnUnLike(){
      const postNo =  this.mainData.postNo
      this.$emit('fnUnLike', {postNo:postNo, userNo:JSON.parse(localStorage.getItem("userData")).userNo})
    },
    fnLike(){
      const postNo =  this.mainData.postNo
      this.$emit('fnLike', {postNo:postNo, userNo:JSON.parse(localStorage.getItem("userData")).userNo})
    },
    fnShowTooltip(){
      this.meta.tooltip= !this.meta.tooltip
    },
    fnCloseTooltip(){
      this.meta.tooltip= false
    },
    fnDelete(){
      this.meta.tooltip= false
      this.$emit('fnDelete', this.mainData.postNo)
    },
    fnModify() {
      this.meta.tooltip= false
      this.meta.isModify=true
      this.$emit('fnModify', this.mainData.postNo)
    },
    fnChange(val) {
      this.$set(this.meta, 'content', val)
      console.log(val)
    },
    fnLink(val){
      this.$set(this.meta, 'link', val)
      console.log(val)
    },
    fnHashtag(val){
      this.$set(this.meta, 'hashtag', val)
      console.log(val)
    },
    fnModifyChange(){
      const content = this.meta.content
      const index= this.idx
      const link = this.meta.link
      const hashtag= this.meta.hashtag
      this.meta.isModify=false
      this.$emit('fnChange', {content:content, index:index, link:link, hashtag: hashtag})

    }
  }
}
</script>

<style scoped>
  .post-line{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 1rem;
  }
  .post-outer{
    border-top: rgb(187, 186, 186) 0.05rem solid;
    border-left: rgb(187, 186, 186) 0.05rem solid;
    border-bottom: rgb(187, 186, 186) 0.3rem solid;
    border-right: rgb(187, 186, 186) 0.3rem solid;
    border-radius: 30px;
    width: 90%;
    min-height: 15rem;
    /*max-height: 40rem;*/
    margin-bottom: 1.5rem;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: start;
  }
  .info{
    position: relative;
    height: 27%;
    border-bottom: rgb(187, 186, 186) 1px solid;
    padding: 0.5rem;
    margin-bottom: 3%;
    display: flex;
    justify-content: start;
    flex-direction: row;
    align-items: center;
  }
  .main-post{
    color: rgb(187, 186, 186);
    font-size: 0.8rem;
    min-height: 0.8rem;
    padding:0 0 0 1rem;
  }
  .info-img-container{
    padding: 0 0.1rem 0 0.1rem;
    margin-right: 1rem;
  }
  .info img{
    width: 4rem;
    height: 4rem;
    border-radius: 100%;
  }
  .info-letter-container{
    margin-right: 1rem;
  }
  .info-letter-container .name{
    font-weight: bolder;
    padding:0 0 0.2rem 0;
  }
  .info-letter-container .id{
    color: rgb(187, 186, 186);
    padding:0.2rem 0 0 0;
  }
  .info-date-container{
    position: absolute;
    right: 0;
    margin-right: 1rem;
    font-size: 0.9rem;
    color: rgb(187, 186, 186);
    display: flex;
    flex-direction: column;
    align-items: end;
  }
  .info-date-container span{
    margin-bottom: 1rem;
  }
  .info-date-container span:active{
    color:rgb(106, 171, 111);
  }
  .tooltip{
    position: absolute;
    top:0;
    right: 0;
    border: 1px solid rgb(187, 186, 186);
    border-radius: 10px;
    background-color: rgb(255, 255, 255);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    padding: 0.3rem;
    width: 5.5rem;
    height: 3em;
  }
  .tooltip-header{
    width: 100%;
    display: flex;
    justify-content: end;
    padding-right: 0.3rem;
    cursor: pointer;
  }
  .tooltip-content{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .tooltip .delete {
    background-color: #ec8d8d;
    color:white;
    padding: 0.2rem 0.3rem;
    border: 1px solid rgb(187, 186, 186);
  }
  .tooltip .modify{
    background-color:rgb(106, 171, 111);
    color:white;
    padding: 0.2rem 0.3rem;
    border: 1px solid rgb(187, 186, 186);
  }
  .content{
    padding: 0.3rem;
    left: 0;
    width: 100%;
    height: 60%;
    border-bottom: rgb(187, 186, 186) 1px solid;
  }
  .main-content{
    margin: 1rem;
  }
  .hash-content{
    margin: 1rem;
    /*width:10rem;*/
  }
  .hash-content a{
    width: 2rem;
    font-size: 0.9rem;
    margin:0 0.2rem 0 0.2rem;
  }
  .photo-content{
    margin: 1rem;
    display: grid;
    grid-template-columns: repeat(3, 9rem);
    gap: 1rem ;
  }
  .photo-content img {
    margin: 0.4rem;
    width: 9rem;
    height: 9rem;
  }
  .link-content{
    margin: 1rem;
    padding: 0;
  }
  .link-content div{
    width: 100%;
  }
  .buttons{
    height: 2.5rem;
    padding: 0.3rem 1rem;
    display: flex;
    justify-content: flex-end;
    cursor:pointer;
  }
  .buttons p{
    margin-left: 1rem;
  }
  .buttons p span{
    color:rgb(106, 171, 111)
  }
  .buttons .xi-heart-o{
    color: rgb(187, 186, 186);
  }
  .buttons .xi-share{
    color: rgb(187, 186, 186);
  }
  .buttons .xi-share:active{
    color:rgb(106, 171, 111)
  }
</style>