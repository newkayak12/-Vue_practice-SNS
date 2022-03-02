<template>
  <div>
    like
    {{vuex}}
  </div>
</template>

<script>
export default {
  name: "index",
  computed:{
    vuex(){
      return this.$store.getters['getConent']
    }
  }
}
</script>

<style scoped>

</style>