<template>
  <div>
    <router-view></router-view>
    <bottom></bottom>
  </div>
</template>

<script>
import Bottom from '@/components/Bottom.vue'
export default {
  name: 'HomeView',
  components: {
    Bottom
  }
}
</script>

<style lang="less" scoped>

</style>
