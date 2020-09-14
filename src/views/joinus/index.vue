<template>
  <div>
    <span style="font-size:24px">热招职位</span><br>
    <span style="line-height:2">
      我们想要与您共同发展！    联系方式：010-52908888    公司地址：北京市朝阳区小营路金盟大厦8层
    </span>
    <el-table :data="positionList" style="width: 100%; margin: 20px">
      <el-table-column
        prop="name"
        label="职位"
        width="100"
      />
      <el-table-column
        prop="need"
        label="要求"
      />
      <el-table-column
        align="center"
        label="操作"
        width="200"
      >
        <template>
          <el-button type="primary">投递简历</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'Joinus',
  data() {
    return {
      positionList: [
        { name: '会计', need: '无' }
      ]
    }
  }
}
</script>>
