<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="12">
        <el-image
          style="width: 100%; height: 100%"
          :src="pic1"
          fit="cover"
        />
      </el-col>
      <el-col :span="12">
        <el-image
          style="width: 100%; height: 100%"
          :src="pic2"
          fit="cover"
        />
      </el-col>
    </el-row><br>
    <router-link v-show="isShow" to="/joinus" @click="handleClick">加入我们</router-link>
  </div>
</template>

<script>
export default {
  name: 'Ability',
  data() {
    return {
      isShow: true,
      pic1: require('@/assets/img/1600089212(1).jpg'),
      pic2: require('@/assets/img/1600089247(1).jpg')
    }
  },
  methods: {
    handleClick() {
      this.isShow = false
    }
  }
}
</script>>
