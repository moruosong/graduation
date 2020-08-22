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
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location" />
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu" />
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document" />
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting" />
            <span slot="title">导航四</span>
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
