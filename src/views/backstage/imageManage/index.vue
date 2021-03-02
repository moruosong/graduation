<template>
  <el-card style="height: 100%; width: 100%">
    <div slot="header" class="card-hrader">
      <span>社团管理</span>
      <div style="float: right; width: 280px">
        <el-input v-model="commName" size="mini" placeholder="请输入社团名称" style="width: 200px" />
        <el-button type="primary" size="mini" style="margin-left: 10px" @click="getList(commName)">搜索</el-button>
      </div>
      <el-button type="primary" size="mini" title="修改" @click="toAdd">添加社团</el-button>
    </div>
    <el-table :data="commList" style="width: 100%">
      <el-table-column
        prop="commName"
        label="社团名称"
        width="180"
      />
      <el-table-column
        prop="commCreator"
        label="创建人"
        width="100"
      />
      <el-table-column
        prop="commNumber"
        label="学号"
        width="180"
      />
      <el-table-column
        prop="createTime"
        label="创建时间"
      />
      <el-table-column
        align="center"
        label="状态"
        width="100"
      >
        <template scope="scope">
          <el-button v-if="scope.row.status === 0" type="danger" size="mini" @click="handleDelate(scope.row.id)">注销</el-button>
          <div v-else>已注销</div>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        label="操作"
        width="200"
      >
        <template scope="scope">
          <el-button v-if="scope.row.status === 0" type="text" size="mini" icon="el-icon-edit" @click="toEdit(scope.row)" />
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
      :title="title"
      :visible.sync="dlg"
      width="30%"
    >
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="社团名称">
          <el-input v-model="form.commName" />
        </el-form-item>
        <el-form-item label="创建人">
          <el-input v-model="form.commCreator" auto-complete="new-password" />
        </el-form-item>
        <el-form-item label="学号">
          <el-input v-model="form.commNumber" auto-complete="new-password" />
        </el-form-item>
        <el-form-item label="创建时间">
          <el-date-picker
            v-model="form.createTime"
            type="date"
            value-format="yyyy-MM-dd"
            placeholder="选择日期"
            style="width: 100%"
          />
        </el-form-item>
        <el-form-item label="社团介绍">
          <el-input v-model="form.commDesc" type="textarea" auto-complete="new-password" />
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dlg = false">取 消</el-button>
        <el-button type="primary" @click="handleAdd">确 定</el-button>
      </span>
    </el-dialog>
  </el-card>
</template>

<script>
export default {
  name: 'ImageManage',
  data() {
    return {
      rotation: [],
      commList: [],
      dlg: false,
      commName: '',
      title: '添加社团',
      form: {
        commName: '',
        commCreator: '',
        commNumber: '',
        commDesc: '',
        createTime: ''
      },
      isEdit: false
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    toAdd() {
      this.dlg = true
      this.title = '添加社团'
      this.form = {
        commName: '',
        commCreator: '',
        commNumber: '',
        commDesc: '',
        createTime: ''
      }
      this.isEdit = false
    },
    toEdit(row) {
      this.dlg = true
      this.title = '修改社团'
      this.form = {
        id: row.id,
        commName: row.commName,
        commCreator: row.commCreator,
        commNumber: row.commNumber,
        commDesc: row.commDesc,
        createTime: row.createTime
      }
      this.isEdit = true
    },
    getList(commName) {
      this.$http({
        method: 'post',
        url: '/community/getAllList',
        data: { commName: commName || '' },
        headers: { 'Content-Type': 'application/json' }
      }).then(res => {
        this.commList = res.data.object
      })
    },
    handleAdd() {
      if (!this.isEdit) {
        this.$http({
          method: 'post',
          url: '/community/addCommunity',
          data: this.form,
          headers: { 'Content-Type': 'application/json' }
        }).then(res => {
          if (res.data.success) {
            this.getList()
            this.dlg = false
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
      } else {
        // console.log('修改')
        this.$http({
          method: 'post',
          url: '/community/updateCommunity',
          data: this.form,
          headers: { 'Content-Type': 'application/json' }
        }).then(res => {
          if (res.data.success) {
            this.getList()
            this.dlg = false
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
    },
    handleDelate(id) {
      this.$http({
        method: 'post',
        url: '/community/switchStatus',
        data: { id: id, status: 1 },
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      }).then(res => {
        if (res.data.success) {
          this.getList()
          this.dlg = false
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

<style lang="less" scope>
.card-hrader{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: -6px 0 -5px 0;
  }
</style>
