<template>
  <content100>
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
  </content100>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      activeName: 'first',
      rotation: [
        require('@/assets/img/rotation1.jpg'),
        require('@/assets/img/rotation2.jpg'),
        require('@/assets/img/rotation3.jpg')
      ],
      rotation2: [
        require('@/assets/img/rotation2-1.jpg'),
        require('@/assets/img/rotation2-2.jpg'),
        require('@/assets/img/rotation2-3.jpg')
      ]
    }
  }
}
</script>
