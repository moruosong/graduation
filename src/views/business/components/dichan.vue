<template>
  <div>
    <div v-if="isShow">
      <el-row :gutter="5" style="margin: 10px 0;">
        <el-col :span="12">
          <div @mouseover="handleMouseOver('1')" @mouseleave="handleMouseLeave('1')">
            <el-image
              :src="project1"
              style="width:100%; height: 100%"
              fit="fill"
              @click="handleShow(require('@/assets/business/project1-1.jpg'))"
            />
          </div>
        </el-col>
        <el-col :span="12">
          <div @mouseover="handleMouseOver('2')" @mouseleave="handleMouseLeave('2')">
            <el-image
              :src="project2"
              style="width:100%; height: 100%"
              fit="fill"
              @click="handleShow(require('@/assets/business/project2-1.jpg'))"
            />
          </div>
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
    },
    handleMouseOver(index) {
      if (index === '1') {
        this.project1 = require('@/assets/business/project1-2.jpg')
      } else {
        this.project2 = require('@/assets/business/project2-2.jpg')
      }
    },
    handleMouseLeave(index) {
      if (index === '1') {
        this.project1 = require('@/assets/business/project1.jpg')
      } else {
        this.project2 = require('@/assets/business/project2.jpg')
      }
    }
  }
}
</script>
