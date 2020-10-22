<template>
  <div>
    <div style="font-size:24px">热招职位</div><br>
    <div style="line-height:2">
      我们想要与您共同发展！    公司地址：四川省成都市高新区天府四街158号易上OCG国际中心C座6层    邮箱: zzrc_group@qq.com
    </div><br>
    <el-image
      :src="img"
      style="width: 60%;height: 60%;"
      fit="cover"
    />
  </div>
</template>

<script>
export default {
  name: 'Joinus',
  data() {
    return {
      img: require('@/assets/joinus/joinus.jpg')
    }
  }
}
</script>>
