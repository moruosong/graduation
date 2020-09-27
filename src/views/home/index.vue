<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="6" :xs="24">
        <el-carousel :interval="4000" height="400px">
          <el-carousel-item v-for="item in rotation" :key="item">
            <el-image :src="item" style="width: 100%; height: 100%" fit="scale-down" />
          </el-carousel-item>
        </el-carousel>
      </el-col>
      <el-col :span="12" :xs="24">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane v-for="(item, index) in typeList" :key="index" :label="item" :name="index">
            <div v-if="newList.length > 0">
              <ul style="list-style: none">
                <li v-for="el in newList" :key="el.id">
                  <a @click="toNews(el.id)">
                    <div style="text-align:left;margin-top: 10px;">
                      <div>
                        <span class="newsTitle">{{ el.title }}</span>
                      </div>
                      <div>
                        <span class="newsDate">{{ el.createTime }}</span>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div v-else><span class="newsTitle">暂无相关数据</span></div>
          </el-tab-pane>
          <el-tab-pane>
            <span slot="label"><el-link type="primary" href="#/shownews">>>更多</el-link></span>
          </el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col :span="6">
        <div>
          <el-table
            :data="companyList"
            border
            style="width: 100%"
            row-class-name="select_row"
            @header-click="handleHeaderClick"
            @row-click="handelRowClick"
          >
            <el-table-column
              prop="name"
              label="关于我们"
            />
          </el-table>
        </div>
      </el-col>
    </el-row>
    <el-divider />
    <el-row style="margin-left: 100px;margin-right: 100px;">
      <el-col v-for="item in pics" :key="item" :span="6" :xs="12">
        <el-image
          style="width: 100%; height: 200px"
          :src="item"
          fit="cover"
        />
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      companyList: [
        { name: '中央新影文化发展有限公司' },
        { name: '唐玺集团有限公司' },
        { name: '中稹华夏实业有限公司' },
        { name: '广东天玑控股集团' },
        { name: '国中城投集团有限公司' },
        { name: '西南晟铁物流有限公司' }
      ],
      typeList: {},
      newList: [],
      activeName: '1',
      rotation: [
        require('@/assets/img/rotation2-1.jpg'),
        require('@/assets/img/rotation2-2.jpg'),
        require('@/assets/img/rotation2-3.jpg')
      ],
      pics: [
        require('@/assets/img/bottom01.jpg'),
        require('@/assets/img/bottom02.jpg'),
        require('@/assets/img/bottom03.jpg'),
        require('@/assets/img/bottom04.jpg')
      ]
    }
  },
  mounted() {
    this.$http({
      method: 'post',
      url: '/news/getAllNewsType',
      headers: { 'Content-Type': 'application/json' }
    }).then(res => {
      this.typeList = res.data.object
    })
    this.$http({
      method: 'post',
      url: '/news/getNewsByType',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      data: { type: 1 }
    }).then(res => {
      this.newList = res.data.object.slice(0, 5)
    })
  },
  methods: {
    handelRowClick(row, column, event) {
      console.log(row.name)
      this.$router.push({ path: '/soncompany', query: { name: row.name }})
    },
    handleHeaderClick() {
      this.$router.push('/aboutus')
    },
    toNews(id) {
      this.$router.push({ path: '/shownews', query: { id: id }})
    },
    handleClick(evn) {
      this.$http({
        method: 'post',
        url: '/news/getNewsByType',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        data: { type: evn.index - 0 + 1 }
      }).then(res => {
        this.newList = res.data.object.slice(0, 5)
      })
    }
  }
}
</script>

<style lang="less">

.select_row:hover{
  cursor: pointer;
}
.newsTitle {
  text-align: left;
  line-height: 24px;
  font-family: 'Microsoft YaHei';
  font-size: 18px;
  font-style: normal;
  font-weight: normal;
  color: #404040;
  text-decoration: none;
 }
.newsDate {
  text-align: right;
  padding: 0;
  margin-top: 10px;
  display: inline-block;
  font-family: 'Microsoft YaHei';
  font-size: 14px;
  font-style: normal;
  font-weight: normal;
  color: #BBB;
  text-decoration: none;
 }
.box{
	width: 200px;
	height:200px;
	overflow: hidden;
}
img{
	width: 100%;
	transition: transform 1s;
}
</style>
