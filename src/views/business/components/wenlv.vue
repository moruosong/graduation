<template>
  <div>
    <el-image
      :src="image"
      style="width:100%; height: 100%"
      fit="cover"
    />
  </div>
</template>

<script>
export default {
  name: 'Wenlv',
  data() {
    return {
      image: require('@/assets/business/99.jpg')
    }
  }
}
</script>
