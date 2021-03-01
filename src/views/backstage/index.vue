<template>
  <el-container class="cont100">
    <el-header>
      <el-image :src="logourl" class="logo" fit="contain" />
      <div style="margin-top: 18px; font-size: 18px">社团管理系统</div>
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
            <i class="el-icon-s-shop" />
            <span slot="title">社团管理</span>
          </el-menu-item>
          <el-menu-item index="/news">
            <i class="el-icon-s-order" />
            <span slot="title">活动管理</span>
          </el-menu-item>
          <el-menu-item index="/notices">
            <i class="el-icon-s-cooperation" />
            <span slot="title">公告管理</span>
          </el-menu-item>
          <el-menu-item index="/recruit">
            <i class="el-icon-s-order" />
            <span slot="title">招聘信息</span>
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
      logourl: require('@/assets/img/newlogo.jpg')
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
    width: 50px;
    height: 100%;
    padding: 0 0 14px 0;
  }
  .myInfo {
    padding: 10px 10px 0 0;
  }
</style>
