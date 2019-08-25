<template>
  <div>
    <button @click="pop">Clicked ok</button>
    <pop v-if="showpop" :popParent="this" :confirmWay="confirmWay" :title="'hdsfhljsadf'">
      对话框内容
      对话框内容
      对话框内容
    </pop>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showpop: false
    };
  },
  methods: {
    pop() {
      this.showpop = true;
    },
    confirmWay(){
        console.log("提交信息");
    }
  }
};
</script>

<style lang="scss" scoped>
</style>