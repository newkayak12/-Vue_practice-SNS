<template>
<div class="header-container">
  <ul>
    <li> <img :src="require('@/assets/logo.png')" style="width: 5rem"></li>
    <li class="xi-tag">&nbsp;찾기</li>
    <li class="xi-cog">&nbsp;설정</li>
  </ul>
</div>
</template>

<script>
export default {
  name: "leftSid"
}
</script>

<style scoped>
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
}
.header-container  li {
  margin-bottom: 3rem;
  font-size: 1.5rem;
}
.header-container  li span{
  padding: 0.5rem;
  color: rgb(106, 171, 111);
}

</style>