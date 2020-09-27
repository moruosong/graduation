<template>
  <div>
    <el-image
      v-for="(item, index) in picList"
      :key="index"
      :src="item"
      style="width: 80%; height: 100%"
      fit="cover"
    />
  </div>
</template>

<script>
export default {
  name: 'Survey',
  data() {
    return {
      picList: [
        require('@/assets/img/introduce.jpg')
      ]
    }
  }
}
</script>
