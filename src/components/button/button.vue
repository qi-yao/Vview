<template>
  <button 
    @click="handleClick"
    class="vv-button"
    :class="[
        type?`vv-button-${type}`:'',
        buttonSize?`vv-button-${buttonSize}`:''
    ]"
    >
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: "VvButton",
  props: {
    type: {
      type: String,
      default: "default"
    },
    size: String
  },
  computed: {
      buttonSize(){
          return this.size 
      }
  },
  methods: {
      handleClick(ev){
          this.$emit('click',ev)
      }
  },
};
</script>

<style lang="scss" scoped>
.vv-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  border-color: #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
}
.vv-button-primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
}
.vv-button-small {
    padding: 9px 15px;
    font-size: 12px;
    border-radius: 3px;
}
</style>