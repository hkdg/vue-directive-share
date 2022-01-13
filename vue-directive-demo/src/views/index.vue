<template>
  <div class="main">
    <el-tabs
      v-model="activeName"
      @tab-click="handleClick"
    >
      <el-tab-pane
        label="懒加载图片"
        name="lazy-img"
      >
      </el-tab-pane>
      <el-tab-pane
        label="v-pre"
        name="pre"
      >
      </el-tab-pane>
      <el-tab-pane
        label="v-once"
        name="once"
      >
      </el-tab-pane>
      <el-tab-pane
        label="其他"
        name="other"
      >
      </el-tab-pane>
    </el-tabs>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      activeName: 'lazy-img'
    };
  },
  mounted() {
    this.$router.push('lazy-img');
  },
  methods: {
    handleClick() {
      this.$router.push(`/index/${this.activeName}`);
    }
  }
};
</script>

<style lang="scss" scoped>
.main {
  width: 500px;
  margin: 0 auto;
}
</style>
