<template>
  <el-container class="all">
    <el-aside v-if="isCollapse" class="hidden-md-and-up" style="padding: 0 0 0 0">
      <el-menu :router="true" style="width: 100%; height: 100%;" @select="gotoPage">
        <el-menu-item index="/Home" route="/home">首页</el-menu-item>
        <el-menu-item index="/aboutus" route="/aboutus">关于我们</el-menu-item>
        <el-menu-item index="/survey" route="/survey">集团概况</el-menu-item>
        <el-menu-item index="/business" route="/business">业务中心</el-menu-item>
        <el-menu-item index="/culture" route="/culture">企业文化</el-menu-item>
        <el-menu-item index="/shownews" route="/shownews">新闻动态</el-menu-item>
        <el-menu-item index="/ability" route="/ability">人才理念</el-menu-item>
        <el-menu-item index="/contact" route="/contact">联系我们</el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header class="hidden-sm-and-down">
        <el-row>
          <el-col :span="12">
            <el-menu mode="horizontal" :router="true" @select="gotoPage">
              <el-menu-item index="/Home" route="/home">首页</el-menu-item>
              <el-menu-item index="/aboutus" route="/aboutus">关于我们</el-menu-item>
              <el-menu-item index="/survey" route="/survey">集团概况</el-menu-item>
              <el-menu-item index="/business" route="/business">业务中心</el-menu-item>
              <el-menu-item index="/culture" route="/culture">企业文化</el-menu-item>
              <el-menu-item index="/shownews" route="/shownews">新闻动态</el-menu-item>
              <el-menu-item index="/ability" route="/ability">人才理念</el-menu-item>
              <el-menu-item index="/contact" route="/contact">联系我们</el-menu-item>
            </el-menu>
          </el-col>
          <el-col :span="12">
            <el-image :src="logourl" style="width: 100%; height: 70px" fit="contain" />
          </el-col>
        </el-row>
      </el-header>
      <el-header class="hidden-md-and-up">
        <el-row style="width: 100%; height: 100%">
          <el-col :span="4">
            <el-button v-if="isCollapse" icon="el-icon-s-fold" @click="() => isCollapse = !isCollapse" />
            <el-button v-else icon="el-icon-s-unfold" @click="() => isCollapse = !isCollapse" />
          </el-col>
          <el-col :span="20">
            <el-image :src="logourl" style="width: 100%; height: 40px" fit="contain" />
          </el-col>
        </el-row>
      </el-header>
      <el-main style="width: 100%; height: 100%">
        <el-carousel v-show="isTrue" height="500px">
          <el-carousel-item v-for="(item, index) in rotation" :key="index" style="background-color: #d3dce6;">
            <el-image :src="item" style="width: 100%; height: 100%" fit="cover" />
          </el-carousel-item>
        </el-carousel>
        <el-divider v-if="isTrue" />
        <el-image
          v-if="!isTrue"
          style="width: 100%; height: 100%"
          :src="pic"
          fit="fill"
        />
        <router-view />
      </el-main>
      <el-footer>
        <el-link href="#/login" target="_blank">后台登录</el-link>
      </el-footer>
    </el-container>
  </el-container>
</template>

<script>
import 'element-ui/lib/theme-chalk/display.css'

export default {
  name: 'Index',
  data() {
    return {
      activeName: '/Home',
      isCollapse: false,
      logourl: require('../assets/img/newlogo.jpg'),
      rotation: [
        require('../assets/img/rotation1.jpg'),
        require('../assets/img/rotation2.jpg'),
        require('../assets/img/rotation3.jpg')
      ],
      isTrue: true,
      pic: require('@/assets/img/recruit.jpg')
    }
  },
  mounted() {
    if (this.$router.history.current.path === '/ability' || this.$router.history.current.path === '/joinus') {
      this.isTrue = false
    } else {
      this.isTrue = true
    }
  },
  methods: {
    gotoPage(index, indexPath) {
      console.log(index, indexPath)
      if (index === '/ability') {
        this.isTrue = false
      } else {
        this.isTrue = true
      }
    }
  }
}
</script>
<style lang="less">
  .menuDiv {
    margin: 0, 100px;
    height: 100px
  }
  .all {
    width: 100%;
    height: 100%
  }
  el-menu-item {
    height: 100%;
    padding-top: 30px
  }
</style>
