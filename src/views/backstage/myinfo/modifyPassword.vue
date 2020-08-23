<template>
  <el-form ref="form" :model="form" :rules="rules" label-width="80px">
    <el-form-item label="旧密码" prop="oldPassword">
      <el-input v-model="form.oldPassword" show-password auto-complete="new-password" />
    </el-form-item>
    <el-form-item label="新密码" prop="newPassword">
      <el-input v-model="form.newPassword" show-password auto-complete="new-password" />
    </el-form-item>
    <el-form-item label="确认密码" prop="relPassword">
      <el-input v-model="form.relPassword" show-password auto-complete="new-password" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="modifyPassword">修改</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'ModifyPassword',
  data() {
    const checkRelPassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.form.newPassword) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      form: {
        oldPassword: '',
        newPassword: '',
        relPassword: ''
      },
      rules: {
        relPassword: [
          { validator: checkRelPassword, trigger: 'blur' }
        ],
        oldPassword: [
          { required: true, message: '请输入旧密码', trigger: 'blur' }
        ],
        newPassword: [
          { required: true, message: '请输入新密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    modifyPassword() {
      this.$refs.form.validate(valid => {
        const args = { username: window.sessionStorage.getItem('username'), newpwd: this.form.newPassword }
        this.$http({
          method: 'post',
          url: '/user/updatePwd',
          data: args
        }).then(res => {
          console.log(res)
          if (res.data.success) {
            this.$message({
              message: res.data.msg,
              type: 'success'
            })
            this.$router.push('/login')
          } else {
            this.$message({
              message: res.data.msg,
              type: 'error'
            })
          }
        })
      })
    }
  }
}
</script>
