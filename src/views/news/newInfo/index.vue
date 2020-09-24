<template>
  <div>
    <div v-if="newsList.length > 0">
      <ul style="list-style: none">
        <li v-for="(item, index) in newsList" :key="index">
          <div style="text-align:left;margin-top: 10px;">
            <el-image
              v-if="item.picList && item.picList.length > 0"
              style="width: 120px; height: 88px; float: left; margin-right: 10px"
              :src="item.picList[0].path"
              fit="cover"
            >
              <div slot="error" class="image-slot">
                <span>暂无图片</span>
              </div>
            </el-image>
            <el-image
              v-else
              style="width: 120px; height: 88px; float: left; margin-right: 10px"
              src="#"
              fit="cover"
            >
              <div slot="error" class="imageError">
                <span>暂无图片</span>
              </div>
            </el-image>
            <span class="newsTitle">{{ item.title }}</span> <br>
            <span class="newsDate">{{ item.createTime }}</span>
          </div><br><br>
        </li>
      </ul>
    </div>
    <div v-else>
      <span>暂无数据</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewInfo',
  data() {
    return {
      newsList: []
    }
  },
  mounted() {
    this.newsList = []
    const index = this.$route.query.index
    if (index === '0') {
      this.$http({
        method: 'post',
        url: '/news/getAllNews',
        headers: { 'Content-Type': 'application/json' }
      }).then(res => {
        this.page = res.data.object
        this.newsList = res.data.object.list
      })
    } else {
      this.$http({
        method: 'post',
        url: '/news/getNewsByType',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        data: { type: index }
      }).then(res => {
        this.newsList = res.data.object
      })
    }
  }
}
</script>>

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
  padding-top: 20px;
  margin-left: 10px;
  display: inline-block;
  font-family: 'Microsoft YaHei';
  font-size: 14px;
  font-style: normal;
  font-weight: normal;
  color: #BBB;
  text-decoration: none;
 }
 .imageError {
   text-align: center;
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100%;
   height: 100%;
   background: #f5f7fa;
   color: #909399;
   font-size: 14px;
 }
</style>
