<template>
  <div style="margin-left: 50px">
    <el-row>
      <el-col :span="4">
        <div>
          <el-menu
            :default-active="typeIndex"
            class="el-menu-vertical-demo"
            @select="handleSelect"
          >
            <el-menu-item v-for="(item, index) in typeList" :key="index" :index="item">
              <span slot="title">{{ item }}</span>
            </el-menu-item>
          </el-menu>
        </div>
        <div class="divBorder" style="text-align: left; margin-top: 20px;">
          <div>
            <a href="#">
              <span style="font-size: 16px; line-height:30px">网址：</span>
              <span style="font-size: 16px; line-height:30px">www.zhongzhenrc.com</span>
            </a>
          </div>
          <div><span style="color:#cc0000;font-size: 16px; line-height:30px">中稹融创实业集团有限公司</span></div>
          <div><span style="font-size: 16px; line-height:30px">地址：四川省成都市高新区天府四街158号</span></div>
          <br>
          <div><span style="color:#cc0000; font-size: 16px; line-height:30px">四川中稹滨海置业有限公司</span></div>
          <div><span style="font-size: 16px; line-height:30px">地址：四川省成都市高新区天府四街158号</span></div>
        </div>
      </el-col>
      <el-col :span="18">
        <div>
          <span style="font-size:30px">{{ typeSelect }}</span>
          <div style="margin: 0px 20px">
            <el-divider />
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'SonCompany',
  data() {
    return {
      typeIndex: '集团概况',
      typeList: [
        '中央新影文化发展有限公司', '唐玺集团有限公司', '中稹华夏实业有限公司', '广东天玑控股集团', '国中城投集团有限公司', '西南晟铁物流有限公司'
      ],
      typeSelect: '集团概况'
    }
  },
  mounted() {
    const name = this.$route.query.name
    this.typeIndex = name
    this.typeSelect = name
  },
  methods: {
    handleSelect(index, indexPath) {
      console.log(index, indexPath)
      this.typeSelect = index
    }
  }
}
</script>
