<template>
  <div class="container">
    <div class="header-container">
      <ul>
        <li> <img :src="require('@/assets/logo.png')" style="width: 5rem"></li>
        <li class="mark">&nbsp;
         <span class="xi-tag"></span>
         <span class="tag-label">찾기</span>
        </li>
        <li class="mark">&nbsp;
         <span class="xi-cog"></span>
         <span class="setting-label">설정</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "leftSide"
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

.mark{
  margin: 0rem 0.2rem;
  padding: 0rem 0.2rem;
}
@media(max-width: 1300px ){
  .tag-label, .setting-label {
      display: none;
  }
}
@media(min-width: 1301px ){
  .tag-label, .setting-label {
    display: inline-block;
  }
}


</style>