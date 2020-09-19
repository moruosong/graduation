<template>
  <el-card style="height: 100%; width: 100%">
    <div slot="header" class="card-hrader">
      <span>招聘信息</span>
      <el-button type="primary" size="small" @click="dlg = true">发布招聘</el-button>
    </div>
    <el-table :data="recruitList" style="width: 100%">
      <el-table-column
        prop="title"
        label="职位"
        width="100"
      />
      <el-table-column
        prop="createTime"
        label="发布时间"
        width="200"
      />
      <el-table-column
        :show-overflow-tooltip="true"
        prop="content"
        label="要求"
      />
      <el-table-column
        align="center"
        label="操作"
        width="200"
      >
        <template scope="scope">
          <el-button type="primary" size="small" @click="handleUpdate(scope.row.id)">修改</el-button>
          <el-button type="danger" size="small" @click="handleDel(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
      :title="dlgtitle+'招聘信息'"
      :visible.sync="dlg"
      width="40%"
      @closed="handelDlgClose"
    >
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="职位">
          <el-input v-model="form.title" />
        </el-form-item>
        <el-form-item label="要求">
          <el-input v-model="form.content" type="textarea" :rows="10" />
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
  name: 'Recruit',
  data() {
    return {
      dlgtitle: '发布',
      recruitList: [],
      form: {
        title: '',
        content: ''
      },
      isAdd: '0',
      dlg: false
    }
  },
  mounted() {
    this.$http({
      method: 'post',
      url: '/recruit/getAllRecruit',
      headers: { 'Content-Type': 'application/json' }
    }).then(res => {
      console.log(res.data.object.list)
      this.recruitList = res.data.object.list
    })
  },
  methods: {
    handleDel(id) {
      this.$http({
        method: 'post',
        url: '/recruit/deleteRecruit',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        data: { id: id + '', status: '1' }
      }).then(res => {
        if (res.data.success) {
          this.recruitList.forEach((item, index) => {
            if (item.id === id) {
              this.recruitList.splice(index, 1)
              return
            }
          })
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
    handleUpdate(id) {
      this.dlgtitle = '修改'
      this.$http({
        method: 'post',
        url: '/recruit/getRecruitById',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        data: { id: id }
      }).then(res => {
        console.log(res)
        if (res.data.success) {
          this.dlg = true
          this.form = res.data.object
          this.isAdd = '1'
        } else {
          this.$message({
            message: res.data.msg,
            type: 'error'
          })
        }
      })
    },
    // 对话框关闭
    handelDlgClose() {
      this.dlgtitle = '发布'
      this.form = {
        title: '',
        content: '',
        picList: []
      }
      this.isAdd = '0'
      this.fileList = []
    },
    handelSubmit() {
      if (this.isAdd === '0') {
        this.addRecruit()
      }
      if (this.isAdd === '1') {
        this.updateRecruit()
      }
    },
    addRecruit() {
      console.log(this.form)
      this.$http({
        method: 'post',
        url: '/recruit/addRecruit',
        headers: { 'Content-Type': 'application/json' },
        data: this.form
      }).then(res => {
        console.log(res)
        this.dlg = false
        if (res.data.success) {
          this.recruitList.splice(0, 0, res.data.object)
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
    updateRecruit() {
      console.log(this.form)
      this.$http({
        method: 'post',
        url: '/recruit/updateRecruit',
        headers: { 'Content-Type': 'application/json' },
        data: this.form
      }).then(res => {
        console.log(res)
        this.dlg = false
        if (res.data.success) {
          this.recruitList.forEach((item, index) => {
            if (item.id === res.data.object.id) {
              this.recruitList.splice(index, 1)
              this.recruitList.splice(0, 0, res.data.object)
              return
            }
          })
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
    }
  }
}
</script>
