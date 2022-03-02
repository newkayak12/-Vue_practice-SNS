<template>
  <div>
    <div class="container">
      <div :style="`background-image: url(${fetchedData.backgroundImg});`" class="background"></div>
      <div class="profile-container">
        <div :style="`background-image: url(${fetchedData.profileImg});`" class="profile"></div>
        <button class="followBtn"> 팔로우 </button>
      </div>
    </div>
    <div class="info-container">
      <h3 class="name">{{ fetchedData.name }}</h3>
      <p class="id">{{ fetchedData.id }}</p>
      <h4 class="description">{{ fetchedData.description }}</h4>
      <div class="info-detail-container">
        <a :href="fetchedData.link" class="link">{{ fetchedData.link }}</a>
        <p class="birth"> 생일:{{fetchedData.birth | moment('YYYY년 MM월 DD일')}} </p>
        <p class="regDate"> 가입일:{{fetchedData.regDate | moment('YYYY년 MM월 DD일')}} </p>
      </div>
      <div class="follow-container">
        <h3>팔로잉 :{{fetchedData.following | follow}}</h3>&nbsp;
        <h3>팔로우 :{{fetchedData.follower | follow}}</h3>
      </div>
    </div>
    <div class="selector">
      <button @click="fnPost" :class="{underline:postUnderline}" >트윗</button>
      <button @click="fnMedia" :class="{underline:mediaUnderline}">미디어</button>
      <button @click="fnLike" :class="{underline:likeUnderline}">마음에 들어요</button>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  filters:{
    follow(val){
      let result = ''
      if(val>1000){
        Math.ceil(val)
        const index = val.toString().indexOf(-3)
        result  = val.toString().substring(index-1, val.toString().length)
      }
      return result +'천명'
    }
  },
  data(){
    return {
      fetchedData:{
        userNo:1,
        name:'아이유 공식 트위터',
        id:'UI',
        description:'description',
        link:'www.naver.com',
        birth:new Date(),
        regDate: new Date(),
        following:1000,
        follower:11231423415,
        backgroundImg:'https://pbs.twimg.com/profile_banners/1024486566096326656/1633359681/1500x500',
        profileImg:'https://pbs.twimg.com/profile_images/1374979417915547648/vKspl9Et_400x400.jpg'
      }
    }
  },
  computed:{
    postUnderline(){
      const url = '/post'
      const addr = this.$route.fullPath
      return addr.includes(url)
    },
    mediaUnderline(){
      const url = '/media'
      const addr = this.$route.fullPath
      return addr.includes(url)
    },
    likeUnderline(){
      const url = '/like'
      const addr = this.$route.fullPath
      return addr.includes(url)
    }
  },
  methods:{
    fnPost(){
      this.$router.push({path:'/post/'})
    },
    fnMedia(){
      this.$router.push({path:'/media/'})
    },
    fnLike(){
      this.$router.push({path:'/like/'})
    }
  }

}
</script>

<style scoped>
.background{
  width: 70vw;
  height: 30rem;
}
.profile{
  background-position: center center;
  width: 15rem;
  height: 15rem;
  border-radius: 100%;
  border: 4px white solid;
  background-size: cover;
}
.profile-container{
  display: flex;
  justify-content: space-between;
  padding: 3rem;
  position: absolute;
  width: 100%;
  top: 20rem;
}
.container{
  position: relative;

}
.followBtn{
  margin-top: 8rem;
  height: 2rem;
  width: 6rem;
  border-radius: 30px;
  background-color: rgb(115, 166, 119);
  color: white;
  border: rgb(187, 186, 186) 1px solid;
}
.followBtn:active{
  background-color: rgb(68, 114, 71);
}
.info-container{
  margin-top: 8rem;
  padding: 0 3rem 3rem 3rem;
  border-bottom: rgb(197,197,197) 1px solid;
}
.info-detail-container{
  margin-top: 0.4rem;
  display: flex;
}
.follow-container{
  margin-top: 0.4rem;
  display: flex;
}
.selector{
  margin-top: 0.3rem;
  padding: 0 4rem 0 4rem;
  display: flex;
  justify-content: space-between;
  border-bottom: rgb(197,197,197) 1px solid;
}
.selector button{
  height: 100%;
  width: 33%;
  background-color: white;
  border: none;
  font-size: 1.5rem;
}
.selector button:hover {
  background-color: #e0dede;
}
.selector button:active{
  color: #96d29d;
}
.underline{
  border-bottom: #96d29d 2px solid;
}

</style>