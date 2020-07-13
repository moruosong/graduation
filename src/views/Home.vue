<template>
  <el-container>
    <el-aside v-if="isCollapse" class="hidden-sm-and-up">
      <el-menu>
        <el-menu-item index="1">首页</el-menu-item>
        <el-menu-item index="2">关于我们</el-menu-item>
        <el-menu-item index="3">集团概况</el-menu-item>
        <el-menu-item index="4">业务中心</el-menu-item>
        <el-menu-item index="5">企业文化</el-menu-item>
        <el-menu-item index="6">新闻动态</el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header class="hidden-xs-only">
        <el-row>
          <el-col :span="12">
            <el-menu mode="horizontal">
              <el-menu-item index="1">首页</el-menu-item>
              <el-menu-item index="2">关于我们</el-menu-item>
              <el-menu-item index="3">集团概况</el-menu-item>
              <el-menu-item index="4">业务中心</el-menu-item>
              <el-menu-item index="5">企业文化</el-menu-item>
              <el-menu-item index="6">新闻动态</el-menu-item>
            </el-menu>
          </el-col>
          <el-col :span="12">
            <el-image :src="logourl" style="width: 100%; height: 70px" fit="contain" />
          </el-col>
        </el-row>
      </el-header>
      <el-header class="hidden-sm-and-up">
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
      <el-main>
        <el-carousel height="500px">
          <el-carousel-item v-for="(item, index) in rotation" :key="index" style="background-color: #d3dce6;">
            <el-image :src="item" style="width: 100%; height: 100%" fit="cover" />
          </el-carousel-item>
        </el-carousel>
        <el-divider />
        <el-row>
          <el-col :span="8" :xs="24">
            <el-carousel :interval="4000" type="card" height="200px" style="width: 500px;">
              <el-carousel-item v-for="(item, index) in rotation2" :key="index">
                <el-image :src="item" style="width: 100%; height: 100%" fit="scale-down" />
              </el-carousel-item>
            </el-carousel>
          </el-col>
          <el-col :span="16" :xs="24">
            <el-tabs v-model="activeName" type="card">
              <el-tab-pane label="集团动态" name="first">集团动态</el-tab-pane>
              <el-tab-pane label="行业新闻" name="second">行业新闻</el-tab-pane>
              <el-tab-pane label="媒体聚焦" name="third">媒体聚焦</el-tab-pane>
              <el-tab-pane label="集团公告" name="fourth">集团公告</el-tab-pane>
            </el-tabs>
          </el-col>
        </el-row>
        <el-divider />
      </el-main>
      <el-footer>foot</el-footer>
    </el-container>
  </el-container>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import 'element-ui/lib/theme-chalk/display.css'

export default {
  name: 'Home',
  data() {
    return {
      activeName: 'first',
      isCollapse: false,
      logourl: require('../assets/img/logo1.jpg'),
      rotation: [
        require('../assets/img/rotation1.jpg'),
        require('../assets/img/rotation2.jpg'),
        require('../assets/img/rotation3.jpg')
      ],
      rotation2: [
        require('../assets/img/rotation2-1.jpg'),
        require('../assets/img/rotation2-2.jpg'),
        require('../assets/img/rotation2-3.jpg')
      ]
    }
  }
  // components: {
  //   HelloWorld
  // }
}
</script>
<style lang="less">
  .menuDiv {
    margin: 0, 100px;
    height: 100px
  }
  el-menu-item {
    height: 100%;
    padding-top: 30px
  }
</style>
