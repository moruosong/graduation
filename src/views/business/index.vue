<template>
  <div style="padding: 0 100px 0 100px">
    <el-image
      :src="pic1"
      style="width: 60%; height: 100%"
      fit="cover"
    />
    <el-row>
      <el-col :span="4" :xs="8" :md="8">
        <i><span style="color: rgb(254, 191, 44);font-size: 40px;"><b>A. 文旅</b></span></i>
        <div class="textcontent">
          <p>
            <span>
              中稹融创运用多种现代化金融手段，挖掘文旅产业潜力，扩大旅游业发展的广度和深度，集成全线产业链，建立导流体系，走品牌发展道路。
            </span>
          </p>
        </div>
      </el-col>
      <el-col :span="8" :xs="16" :md="16">
        <el-image
          :src="travel"
          style="width: 100%; height: 300px"
          fit="cover"
        />
      </el-col>
      <el-col :span="8" :xs="16" :md="16">
        <el-image
          :src="movies"
          style="width: 100%; height: 300px"
          fit="cover"
        />
      </el-col>
      <el-col :span="4" :xs="8" :md="8">
        <i><span style="color: rgb(252, 102, 35);font-size: 40px;"><b>B. 影视</b></span></i>
        <div class="textcontent">
          <p>
            <span>
              中稹融创依托中稹实业集团影视文化体系为核心运营平台，以“文化IP”为引擎，以文化运营中心、文化艺术中心和演艺中心为载体，以文化运营、产业投资为支持，借势知名文化IP，进行全产业链的拓展和整合，形成“IP资源＋文化运营中心+互联网+文化产业金融+文化产业投资+衍生品开发销售+文化品资本化”的全产业发展路径
            </span>
          </p>
        </div>
      </el-col>
    </el-row>
    <br><br>
    <el-row>
      <el-col :span="4" :xs="8" :md="8">
        <i><span style="color: rgb(30, 185, 206);font-size: 40px;"><b>C. 体育</b></span></i>
        <div class="textcontent">
          <p>
            <span>
              中稹融创聚合全球体育产业智库资源，打造“赛事IP+产业植入+旅游体验+产业投资”为核心的体育产业业务模块。以“中国特色体育产业IP”为引入原则，升级改造现有体育项目，增强全民参与，形成“旅游+体验”全新的文旅体特色小镇开发模式。
            </span>
          </p>
        </div>
      </el-col>
      <el-col :span="8" :xs="16" :md="16">
        <el-image
          :src="sports"
          style="width: 100%; height: 300px"
          fit="cover"
        />
      </el-col>
      <el-col :span="8" :xs="16" :md="16">
        <el-image
          :src="agriculture"
          style="width: 100%; height: 300px"
          fit="cover"
        />
      </el-col>
      <el-col :span="4" :xs="8" :md="8">
        <i><span style="color: rgb(40, 188, 150);font-size: 40px;"><b>D. 大农业</b></span></i>
        <div class="textcontent">
          <p>
            <span>
              乡村云平台是以服务县域乡村经济为中心，以大数据和资源整合为手段的一体两翼服务平台。
            </span>
          </p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Business',
  data() {
    return {
      pic1: require('@/assets/img/1591344943(1).jpg'),
      travel: require('@/assets/img/travel.jpg'),
      movies: require('@/assets/img/movies.jpg'),
      agriculture: require('@/assets/img/agriculture.jpg'),
      sports: require('@/assets/img/sports.jpg')
    }
  }
}
</script>

<style lang="less" scoped>
.textcontent {
  text-align: left;
  font-family: 方正毡笔黑简体; font-size: 14px;
  color: rgb(0, 0, 0);
}
</style>>
