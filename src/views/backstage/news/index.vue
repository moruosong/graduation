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
          <el-input v-model="form.title" type="textarea" :rows="10" />
        </el-form-item>
        <el-form-item label="图片">
          <el-button size="small" type="primary">点击上传</el-button>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dlg = false">取 消</el-button>
        <el-button type="primary" @click="dlg = false">提 交</el-button>
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
        imageList: []
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
  }
}
</script>
