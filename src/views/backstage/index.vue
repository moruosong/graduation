<template>
  <el-container class="cont100">
    <el-header>
      <el-image :src="logourl" class="logo" fit="contain" />
      <!-- <el-button icon="el-icon-user" type="text"/> -->
      <el-dropdown trigger="click" class="myInfo">
        <el-button icon="el-icon-user-solid" class="el-icon--right" circle />
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item><div @click="toMyInfo">我的信息</div></el-dropdown-item>
          <el-dropdown-item><div @click="logout">退出登录</div></el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          :router="true"
        >
          <el-menu-item index="/user">
            <i class="el-icon-user-solid" />
            <span slot="title">用户管理</span>
          </el-menu-item>
          <el-menu-item index="/image">
            <i class="el-icon-user-solid" />
            <span slot="title">图片管理</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'BackStage',
  data() {
    return {
      logourl: require('@/assets/img/logo.png')
    }
  },
  methods: {
    logout() {
      window.sessionStorage.clear()
      this.$router.push('/login')
    },
    toMyInfo() {
      // console.log(info)
      this.$router.push('/myInfo')
    }
  }
}
</script>

<style lang="less" scoped>
  .el-header {
    background-color: #FFFFFF;
    display: flex;
    justify-content: space-between;
    padding: 0 0 0 0;
  }
  .el-aside {
    background-color: #545c64;
    margin: 0 0 0 0;
    padding: 0 0 0 0;
  }
  .el-main {
    background-color: #F2F6FC;
  }
  .cont100 {
    height: 100%
  }
  .logo {
    width: 200px;
    height: 100%;
    padding: 0 0 14px 0;
  }
  .myInfo {
    padding: 10px 10px 0 0;
  }
</style>
