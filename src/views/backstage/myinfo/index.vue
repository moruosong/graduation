<template>
  <el-row :gutter="20" style="height: 100%; width: 100%">
    <el-col :span="8" style="height: 100%">
      <el-card style="height: 100%; width: 100%">
        <div slot="header">
          <span>基本信息</span>
        </div>
        <div class="avator_box">
          <img :src="require('@/assets/img/newlogo.jpg')">
        </div>
        <div style="padding: 30px">
          <span>用户名：{{ username }}</span><br>
          <span>昵称：{{ nickname }}</span>
        </div>
        <div>
          <el-button style="width: 100%" :disabled="isModifyName" @click="modifyName">修改昵称</el-button><br>
          <el-button style="width: 100%" :disabled="isModifyPassword" @click="modifyPassword">修改密码</el-button>
        </div>
      </el-card>
    </el-col>
    <el-col :span="16" style="height: 100%">
      <el-card style="height: 100%; width: 100%">
        <modify-name v-if="isModifyName" @modifySuccess="modifySuccess" />
        <modify-password v-if="isModifyPassword" />
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import modifyName from './modifyName'
import modifyPassword from './modifyPassword'

export default {
  name: 'MyInfo',
  components: { modifyName, modifyPassword },
  data() {
    return {
      isModifyName: false,
      isModifyPassword: false,
      username: '',
      nickname: ''
    }
  },
  mounted() {
    this.username = window.sessionStorage.getItem('username')
    this.nickname = window.sessionStorage.getItem('nickname')
  },
  methods: {
    modifySuccess() {
      this.nickname = window.sessionStorage.getItem('nickname')
    },
    modifyName() {
      // this.$router.push('/modifyName')
      this.isModifyName = true
      this.isModifyPassword = false
    },
    modifyPassword() {
      // this.$router.push('/modifyPassword')
      this.isModifyName = false
      this.isModifyPassword = true
    }
  }
}
</script>

<style lang="less" scoped>
  .avator_box {
    height: 130px;
    width: 130px;
    border: 1px solid #eeeeee;
    border-radius: 50%;
    padding: 10px;
    margin: 0 0 0 130px;
    box-shadow: 0 0 10px #dddddd;
    // position: absolute;
    background-color: #ffffff;

    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #eeeeee;
    }
  }
</style>
