<template>
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="昵称">
      <el-input v-model="form.nickname" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="modifyName">修改</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'ModifyName',
  data() {
    return {
      form: {
        nickname: '',
        username: ''
      }
    }
  },
  mounted() {
    this.form.username = window.sessionStorage.getItem('username')
    this.form.nickname = window.sessionStorage.getItem('nickname')
  },
  methods: {
    modifyName() {
      this.$http({
        method: 'post',
        url: '/user/updateNickName',
        data: this.form
      }).then(res => {
        console.log(res)
        if (res.data.success) {
          this.$message({
            message: res.data.msg,
            type: 'success'
          })
          window.sessionStorage.setItem('nickname', this.form.nickname)
          this.$emit('modifySuccess')
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
