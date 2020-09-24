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
        require('@/assets/img/culture01.jpg'),
        require('@/assets/img/culture02.jpg')
      ]
    }
  }
}
</script>
