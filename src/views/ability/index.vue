<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="12">
        <div>
          <el-row>
            <el-col :span="10">
              <el-image
                style="width: 100%; height: 290px"
                :src="topright"
                :fit="fit"
              />
            </el-col>
            <el-col :span="14">
              <el-image
                style="width: 100%; height: 290px"
                :src="topleft"
                :fit="fit"
              />
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="10">
              <el-image
                style="width: 100%; height: 251px"
                :src="lowerleft"
                :fit="fit"
              />
            </el-col>
            <el-col :span="14">
              <el-image
                style="width: 100%; height: 251px"
                :src="lowerright"
                :fit="fit"
              />
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :span="12">
        <div>
          <el-image
            style="width: 30%; height: 544px"
            :src="center"
            :fit="fit"
          />
          <el-image
            style="width: 70%; height: 544px"
            :src="right"
            :fit="fit"
          />
        </div>
      </el-col>
    </el-row><br>
    <router-link v-show="isShow" to="/joinus" @click="handleClick">加入我们</router-link>
  </div>
</template>

<script>
export default {
  name: 'Ability',
  data() {
    return {
      fit: 'fill',
      isShow: true,
      center: require('@/assets/ability/center.jpg'),
      right: require('@/assets/ability/444.jpg'),
      topleft: require('@/assets/ability/333.jpg'),
      topright: require('@/assets/ability/111.jpg'),
      lowerleft: require('@/assets/ability/lowerleft.jpg'),
      lowerright: require('@/assets/ability/555.jpg')
    }
  },
  methods: {
    handleClick() {
      this.isShow = false
    }
  }
}
</script>>
