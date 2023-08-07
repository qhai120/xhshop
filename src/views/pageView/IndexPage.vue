<template>
  <div>
    这里是首页1{{a}}
    <el-button type="primary" @click="addNum(),addScroll(),look(a)">主要按钮</el-button>
    <ul>
      <li v-for="(item,index) in list" :key="index" :class="[a==index?'active':'']">{{item}}</li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  name: 'IndexPage',
  methods: {
    ...mapMutations('indexPage', ['addNum']),
    ...mapActions('goodsPage', ['addScroll']),
    look (num) {
      console.log(this.a)
    }
  },
  computed: {
    ...mapState('indexPage', ['a', 'list'])
  }
}
</script>

<style lang="less" scoped>
.active{
  color: red;
}
</style>
