<template>
  <div>
    <div v-if="isShow">
      <el-row style="margin: 10px 0">
        <el-col :span="12">
          <el-card shadow="hover">
            <el-image
              :src="project1"
              style="width:100%; height: 100%"
              fit="cover"
              @click="handleShow(require('@/assets/business/project1-1.jpg'))"
            />
          </el-card>
        </el-col>
        <el-col :span="12">
          <el-card shadow="hover">
            <el-image
              :src="project2"
              style="width:100%; height: 100%"
              fit="cover"
              @click="handleShow(require('@/assets/business/project2-1.jpg'))"
            />
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div v-else>
      <el-image
        :src="showImage"
        style="width:100%; height: 100%;"
        fit="cover"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dichan',
  data() {
    return {
      isShow: true,
      showImage: '',
      project1: require('@/assets/business/project1.jpg'),
      project2: require('@/assets/business/project2.jpg')
    }
  },
  methods: {
    handleShow(imagePath) {
      this.isShow = false
      this.$emit('show')
      this.showImage = imagePath
    }
  }
}
</script>
