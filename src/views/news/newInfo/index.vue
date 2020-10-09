<template>
  <div>
    <div>
      <span class="title">{{ news.title }}</span>
    </div>
    <div>
      <span class="date">{{ news.createTime }}</span>
    </div>
    <el-divider /><br><br>
    <div v-for="(value, key, i) in news.mapList" :key="i">
      <div style="width: 70%;margin: 0 auto;text-align: justify;text-justify: distribute-all-lines;word-break: break-all;">
        <!--<span class="content" v-text="Object.keys(value)[0]" />-->
        <span class="content">{{ Object.keys(value)[0] }}<span style="display:inline-block;width: 100%;" /></span>
      </div>
      <div style="text-align: center">
        <el-image
          v-if="Object.values(value)[0]"
          style="width: 60%; height: 60%;"
          :src=" Object.values(value)[0].path"
          fit="cover"
        />
      </div>
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
  text-align: justify;
  text-justify: distribute-all-lines;
  word-break: break-all;
  white-space: pre-wrap;
  padding: 0;
  margin: 0;
  width: 60%;
  height: auto;
  font-family: 'Microsoft YaHei';
  color: #404040;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  text-decoration: none;
  line-height: 24px;
  word-wrap: break-word;
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
