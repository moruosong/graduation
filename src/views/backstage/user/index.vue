<template>
  <el-card style="height: 100%; width: 100%">
    <div slot="header" class="card-hrader">
      <span>用户管理</span>
      <el-button type="primary" size="small">添加用户</el-button>
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
            <el-button type="danger" size="small" @click="handleStatusChange(scope.row.username, '1')">禁用</el-button>
            <el-button type="success" size="small" @click="handleStatusChange(scope.row.username, '0')">启用</el-button>
          </div>
          <div v-else>
            <span>超级管理员不可修改</span>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>
<script>
export default {
  name: 'User',
  data() {
    return {
      userList: []
    }
  },
  mounted() {
    this.$http({
      method: 'post',
      url: '/user/pageList'
    }).then(res => {
      console.log(res.data.object.list)
      this.userList = res.data.object.list
    })
  },
  methods: {
    handleStatusChange(username, status) {
      console.log(username, status)
      this.$http({
        method: 'post',
        url: '/user/switchStatus',
        data: { username, status }
      }).then(res => {
        console.log(res)
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
