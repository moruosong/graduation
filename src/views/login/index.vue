<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 头像 -->
      <div class="avator_box">
        <img src="@/assets/logo.png">
      </div>
      <!-- 登陆表单 -->
      <el-form ref="ruleForm" label-width="0px" class="login_form" :model="ruleForm" :rules="rules">
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
          var params = new URLSearchParams()
          params.append('username', this.ruleForm.username)
          params.append('password', this.ruleForm.password)
          console.log()
          // this.$http.get('login', this.ruleForm).then(res => {
          //   console.log(res)
          // })
          this.$http({
            method: 'post',
            url: 'http://localhost:8080/api/login',
            headers: {
              'Content-type': 'application/x-www-form-urlencoded'
            },
            data: params
          }).then((res) => {
            console.log(res.data)
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
  background-color: #2b4b6b;
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
