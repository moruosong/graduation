<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="6" :xs="24">
        <el-carousel :interval="4000" height="380px">
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
            <!-- @row-click="handelRowClick" -->
            <el-table-column
              prop="name"
              label="关于我们"
            />
          </el-table>
        </div>
      </el-col>
    </el-row>
    <el-divider />
    <el-row>
      <!-- <el-image
        style="width: 100%; height: 250px"
        :src="pic"
        fit="cover"
      /> -->
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
        { name: '四川中稹星耀科技集团有限公司' },
        { name: '四川中稹普优实业有限公司' },
        { name: '四川中融融创实业有限公司' },
        { name: '四川中稹滨海置业有限公司' },
        { name: '四川中稹施华洛建筑工程有限公司' },
        { name: '四川中稹怀星房地产营销策划有限公司' }
      ],
      typeList: {},
      newList: [],
      activeName: '1',
      rotation: [
        require('@/assets/img/44.jpg'),
        require('@/assets/img/47.jpg'),
        require('@/assets/img/48.jpg')
      ],
      pics: [
        require('@/assets/home/01.jpg'),
        require('@/assets/home/02.jpg'),
        require('@/assets/home/03.jpg'),
        require('@/assets/home/04.jpg')
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
  font-size: 14px;
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
// img:hover{
// 	transform: scale(1.2);
// }
</style>
