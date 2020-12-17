<template>
  <div class="type-item">
    <div v-if="isShow" style="margin: 0 10px; margin-bottom: 20px">
      <el-row>
        <el-col :span="8">
          <el-button type="danger" :plain="type !== '文旅康养'" style="width: 100%" @click="handleClick('文旅康养')">文旅康养</el-button>
        </el-col>
        <el-col :span="8" @click="handleClick('影视文化')">
          <el-button type="danger" :plain="type !== '影视文化'" style="width: 100%" @click="handleClick('影视文化')">影视文化</el-button>
        </el-col>
        <el-col :span="8" @click="handleClick('地产开发')">
          <el-button type="danger" :plain="type !== '地产开发'" style="width: 100%" @click="handleClick('地产开发')">地产开发</el-button>
        </el-col>
      </el-row>
    </div>
    <div v-else style="margin: 0 10px; margin-bottom: 20px; text-align: left">
      <el-button icon="el-icon-arrow-left" type="primary" @click="goBack">返回</el-button>
    </div>
    <wenlv v-if="type === '文旅康养'" />
    <yingshi v-if="type === '影视文化'" />
    <dichan v-if="type === '地产开发'" ref="dichan" @show="show" />
  </div>
</template>

<script>
import Dichan from './dichan.vue'
import wenlv from './wenlv.vue'
import Yingshi from './yingshi.vue'
export default {
  name: 'Invest',
  components: { wenlv, Yingshi, Dichan },
  data() {
    return {
      isShow: true,
      type: '文旅康养',
      project1: require('@/assets/business/project1.jpg'),
      project2: require('@/assets/business/project2.jpg')
    }
  },
  methods: {
    handleClick(type) {
      this.type = type
    },
    show() {
      this.isShow = false
    },
    goBack() {
      this.isShow = true
      this.$refs.dichan.isShow = true
    }
  }
}
</script>

<style lang="scss">
.type-item {
  .el-card__body:hover {
    background-color: red;
  }
}
</style>>
