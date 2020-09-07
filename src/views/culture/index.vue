<template>
  <div>
    <el-image
      v-for="(item, index) in picList"
      :key="index"
      :src="item"
      style="width: 60%; height: 100%"
      fit="cover"
    />
  </div>
</template>

<script>
export default {
  name: 'Culture',
  data() {
    return {
      picList: [
        require('@/assets/img/1591342909(1).jpg'),
        require('@/assets/img/1591343114(1).jpg')
      ]
    }
  }
}
</script>
