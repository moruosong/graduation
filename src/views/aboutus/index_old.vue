<template>
  <div style="padding-left: 200px">
    <span style="float: left">公司简介</span><br>
    <el-divider />
    <div style="float: left; margin-right: 26px">
      <el-image
        style="width: 100%; height: 650px"
        :src="pic"
        fit="contain"
      />
    </div>
    <div>
      <div class="textcontent">
        <p>
          社团管理系统有限公司，中稹实业集团有限公司（AA+主体评级）全资控股公司，创建于2019年，总部位于成都，注册资本12000万元。集团致力于文旅康养产业、影视文化产业、资产并购、地产开发等产业的投资管理与运营业务，投资项目分布于四川、重庆、贵州、京津冀、海南、香港等地。
        </p>
        <p>
          社团管理系统有限公司，以“产业+金融”的模式，深耕医、食、住、行、游、购、娱、养、教、体、科、运领域，用幸福生态践行者的姿态，聚合全球先进技术、高品质产业资源、高流量企业资源，以“投行思维+产业思维”打通产业和资本的壁垒，展开产业投资，助力城市经济兴旺发展。
        </p>
      </div>
      <br>
      <div style="text-align: left;">
        <p>
          <span style="font-size:33px;font-family:方正毡笔黑简体;color:#A12025;text-shadow:auto;font-weight:bold">双总部产业运营中心</span>
        </p>
        <p>
          <span style="font-size:20px;font-family:方正毡笔黑简体;text-shadow:auto;font-weight:bold">以四川为总部产业中心聚合产业项目</span>
        </p>
        <p>
          <span style="font-size:20px;font-family:方正毡笔黑简体;text-shadow:auto;font-weight:bold">以京津为总部政治中心聚合智库资源</span>
        </p>
        <br>
        <p>
          <span style="font-size:33px;font-family:方正毡笔黑简体;color:#A12025;text-shadow:auto;font-weight:bold">三大核心区域业务板块</span>
        </p>
        <p>
          <span style="font-size:20px;font-family:方正毡笔黑简体;text-shadow:auto;font-weight:bold">以云贵川渝陕为核心区域产业布局</span>
        </p>
        <p>
          <span style="font-size:20px;font-family:方正毡笔黑简体;text-shadow:auto;font-weight:bold">以京津为核心区域产业布局</span>
        </p>
        <p>
          <span style="font-size:20px;font-family:方正毡笔黑简体;text-shadow:auto;font-weight:bold">以广东香港海南为核心区域产业布局</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AboutUs',
  data() {
    return {
      pic: require('@/assets/img/1591344687(1).jpg')
    }
  }
}
</script>

<style lang="less" scoped>
.textcontent {
  text-align: left;
  font-size:17px;
  font-family:方正毡笔黑简体;
  color:#4B4B4B;
}
</style>>
