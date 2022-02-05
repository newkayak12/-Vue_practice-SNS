<template>
  <div class="post-container">
    <post-card :main-data="item" v-for="(item, index) in fetchedData.posts" :key="index"/>
  </div>
</template>

<script>
import postCard from "@/component/postCard";
import throttle from "lodash.throttle";

export default {
  name: "index",
  beforeMount() {

    window.addEventListener('scroll', throttle(()=>{
      if(window.scrollY+document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
        this.fetchData()
      }
    },800))
  },
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
            likeList:[1,3,4,5]
          },
          {
            postNo:3,
            profileImg:'http://localhost:8080/img/400x400.be9612a3.jpg',
            userId:'@_IUofficial',
            userName:"아이유(IU) Official Twitter",
            regDate: new Date(),
            isMain:false,
            content:'<p>hello</p>',
            hashtag:['아이유', 'IU', '조각집', 'Pieces', 'PiecesByIU', '스물아홉_아이유가_모은_조각집'],
            link: 'https://www.melon.com/album/detail.htm?albumId=10827816',
            img:[
              {path:'https://twitter.com/edam_ent/status/1486987564406177792/photo/1'},
              {path:'https://twitter.com/flytorifly/status/1486988551065841664/photo/1'}
            ],
            likeList:[1,4,5]
          }
        ]
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
            link: 'https://www.melon.com/album/detail.htm?albumId=10827816',
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
  methods:{
    fetchData(){
      this.beforeFetch.posts.forEach((v,i)=>{
        this.fetchedData.posts.push(v)
      })
      console.log(this.fetchedData.posts)
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

</style>