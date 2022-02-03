<template>
  <div class="outer-container">
    <div>
    <ul class="top-container">
      <li class="backgroundImg">
        <img :src="fetchedData.backgroundImg" alt="">
      </li>
      <li class="profile">
        <img :src="fetchedData.profileImg" alt="">
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
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data(){
    return {
      fetchedData:{
        backgroundImg : require('@/assets/img/600x200.jpeg'),
        profileImg: require("@/assets/img/400x400.jpg")
      }
    }
  },
  computed:{
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
    fnLike(){
      this.$router.push({path:'/like/'})
    }
  }
}
</script>

<style scoped>
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
    border: rgb(240,240,240);
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

</style>