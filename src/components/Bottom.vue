<template>
  <div class="Bottom_container">
    <ul>
      <li v-for="(item, index) in list" :key="index" @click="num = index">
        <router-link
          :to="item.page"
          :class="['test', num == index ? 'active' : '']"
        >
          <span>{{ item.name }}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Bottom',
  data() {
    return {
      num: 0,
      list: [
        { name: '首页', page: '/index' },
        { name: '商品', page: '/goods/3' },
        { name: '购物车', page: '/car' },
        { name: '我的', page: '/my' },
      ],
    }
  },
}
</script>

<style lang="less" scoped>
.Bottom_container {
  position: fixed;
  bottom: 5px;
  left: 0;
  width: 100%;
  background-color: #e3e3e3;
  ul {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 5px;
    margin-top: 5px;
    margin-bottom: 5px;
    box-sizing: border-box;
    li {
      list-style: none;
      width: 25%;
      height: 20px;
      box-sizing: border-box;
      text-align: center;
      border-right: 1px solid white;
    }
  }
}
.test {
  text-decoration: none;
  color: black;
  line-height: 16px;
  font-weight: normal;
}
.active {
  color: skyblue;
}
</style>
