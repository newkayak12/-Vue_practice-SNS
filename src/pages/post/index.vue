<template>
  <div class="post-container">
    <post-card></post-card>
  </div>
</template>

<script>
import postCard from "@/component/postCard";
export default {
  name: "index",
  components:{
    postCard
  }
}
</script>

<style scoped>
.post-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}

</style>