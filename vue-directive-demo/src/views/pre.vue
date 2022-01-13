<template>
  <div>
    <h1 v-pre>
      去除编译 {{title}}
    </h1>
    <h1>
      正常编译 {{ title }}
    </h1>
  </div>
</template>

<script>
export default {
  name: 'Pre',
  data() {
    return {
      title: '标题'
    };
  }
};
</script>

<style lang="scss" scoped>
</style>
