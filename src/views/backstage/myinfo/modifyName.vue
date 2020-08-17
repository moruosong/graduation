<template>
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="昵称">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary">修改</el-button>
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
        name: ''
      }
    }
  }
}
</script>
