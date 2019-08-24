<template>
  <div>
    <div class="title" @click="change">{{title}}</div>
    <div class="content" v-show="show">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title"],
  data() {
    return {
      show: false
    };
  },
  methods: {
    change() {
      this.$parent.cut(this._uid);
      this.show = !this.show;
    }
  }
};
</script>

<style lang="scss" scoped>
.title {
  background: #ccc;
  line-height: 50px;
  padding-left: 20px;
}
.content {
  padding: 20px;
  border: 1px solid #ccc;
}
</style>