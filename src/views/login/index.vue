<template>
  <div class="login_container" :style="backgroundimg">
    <div class="login_box">
      <!-- 头像 -->
      <!-- <div class="avator_box">
        <img :src="require('@/assets/img/logo2.jpg')">
      </div> -->
      <!-- 登陆表单 -->
      <el-form ref="ruleForm" label-width="0px" class="login_form" :model="ruleForm" :rules="rules">
        <el-form-item>
          <span style="font-size: 20px">登录社团管理系统</span>
        </el-form-item>
        <!-- 用户名 -->
        <el-form-item label prop="username">
          <el-input v-model="ruleForm.username" prefix-icon="el-icon-user-solid" />
        </el-form-item>
        <!-- 密码 -->
        <el-form-item label prop="password">
          <el-input v-model="ruleForm.password" prefix-icon="el-icon-lock" type="password" />
        </el-form-item>
        <!-- 按钮 -->
        <el-form-item class="btns">
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
          <el-button type="info" @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Login',
  data() {
    return {
      backgroundimg: 'background-image:url(' + require('@/assets/img/background.jpg') + ')',
      ruleForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      }
    }
  },
  methods: {
    submitForm(formNmae) {
      this.$refs[formNmae].validate(valid => {
        if (valid) {
          this.$http({
            method: 'post',
            url: '/login',
            data: this.ruleForm,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
          }).then((res) => {
            if (res.data.success) {
              this.$message({
                message: res.data.msg,
                type: 'success'
              })
              console.log(res)
              window.sessionStorage.setItem('token', res.data.object.uuid)
              window.sessionStorage.setItem('role', res.data.object.role)
              window.sessionStorage.setItem('nickname', res.data.object.nickname)
              window.sessionStorage.setItem('username', res.data.object.username)
              this.$router.push('/user')
            } else {
              this.$message({
                message: res.data.msg,
                type: 'error'
              })
            }
          })
        } else {
          this.$message.error('登录失败')
        }
      })
    },
    resetForm(formNmae) {
      this.$refs[formNmae].resetFields()
    }
  }
}
</script>

<style lang="less" scoped>
.login_container {
  height: 100%;
}

.login_box {
  width: 450px;
  height: 300px;
  background-color: #ffffff;
  border-radius: 5px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  .avator_box {
    height: 130px;
    width: 130px;
    border: 1px solid #eeeeee;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px #dddddd;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #ffffff;

    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #eeeeee;
    }
  }
}

.login_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}

.btns {
  display: flex;
  justify-content: flex-end;
}
</style>
