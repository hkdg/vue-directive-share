<template>
  <h2>
    {{ title }}
  </h2>
</template>

<script>
export default {
  name: 'VOnce',
  props: {
    title: {
      type: Number,
      default: 1
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
