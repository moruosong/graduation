<template>
  <div>
    <span style="font-size:24px">热招职位</span><br>
    <span style="line-height:2">
      我们想要与您共同发展！    公司地址：四川省成都市高新区天府四街158号
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
      />
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'Joinus',
  data() {
    return {
      positionList: [
      ]
    }
  }
}
</script>>
