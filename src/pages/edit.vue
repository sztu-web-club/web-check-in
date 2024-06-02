<script setup lang="ts">
const record = ref<Array<any>>([])
const userId = ref(1)

const getDetail = () => {
  uni.request({
    url: `api/v1/user/${userId.value}/attendance-records`,
    method: 'GET',
    success: (response) => {
      if (Array.isArray(response.data)) {
        record.value = response.data
      }
      else {
        uni.showToast({
          title: '获取数据失败',
          icon: 'none',
        })
      }
    },
    fail: (err) => {
      uni.showToast({
        title: '网络请求失败',
        icon: 'none',
      })
      console.error('网络请求失败', err)
    },
  })
}
onMounted(() => {
  getDetail()
})
</script>

<template>
  <view>
    <view class="defaultTop">
      <navigator
        url="/pages/index"
        open-type="navigateBack"
        hover-class="navigator-hover"
      >
        <text>{{ '<返回' }}</text>
      </navigator>
      <view class="fontPosition">
        打卡记录
      </view>
    </view>
  </view>

  <view class="edit">
    <scroll-view scroll-y class="list">
      <newbox
        v-for="item in record"
        :key="item.recordId"
        class="item"
      >
        <!-- <text class="title">
          {{ '打卡任务' }}
        </text> -->
        <!-- <text class="isPass">
          已打卡
        </text> -->
        <!-- <text class="pos">
          地点：{{ '成华大道' }}
        </text> -->
        <view class="time">
          签到时间：{{ item.date }}
        </view>
      </newbox>
    </scroll-view>
  </view>
</template>

<style scoped>
.view {
  position: relative;
  width: 80%;
  overflow: hidden;
  box-sizing: border-box;
}

.defaultTop {
  height: 130rpx;
  width: 100%;
  background-color: rgb(78, 199, 106);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  z-index: 999;
  font-size: 32rpx;
}

.defaultTop text {
  color: #fff;
  position: absolute;
  top: 60rpx;
  left: 25rpx;
}

.defaultTop .fontPosition {
  color: #fff;
  position: absolute;
  top: 60rpx;
}

/* edit */
.edit {
  position: relative;
  top: 130rpx;
  color: rgb(182, 182, 182);
  text-align: center;
  font-size: 36rpx;
}

/* list */
.list {
  margin-bottom: 50rpx;
  width: 100%;
  background-color: #fff;
  color: rgb(163, 163, 163);
  font-size: 24rpx;
}
.list .item {
  padding: 18rpx 20rpx;
  height: 200rpx;
  border-bottom: 1px solid rgb(231, 231, 231);
  display: flex;
  flex-direction: column;
  text-align: left;
}
.list .item .title {
  color: rgb(122, 122, 122);
  font-size: 36rpx;
  font-weight: 700;
  flex: 1;
}
.list .item .ispass,
.list .item .pos,
.list .item .time {
  flex: 1;
}
</style>

<route lang="json">
{
  "layout": "home"
}
</route>
