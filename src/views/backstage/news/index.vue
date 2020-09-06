<template>
  <el-card style="height: 100%; width: 100%">
    <div slot="header" class="card-hrader">
      <span>新闻管理</span>
      <el-button type="primary" size="small" @click="dlg = true">添加新闻</el-button>
    </div>
    <el-table :data="newsList" style="width: 100%">
      <el-table-column
        prop="title"
        label="标题"
        width="100"
      />
      <el-table-column
        :show-overflow-tooltip="true"
        prop="content"
        label="内容"
      />
      <el-table-column
        align="center"
        label="操作"
        width="200"
      />
    </el-table>
    <el-dialog
      title="添加新闻"
      :visible.sync="dlg"
      width="60%"
    >
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="标题">
          <el-input v-model="form.title" />
        </el-form-item>
        <el-form-item label="内容">
          <el-input v-model="form.content" type="textarea" :rows="10" />
        </el-form-item>
        <el-form-item label="图片">
          <el-upload
            class="upload-demo"
            :limit="5"
            :headers="{ 'Content-Type': 'application/json' }"
            action="http://localhost:8888/api/news/uploadPic"
            :file-list="form.imageList"
            :before-upload="beforeUpload"
            :on-success="handleSuccess"
            list-type="picture"
          >
            <el-button size="small" type="primary">点击上传</el-button>
          </el-upload>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dlg = false">取 消</el-button>
        <el-button type="primary" @click="handelSubmit">提 交</el-button>
      </span>
    </el-dialog>
  </el-card>
</template>

<script>
export default {
  name: 'News',
  data() {
    return {
      newsList: [],
      dlg: false,
      form: {
        title: '',
        content: '',
        imageList: [],
        isAdd: 1
      }
    }
  },
  mounted() {
    this.$http({
      method: 'post',
      url: '/news/getAllNews',
      headers: { 'Content-Type': 'application/json' }
    }).then(res => {
      console.log(res)
      this.page = res.data.object
      this.newsList = res.data.object.list
    })
  },
  methods: {
    handelSubmit() {
      this.$http({
        method: 'post',
        url: '/news/toDoNews',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        data: this.form
      }).then(res => {
        console.log(res)
        this.dlg = false
        if (res.data.success) {
          this.$message({
            message: res.data.msg,
            type: 'success'
          })
        } else {
          this.$message({
            message: res.data.msg,
            type: 'error'
          })
        }
      })
    },
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
    }
  }
}
</script>
