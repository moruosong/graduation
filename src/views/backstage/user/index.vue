<template>
  <el-card style="height: 100%; width: 100%">
    <div slot="header" class="card-hrader">
      <span>用户管理</span>
      <div style="float: right; width: 280px">
        <el-input v-model="username" size="mini" placeholder="请输入用户名" style="width: 200px" />
        <el-button type="primary" size="mini" style="margin-left: 10px" @click="search(username)">搜索</el-button>
      </div>
      <el-button type="primary" size="mini" @click="dlg = true">添加用户</el-button>
    </div>
    <el-table :data="userList" style="width: 100%">
      <el-table-column
        prop="nickname"
        label="昵称"
        width="100"
      />
      <el-table-column
        prop="username"
        label="用户名"
      />
      <el-table-column
        prop="roleTxt"
        align="center"
        label="权限"
        width="100"
      />
      <el-table-column
        align="center"
        label="操作"
        width="200"
      >
        <template scope="scope">
          <div v-if="scope.row.role !== 0">
            <el-button v-if="scope.row.status === '0'" type="danger" size="mini" @click="handleStatusChange(scope.row.username, '1')">禁用</el-button>
            <el-button v-if="scope.row.status === '1'" type="success" size="mini" @click="handleStatusChange(scope.row.username, '0')">启用</el-button>
            <el-button size="mini" type="danger" @click="handleDel(scope.row.username)">删除</el-button>
          </div>
          <div v-else>
            <span>不可修改</span>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      layout="prev, pager, next"
      :page-count="page.pages"
      :current-page="page.pageNum"
      :hide-on-single-page="true"
    />
    <el-dialog
      title="添加用户"
      :visible.sync="dlg"
      width="30%"
    >
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="form.username" />
        </el-form-item>
        <el-form-item label="昵称">
          <el-input v-model="form.nickname" auto-complete="new-password" />
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password" show-password auto-complete="new-password" />
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dlg = false">取 消</el-button>
        <el-button type="primary" @click="handleAddUser">确 定</el-button>
      </span>
    </el-dialog>
  </el-card>
</template>
<script>
export default {
  name: 'User',
  data() {
    return {
      userList: [],
      dlg: false,
      page: {},
      username: '',
      form: {
        username: '',
        nickname: '',
        password: ''
      }
    }
  },
  mounted() {
    this.$http({
      method: 'post',
      url: '/user/pageList',
      headers: { 'Content-Type': 'application/json' }
    }).then(res => {
      console.log(res)
      this.page = res.data.object
      this.userList = res.data.object.list
    })
  },
  methods: {
    search(username) {
      this.$http({
        method: 'post',
        url: '/user/pageList',
        headers: { 'Content-Type': 'application/json' },
        data: { username: username }
      }).then(res => {
        this.page = res.data.object
        this.userList = res.data.object.list
      })
    },
    handleDel(username) {
      this.$http({
        method: 'post',
        url: '/user/deleteUser',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        data: { username: username }
      }).then(res => {
        if (res.data.success) {
          let index = 0
          this.userList.forEach((item, i) => {
            if (item.username === username) {
              index = i
            }
          })
          this.userList.splice(index, 1)
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
    handleAddUser() {
      this.$http({
        method: 'post',
        url: '/user/addUser',
        data: this.form,
        headers: { 'Content-Type': 'application/json' }
      }).then(res => {
        if (res.data.success) {
          const newUser = { nickname: this.form.nickname, username: this.form.username, status: '0', role: 1, roleTxt: '管理员' }
          this.userList.push(newUser)
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
    },
    handleStatusChange(username, status) {
      this.$http({
        method: 'post',
        url: '/user/switchStatus',
        data: { username, status },
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      }).then(res => {
        if (res.data.success) {
          this.userList.forEach(item => {
            if (item.username === username) {
              item.status = status
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

<style lang="less" scoped>
.card-hrader{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: -6px 0 -5px 0;
  }
</style>
