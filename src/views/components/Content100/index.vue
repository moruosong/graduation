<template>
  <div class="context-100" :style="style">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Content100',
  data() {
    return {
      style: {
        height: '100%',
        padding: '20px',
        width: '100%'
      }
    }
  },
  watch: {
    '$store.state.settings.viewHeight': function() {
      this.calcHeight()
    }
  },
  mounted() {
    this.calcHeight()
  },
  methods: {
    calcHeight() {
      this.style.height = this.$store.getters.contentHeight + 'px'
    }
  }
}
</script>

<style lang="less">
.context-100 {
  >.el-row {
    height: 100%;
    >.el-col {
      height: 100%;
    }
  }
  .root-card {
    height: 100%;
    >.el-card__body {
      height: 100%;
      overflow: auto;
    }
  }
  .root-card-h {
    height: 100%;
    >.el-card__body {
      height: ~"calc(100% - 55px)";
      overflow: auto;
    }
  }
}
</style>
