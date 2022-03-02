<template>
<<<<<<< HEAD
  <div class="outer-container">
    <div>
    <ul class="top-container">
      <li class="backgroundImg">
        <img :src="fetchedData.userData.backgroundImg" alt="">
      </li>
      <li class="profile">
        <img :src="fetchedData.userData.profileImg" alt="">
        <button> Follow </button>
      </li>
    </ul>
    <ul class="bottom-container">
      <li class="info">
        <ul>
          <li class="info-inner-container">
            <h2 class="name">
              아이유(IU) 공식 트위터
              <span class="xi-check-circle" ></span>
            </h2>
          </li>
          <li class="info-inner-container">
            <p class="id">
              @_IUoffical
            </p>
          </li>
          <li class="info-inner-container">
            <span class="link">
              <span class="xi-external-link"></span>
              <a href="cafe.daum.net/IU">{{`cafe.daum.net/IU`}}</a>
            </span>
            <span class="birth">
              <span class="xi-cake"></span>
              {{new Date() | moment("YYYY년 MM월 DD일")}}
            </span>
            <span class="regDate">
              <span class="xi-calendar-check"></span>
              {{new Date() | moment("YYYY년 MM월 DD일")}}
            </span>
          </li>
          <li class="info-inner-container">
            <span class="follower">
              {{'0'}}
              <span>팔로우 중</span>
            </span>
            <span class="following">
              {{'0'}}
              <span>팔로우 중</span>
            </span>
          </li>
        </ul>
      </li>
    </ul>
    </div>
    <div class="selector">
      <button :class="{on:where}" @click="fnTwit">트윗</button>
      <button :class="{on:!where}" @click="fnLike">마음에 들어요</button>
    </div>
    <div>
        <router-view></router-view>
=======
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
>>>>>>> e0403201c05a7dcbd4193ba37a04054df55ab4cd
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
<<<<<<< HEAD
  data(){
    return {
      fetchedData:{
        userData:{
          backgroundImg : require('@/assets/img/600x200.jpeg'),
          profileImg: require("@/assets/img/400x400.jpg")
        }
=======
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
>>>>>>> e0403201c05a7dcbd4193ba37a04054df55ab4cd
      }
    }
  },
  computed:{
<<<<<<< HEAD
    where(){
      return this.$route.path.includes("post")
    }
  },
  filters:{
    followCounter(val){

    }
  },
  methods:{
    fnTwit(){
      this.$router.push({path:'/post/'})
    },
=======
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
>>>>>>> e0403201c05a7dcbd4193ba37a04054df55ab4cd
    fnLike(){
      this.$router.push({path:'/like/'})
    }
  }
<<<<<<< HEAD
=======

>>>>>>> e0403201c05a7dcbd4193ba37a04054df55ab4cd
}
</script>

<style scoped>
<<<<<<< HEAD
  .outer-container{
    width: 100%;
  }
  .outer-container ul{
    list-style: none;
  }
  .top-container{
    position: relative;
  }
  .backgroundImg img{
    width: 70vw;
  }
  .profile{
    position: absolute;
    top: 80%;
    left: 3rem;
    width: 90%;
    display: flex;
    justify-content: space-between;
  }
  .profile img{
    width: 10rem;
    height: 10rem;
    border-radius: 100%;
  }
  .profile img::before{
    content:' ';
    background: black;
    width: 16rem;
    height: 16rem;
    border-radius: 100%;
  }
  .profile button {
    height: 2rem;
    width: 5rem;
    border-radius: 30px;
    background-color: rgb(106, 171, 111);
    color: white;
    border: 1px solid rgb(240,240,240);
    position: absolute;
    bottom: 2rem;
    right: 0;
  }
  .bottom-container{
    margin-top: 6rem;
  }
  .info{
    padding: 1.5rem;
  }
  .info li{
    margin-bottom: 0.5rem;
  }
  .info .name span{
    color:  rgb(106, 171, 111);
  }
  .info-inner-container{
    padding-bottom: 0.3rem;
  }
  .info-inner-container .id{
    color: rgb(187, 186, 186);
  }
  .info-inner-container .link{
    text-decoration: none;
    margin: 0 1rem 0 0rem;
  }
  .info-inner-container .link a{
    padding-left: 0.2rem;
  }
  .info-inner-container .birth{
    color: rgb(187, 186, 186);
    margin: 0 1rem 0 0rem;
  }
  .info-inner-container .regDate{
    color: rgb(187, 186, 186);
    margin: 0 1rem 0 0rem;
  }
  .follower,.following{
    font-weight: bolder;
  }
  .follower span, .following span {
    color: rgb(187, 186, 186);
    margin-right: 1rem;
  }
  .selector{
    width: 70vw;
    display: flex;
    height: 4rem;
    padding: 0.4rem;
    justify-content: space-around;
    border-top: rgb(187, 186, 186) 1px solid;
    border-bottom: rgb(187, 186, 186) 1px solid;
  }
  .selector button {
    border: none;
    background:none;
    font-size: 1rem;
    width: 10rem;
    cursor:pointer;
  }
  .selector button.on{
    border-bottom: 2px rgb(106, 171, 111) solid !important;
    color: rgb(106, 171, 111);
    font-weight: bolder;
  }
=======
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
>>>>>>> e0403201c05a7dcbd4193ba37a04054df55ab4cd

</style>