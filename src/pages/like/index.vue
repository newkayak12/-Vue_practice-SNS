<template>
  <div>
    <div v-if="fetchedData.posts.length>0" class="post-container">
      <post-card :main-data="item" v-for="(item, index) in fetchedData.posts"
                 :idx="index" :key="index"
                 @fnLike="fnLike" @fnUnLike="fnUnLike"
      />
    </div>
    <div v-else class="no-post-container">
      <span class="xi-info-o"> 포스트가 없습니다.</span>
    </div>
  </div>
</template>

<script>
import postCard from "@/component/postCard/postCard";
export default {
  name: "index",
  components:{
    postCard
  },
  data(){
    return {
      fetchedData:{
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
  methods:{
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
}
</script>

<style scoped>

</style>