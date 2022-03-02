<template>
  <div>
    <div class="post-container">
      <img :src="userData.img" alt="" style="width: 100px">
      <div class="container-box">
        <div class="info-box">
          <div class="profile-box">
            <h4 class="name-container">name</h4>
            <h4 class="id-container">id</h4>
            <h4 class="date-container">
              {{data.regDate | moment("YYYY-MM-DD")}}
            </h4>
          </div>
          <div class="modify-box">
              ??
          </div>
        </div>
        <div class="content-box">
          {{ data.content }}
        </div>
        <div class="button-box"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "postComponent",
  props:{
    userData:{
      type:Object
    },
    data:{
      type:Object
    }
  }
}
</script>

<style scoped>
  .post-container{
    display: flex;
    flex-direction: row;
    border: rgb(197,197,197) 1px solid;
    width: 70vw;
    min-height: 20rem;
  }
  .container-box{
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .info-box{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 3rem;
    width: 100%;
    border-bottom: rgb(197,197,197) 1px solid;
  }
  .content-box{
    width: 100%;
    min-height: 14rem;
  }
  .button-box{
    width: 100%;
    height: 3rem;
    border-top: rgb(197,197,197) 1px solid;
  }
  .profile-box{
    display: flex;
    flex-direction: row;
  }
  .name-container{
    padding: 0 0.5rem 0 0.5rem;
  }
  .id-container{
    padding: 0 0.5rem 0 0.5rem;
  }
  .date-container{
    padding: 0 0.5rem 0 0.5rem;
  }


</style>