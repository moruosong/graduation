<template>
  <el-card style="height: 100%; width: 100%">
    <div slot="header" class="card-hrader">
      <span>轮播图管理</span>
      <el-upload
        class="upload-demo"
        :limit="5"
        :headers="{ 'Content-Type': 'application/json' }"
        action="http://localhost:8888/api/banner/uploadBanner"
        :before-upload="beforeUpload"
        :on-error="handleError"
        :on-success="handleSuccess"
        :on-exceed="onExceed"
        :on-preview="handlePreview"
        :file-list="fileList"
        list-type="picture"
      >
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload>
    </div>
    <el-table :data="fileList" style="width: 100%">
      <el-table-column
        align="center"
        label="缩略图"
        width="100"
      >
        <template scope="scope">
          <img
            style="width: 100px; height: 100px"
            :src="scope.row.paht"
            fit="fit"
          >
        </template>
      </el-table-column>
      <el-table-column
        prop="newName"
        label="名称"
        width="100"
      />
      <el-table-column
        prop="path"
        label="路径"
      />
      <el-table-column
        align="center"
        label="操作"
        width="200"
      />
    </el-table>
    <span>效果预览</span>
    <el-carousel height="500px">
      <el-carousel-item v-for="(item, index) in rotation" :key="index" style="background-color: #d3dce6;">
        <el-image :src="item" style="width: 100%; height: 100%" fit="cover" />
      </el-carousel-item>
    </el-carousel>
  </el-card>
</template>

<script>
export default {
  name: 'ImageManage',
  data() {
    return {
      rotation: [
        require('@/assets/img/rotation1.jpg'),
        require('@/assets/img/rotation2.jpg'),
        require('@/assets/img/rotation3.jpg')
      ],
      fileList: []
    }
  },
  mounted() {
    this.$http({
      method: 'post',
      url: '/banner/getAllBanner',
      headers: { 'Content-Type': 'application/json' }
    }).then(res => {
      console.log(res)
      this.fileList = res.data.object
      this.fileList.forEach(item => {
        item.path = require(item.path)
      })
    })
  },
  methods: {
    // 文件上传成功的钩子函数
    handleSuccess(res, file) {
      this.$message({
        type: 'info',
        message: '图片上传成功',
        duration: 6000
      })
      if (file.response.success) {
        this.editor.picture = file.response.message // 将返回的文件储存路径赋值picture字段
      }
    },
    // 删除文件之前的钩子函数
    // handleRemove(file, fileList) {
    //   this.$message({
    //     type: 'info',
    //     message: '已删除原有图片',
    //     duration: 6000
    //   })
    // },
    // 上传的文件个数超出设定时触发的函数
    onExceed(files, fileList) {
      this.$message({
        type: 'info',
        message: '最多只能上传5个图片',
        duration: 6000
      })
    },
    // 文件上传前的前的钩子函数
    // 参数是上传的文件，若返回false，或返回Primary且被reject，则停止上传
    beforeUpload(file) {
      console.log(file)
      const isJPG = file.type === 'image/jpeg'
      const isGIF = file.type === 'image/gif'
      const isPNG = file.type === 'image/png'
      const isBMP = file.type === 'image/bmp'
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isJPG && !isGIF && !isPNG && !isBMP) {
        this.$message.error('上传图片必须是JPG/GIF/PNG/BMP 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传图片大小不能超过 2MB!')
      }
      return (isJPG || isBMP || isGIF || isPNG) && isLt2M
    },
    // 上传失败
    handleError(err, file, fileList) {
      console.log(err, file, fileList)
    },
    handlePreview(file) {
      console.log(file)
    }
  }
}
</script>

<style lang="less">
.el-upload-list {
  display: none
}
.card-hrader{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: -6px 0 -5px 0;
  }
</style>
