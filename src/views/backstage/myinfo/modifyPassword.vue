<template>
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="旧密码">
      <el-input v-model="form.oldPassword" show-password auto-complete="new-password" />
    </el-form-item>
    <el-form-item label="新密码">
      <el-input v-model="form.newPassword" show-password auto-complete="new-password" />
    </el-form-item>
    <el-form-item label="确认密码">
      <el-input v-model="form.relPassword" show-password auto-complete="new-password" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary">修改</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'ModifyPassword',
  data() {
    return {
      form: {
        newPassword: '',
        oldPassword: '',
        relPassword: ''
      }
    }
  }
}
</script>
