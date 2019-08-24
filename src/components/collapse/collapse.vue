<template>
  <div class="wrap">
    <slot></slot>
  </div>
</template>

<script>
export default {
  methods: {
    cut(childId) {
      this.$children.forEach(child => {
        if (child._uid !== childId) {
          child.show = false;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>