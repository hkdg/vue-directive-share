<template>
  <div>
    <h1>只渲染一次</h1>
    <v-once v-once :title="title"> </v-once>
    <h1>每次渲染</h1>
    <v-once :title="title"></v-once>
  </div>
</template>

<script>
import VOnce from '../components/v-once.vue';
export default {
  name: 'Once',
  components: {
    VOnce
  },
  data() {
    return {
      title: 1
    };
  },
  mounted() {
    setInterval(() => {
      this.title++;
    }, 2000);
  }
};
</script>

<style lang="scss" scoped>
</style>
