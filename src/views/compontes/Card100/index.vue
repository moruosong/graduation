<template>
  <el-card :class="[$slots.header ? 'root-card-h' : 'root-card', 'card-100']">
    <template v-if="$slots.header" slot="header" class="crad100-header">
      <slot name="header" />
    </template>
    <div :class="['card100-body-box', $slots.footer ? 'card100-body-with-footer': '']">
      <div class="card100-body" :style="bodyStyle">
        <slot />
      </div>
    </div>
    <div v-if="$slots.footer" class="card100-footer">
      <slot name="footer" />
    </div>
  </el-card>
</template>

<script>
// 配合 Content100 组件使用
export default {
  name: 'Card100',
  props: {
    bodyMargin: {
      type: Number,
      default: 16
    }
  },
  data() {
    return {
      bodyStyle: {
        margin: '16px',
        height: 'calc(100% - 32px)'
      }
    }
  },
  watch: {
    bodyMargin: {
      immediate: true,
      handler: function(val) {
        this.bodyStyle = {
          margin: val + 'px',
          height: 'calc(100% - ' + (val * 2) + 'px)'
        }
      }
    }
  }
}
</script>

<style lang="less">
.card-100 {
  .card100-body-with-footer {
    height: ~"calc(100% - 55px)" !important;
    /*margin-bottom: 20px;*/
  }
  >.el-card__body {
    padding: 0;
    .card100-body-box {
      height: 100%;
      width: 100%;
      overflow: hidden;  // 凌晨
      .card100-body {
        height: ~"calc(100% - 32px)";
        overflow: auto;
        background: white;
        // margin: 16px;
        // margin: 20px 0 20px 20px;
        // padding-right: 20px;
      }
    }
  }
  // .card100-header {
  //   display: flex;
  //   flex-direction: row;
  //   justify-content: space-between;
  //   align-items: center;
  //   margin: -7px 0 -7px 0;
  //   >.btn {
  //     padding: 8px;
  //   }
  // }
  .card100-footer {
    border-top: solid 1px #e6ebf5;
    height: 55px;
    margin: 0;
    padding: 18px 20px 18px 20px;
  }
}
</style>
