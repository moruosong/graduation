<template>
  <el-card style="height: 100%; width: 100%">
    <div slot="header" class="card-hrader">
      <span>招聘信息</span>
      <el-button type="primary" size="small" @click="dlg = true">发布招聘</el-button>
    </div>
    <el-table :data="recruitList" style="width: 100%">
      <el-table-column
        prop="title"
        label="职位"
        width="100"
      />
      <el-table-column
        :show-overflow-tooltip="true"
        prop="content"
        label="要求"
      />
      <el-table-column
        align="center"
        label="操作"
        width="200"
      >
        <template>
          <el-button type="primary" size="small">修改</el-button>
          <el-button type="danger" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
      :title="dlgtitle+'招聘信息'"
      :visible.sync="dlg"
      width="40%"
      @closed="handelDlgClose"
      @open="handleDlgOpen"
    >
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="职位">
          <el-input v-model="form.title" />
        </el-form-item>
        <el-form-item label="要求">
          <el-input v-model="form.content" type="textarea" :rows="10" />
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dlg = false">取 消</el-button>
        <el-button type="primary" @click="dlg = false">提 交</el-button>
      </span>
    </el-dialog>
  </el-card>
</template>
<script>
export default {
  name: 'Recruit',
  data() {
    return {
      dlgtitle: '发布',
      recruitList: [],
      form: {
        title: '',
        content: '',
        isAdd: '0'
      },
      dlg: false
    }
  }
}
</script>
