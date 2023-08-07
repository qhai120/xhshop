<template>
  <div>
    这里是我的界面
    <div class="block">
      <span class="demonstration">大于 7 页时的效果</span>
      <el-pagination
        :page-size="5"
        :page-count="5"
        layout="prev, pager, next"
        :total="num"
        @next-click="next_click"
        @prev-click="prev_click"
        @size-change="size_change"
        @current-change='current_change'
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyPage',
  data () {
    return {
      num: 94
    }
  },
  methods: {
    next_click () {
      // 点击下一页时触发
      console.log('next')
    },
    prev_click () {
      console.log('prev')
    },
    size_change () {
      console.log('sizechange')
    },
    current_change () {
      // 页面num改变时触发，包括点击页数和点击上下页都会触发，若要取舍取这个舍next与prev
      console.log('currentchange')
    }
  }
}
</script>

<style lang="less" scoped></style>
