<template>
  <div class="container">
    <div class="header-container">
      <div class="name">
        <div class="xi-arrow-left arrow"></div>
        <div class="title">
          <h4>아이유 공식 트위터</h4>
          <p>1,232트윗</p>
        </div>
      </div>
    </div>
<<<<<<< HEAD
<!--    <div class="content">-->
<!--      <router-view />-->
<!--    </div>-->
=======
>>>>>>> e0403201c05a7dcbd4193ba37a04054df55ab4cd
  </div>
</template>

<script>
export default {
  name: "headerLayout",
}
</script>

<style scoped>
  .container{
    position: fixed;
    top:0;
    left:10vw;
    z-index: 30;
  }
  .header-container {
    background-color: rgba(255,255,255,0.8);
<<<<<<< HEAD
    z-index: 20;
=======
>>>>>>> e0403201c05a7dcbd4193ba37a04054df55ab4cd
    width: 70vw;
    height: 4rem;
    border: 1px #eff3f4 solid;
    display: flex;
    justify-content: space-between;
  }
  .arrow{
    font-size: 2rem;
    margin: 0.5rem 0.5rem;
  }
  .name{
    padding: 0.5rem;
    width: 60%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .content{
    padding: 0rem;
  }


</style>