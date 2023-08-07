<template>
  <div>
    这里是商品界面{{top}}
    <div><input ref="input" type="text"></div>
    <button @click="changeNum(),changeA()">scroll</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'GoodsPage',
  props: {
    id: {
      default: 0
    }
  },
  data () {
    return {

    }
  },
  methods: {
    ...mapActions('goodsPage', ['changeNum']),
    ...mapActions('indexPage', ['changeA'])
  },
  computed: {
    ...mapState('goodsPage', ['top'])
  },
  created () {
  }
}
</script>

<style lang="less" scoped>

</style>
