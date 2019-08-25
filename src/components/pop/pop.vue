<template>
  <div class="pop">
    <div class="vv-pop-mask" style="z-index: 1020;"></div>
    <div class="vv-pop-wrap" style="z-index: 1020;">
      <div class="vv-pop" ref="vvPop" style="width: 520px;" :style="popcenter">
        <div class="vv-pop-content">
          <div class="vv-pop-header">
            <div class="vv-pop-header-title">{{title}}</div>
            <a class="vv-pop-close" @click="base">
              <icon-font type="shanchu" size="16"></icon-font>
            </a>
          </div>
          <div class="vv-pop-body">
            <slot></slot>
          </div>
          <div class="vv-pop-footer">
            <div class="button-group">
              <vv-button @click="base()" type="primary" size="small">确定</vv-button> 
              <vv-button @click="base()" size="small">取消</vv-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "pop",
  props: {
    popParent:{
      type: Object
    },
    confirmWay:Function,
    closeWay:Function,
    cancleway:Function,
    title:{
      type: String,
      default: "标题名称"
    }
  },
  data() {
    return {
      popcenter: {}
    };
  },
  mounted() {
    this.popcenter = {
      marginLeft: -this.$refs.vvPop.clientWidth / 2 + "px",
      marginTop: -this.$refs.vvPop.clientHeight / 2 + "px"
    };
  },
  methods: {
    // 接口隔离思想
    // 外观模式提供统一的接口
    baseHidden(type){
      let _fn = this[type] || function(){}
      _fn.call(this.popParent)
      this.popParent.showpop=false
    },
    base(type){
      this.baseHidden[type]
    },
    baseClose(){
      this.baseHidden('closeWay')
    },
    baseConfirm(){     
      this.baseHidden('confirmWay')
    },
    baseCancle(){
      this.baseHidden('cancleway')
    },
  }
};
</script>

<style lang="scss" scoped>
.vv-pop-footer button:nth-child(2) {
    margin-left: 10px;
}
.vv-pop-mask {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(55, 55, 55, 0.6);
  height: 100%;
  z-index: 1000;
}
.vv-pop-wrap {
  position: fixed;
  overflow: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  -webkit-overflow-scrolling: touch;
  outline: 0;
  .vv-pop {
    width: auto;
    position: relative;
    top: 50%;
    left: 50%;
    outline: 0;
    .vv-pop-content {
      position: relative;
      background-color: #fff;
      border: 0;
      border-radius: 6px;
      background-clip: padding-box;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      .vv-pop-header {
        position: relative;
        padding: 15px;
        padding-bottom: 10px;
        .vv-pop-header-title {
          padding-left: 0;
          margin-bottom: 0;
          font-size: 18px;
          line-height: 1;
          color: #303133;
        }
        .vv-pop-close {
          position: absolute;
          top: 15px;
          right: 15px;
          padding: 0;
          border: none;
          outline: none;
          background: transparent;
          font-size: 16px;
          cursor: pointer;
        }
      }
      .vv-pop-body {
        position: relative;
        padding: 10px 15px;
        color: #606266;
        font-size: 14px;
      }
      .vv-pop-footer {
        padding: 5px 15px 5px;
        text-align: right;
      }
    }
  }
}
</style>