<template>
  <div class="lazy">
    <h1>v-lazy 懒加载图片</h1>
    <div class="lazy-list">
      <img v-for="item in list" :key="item.id" v-lazy="item.src" class="lazy-item" />
    </div>
  </div>
</template>

<script>
// import empty from '../assets/empty.png';
import logo from '../assets/logo.png';

export default {
  name: 'LazyImg',
  data() {
    return {
      list: [],
      // empty,
      logo,
      a: '',
      b: ''
    };
  },
  created() {
    for (let i = 0; i < 20; i++) {
      this.list.push({ id: i, src: logo });
    }
  }
};
</script>

<style lang="scss" scoped>
.lazy {
  h1 {
    text-align: center;
  }
  text-align: left;
  .lazy-list {
    // width: 800px;
    margin: 0 auto;
    img {
      width: 200px;
      height: 200px;
      padding: 10px;
    }
  }
}
</style>
