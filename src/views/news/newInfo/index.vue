<template>
  <div>
    <div>
      <span class="title">{{ news.title }}</span>
    </div>
    <div>
      <span class="date">{{ news.createTime }}</span>
    </div>
    <el-divider /><br><br>
    <div style="text-align: left;">
      <span class="content" v-text="news.content" />
    </div><br>
    <div>
      <el-image
        v-for="(item, index) in news.picList"
        :key="index"
        style="width: 60%; height: 100%"
        :src="item.path"
        fit="cover"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewInfo',
  props: {
    news: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      newsList: []
    }
  }
}
</script>>

<style lang="less" scoped>
.content{
  white-space: pre-wrap;
  padding: 0;
  margin: 0;
  width: 100%;
  height: auto;
  font-family: 'Microsoft YaHei';
  color: #404040;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  text-decoration: none;
  line-height: 24px;
  word-wrap: break-word;
  word-break: normal;
}
.title{
  padding: 0;
  margin: 0;
  width: 100%;
  height: auto;
  font-family: 'Microsoft YaHei';
  color: #404040;
  font-size: 18px;
  font-weight: normal;
  font-style: normal;
  text-decoration: none;
  text-align: center;
  line-height: 34px;
  word-wrap: break-word;
  word-break: normal;
}
.date{
  padding: 0;
  margin: 0;
  font-family: 'Microsoft YaHei';
  color: #999;
  font-size: 12px;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  word-wrap: break-word;
  word-break: normal;
}
</style>
