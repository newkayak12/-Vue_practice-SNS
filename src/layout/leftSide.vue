<template>
  <div class="container">
    <div class="header-container">
      <ul>
        <li> <img :src="require('@/assets/logo.png')" style="width: 5rem"></li>
        <li class="xi-tag">&nbsp;찾기</li>
        <li class="xi-cog">&nbsp;설정</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "leftSid"
}
</script>

<style scoped>
.container{
  position: fixed;
  top:0;
  left:0;
}
.header-container{
  width: 10vw;
  height: 100vh;
  border: 1px #eff3f4 solid;
  display: flex;
  justify-content: center;
}
.header-container >ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 0.3rem;
}
.header-container  li {
  margin-bottom: 3rem;
  padding-left: 0.3rem;
  padding-right: 0.3rem;
  font-size: 1.5rem;
  color: rgb(101, 166, 106);
  text-shadow: 0.01rem 0.01rem black;
}
.header-container  li span{
  padding: 0.5rem;

}

</style>