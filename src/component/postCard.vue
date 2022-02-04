<template>
  <div class="post-line">
    <div class="post-outer">
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
          <p>{{mainData.regDate |moment('YYYY년 MM월 DD일')}}</p>
        </div>
      </div>
      <div class="content">
        <div class="main-content" v-html="mainData.content"></div>
        <div class="hash-content">
          <a href="#" v-for="(item,index) in mainData.hashtag" :key="index">{{item|hashtag}}</a>
        </div>
        <div class="photo-content">
          <img :src="item.path" alt="" v-for="(item,index) in mainData.img" :key="index">
        </div>
        <div class="link-content">
          {{mainData.link}}
        </div>
      </div>
      <div class="buttons">
        <p v-if="true">
          <span class="xi-heart"></span>
          unlike
        </p>
        <p v-else>
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
export default {
  name: "postCard",
  filters:{
    hashtag(val){
      return '#'+val
    }
  },
  props:{
    mainData:{
      type:Object,
      required:true,
    }
  },
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
  }
  .hash-content a{
    font-size: 0.9rem;
    margin:0 0.2rem 0 0.2rem;
  }
  .photo-content{
    margin: 1rem;
  }
  .photo-content img {
    margin: 0.4rem;
    width: 9rem;
    height: 9rem;
  }
  .link-content{
    margin: 1rem;
  }
  .buttons{
    height: 2.5rem;
    padding: 0.3rem 1rem;
    display: flex;
    justify-content: flex-end;
  }
  .buttons p{
    margin-left: 1rem;
  }
  .buttons p span{
    color:rgb(106, 171, 111)
  }
</style>