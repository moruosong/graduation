<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="10" :xs="24">
        <el-carousel :interval="4000" type="card" height="400px">
          <el-carousel-item v-for="(item, index) in rotation2" :key="index">
            <el-image :src="item" style="width: 100%; height: 100%" fit="scale-down" />
          </el-carousel-item>
        </el-carousel>
      </el-col>
      <el-col :span="14" :xs="24">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane v-for="(value, key) in typeList" :key="key" :label="value" :name="key">
            <div v-if="newList.length > 0">
              <ul style="list-style: none">
                <li v-for="(item, index) in newList" :key="index">
                  <a href="#/shownews">
                    <div style="text-align:left;margin-top: 10px;">
                      <el-row>
                        <el-col :span="16">
                          <span class="newsTitle">{{ item.title }}</span>
                        </el-col>
                        <el-col :span="8">
                          <span class="newsDate">{{ item.createTime }}</span>
                        </el-col>
                      </el-row>
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
    </el-row>
    <el-divider />
    <el-row style="margin-left: 100px;margin-right: 100px;">
      <el-col v-for="(item, index) in pics" :key="index" :span="6" :xs="12">
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
      typeList: {},
      newList: [],
      activeName: '1',
      rotation: [
        require('@/assets/img/rotation1.jpg'),
        require('@/assets/img/rotation2.jpg'),
        require('@/assets/img/rotation3.jpg')
      ],
      rotation2: [
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

<style lang="less" scoped>
.newsTitle {
  text-align: left;
  margin-left: 10px;
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
  margin-left: 30px;
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
	transition: transform 1.6s;
}
img:hover{
	transform: scale(2.0);
}
</style>
