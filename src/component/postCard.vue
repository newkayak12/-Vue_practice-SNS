<template>
  <div class="post-line">
    <div class="post-outer">
      <div class="info">info</div>
      <div class="content">content</div>
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
    <div class="post-outer">
      <div class="info">info</div>
      <div class="content">content</div>
      <div class="buttons">buttons</div>
    </div>
    <div class="post-outer">
      <div class="info">info</div>
      <div class="content">content</div>
      <div class="buttons">buttons</div>
    </div>
    <div class="post-outer">
      <div class="info">info</div>
      <div class="content">content</div>
      <div class="buttons">
        <span class="xi-heart"></span>
        <span class="xi-heart-o"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "postCard"
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
    height: 20rem;
    margin-bottom: 1rem;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: start;
  }
  .info{
    height: 27%;
    border-bottom: rgb(187, 186, 186) 1px solid;
    padding: 0.3rem;
    margin-bottom: 3%;
  }
  .content{
    height: 60%;
    padding: 0.3rem;
    border-bottom: rgb(187, 186, 186) 1px solid;
  }
  .buttons{
    height: 10%;
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