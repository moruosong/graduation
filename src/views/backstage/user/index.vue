<template>
  <el-card style="height: 100%; width: 100%">
    <div slot="header">
      <span>用户管理</span>
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
        width="100"
      />
      <el-table-column
        align="right"
        label="管理员"
      >
        <template scope="scope">
          <el-switch v-model="scope.row.role" @change="handleRoleChange" />
        </template>
      </el-table-column>
      <el-table-column
        label="操作"
        width="100"
      >
        <template scope="scope">
          <el-switch :value="scope.row.role === 1" />
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
      userList: [{
        nickname: 'admin',
        username: 'admin',
        role: 0
      }]
    }
  },
  methods: {
    handleRoleChange(stue) {
      console.log(stue)
    }
  }
}
</script>
