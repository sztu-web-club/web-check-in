<!-- eslint-disable unused-imports/no-unused-vars -->
// 此页是 打卡任务 页面
<script setup lang="ts">
// import { ref } from 'vue'

function timestampToTime(timestamp: Date) {
  timestamp = timestamp || null

  // 检查 timestamp 是否为 null
  if (timestamp === null)
    return ''
  const date = new Date(timestamp)
  const h = `${date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()}:`
  const m = `${date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()}:`
  const s = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds()
  return h + m + s
}
</script>

<template>
  <view>
    <view class="defaultTop">
      <view class="fontPosition">
        快速打卡
      </view>
    </view>
  </view>

  <view class="quickCheck">
    <view class="text1">
      您当前在 &nbsp;&nbsp;
      <view class="position">
        成华大道
      </view>
    </view>

    <view class="isCheck">
      可打卡 &nbsp;
      <button size="mini">
        产品中心签到
      </button>
    </view>

    <view class="time">
      <view class="timeNow">
        {{ '19' }} : {{ '04' }} : {{ '11' }}
      </view>
      <view class="date">
        {{ '2024' }}年{{ '5' }}月{{ '23' }}日&nbsp;星期{{ '四' }}
      </view>
    </view>

    <view class="clickCheck">
      <view class="checkButton">
        点&nbsp;击&nbsp;打&nbsp;卡
      </view>
    </view>

    <view class="text2">
      <view class="info">
        本月已累计打卡&nbsp;&nbsp;<text>{{ '1' }}</text>&nbsp;&nbsp;天，未打卡&nbsp;&nbsp;<text>{{ '1' }}</text>&nbsp;&nbsp;天
      </view>
      <button size="mini">
        查看我的打卡记录
      </button>
    </view>
  </view>
</template>

<style scoped>
.view {
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
}

.defaultTop {
  height: 130rpx;
  width: 100%;
  background-color: rgb(78, 199, 106);
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  font-size: 32rpx;
}

.defaultTop .fontPosition {
  color: #fff;
  position: absolute;
  top: 60rpx;
}

/* quickCheck */
.quickCheck {
  margin-top: 40rpx;
  position: relative;
  top: 130rpx;
  color: rgb(182, 182, 182);
  text-align: center;
}

/* text */
.text1 {
  height: 30rpx;
  text-align: center;
  line-height: 30rpx;
}

.text1 .position {
  display: inline-block;
  color: rgb(139, 139, 139);
  font-size: 22rpx;
}

.isCheck {
  margin-top: 30rpx;
  height: 30rpx;
}

.isCheck button {
  vertical-align: middle;
}

/* time */
.time {
  margin-top: 90rpx;
  position: relative;
  color: rgb(139, 139, 139);
  text-align: center;
  font-size: 28rpx;
}

.time .timeNow {
  text-align: center;
  color: rgb(90, 90, 90);
  font-size: 44rpx;
  font-weight: 900;
}

.time .date {
  margin-top: 10rpx;
  height: 30rpx;
}

/* clickCheck */
.clickCheck {
  margin-top: 50rpx;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  width: 320rpx;
  height: 320rpx;
  border-radius: 50%;
  background: linear-gradient(to top left, silver, white);
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 8rpx 8rpx 12rpx 8rpx;
}

.clickCheck .checkButton {
  position: absolute;
  width: 80%;
  height: 80%;
  border-radius: 50%;
  background: linear-gradient(to top right, silver, white);
  text-align: center;
  line-height: 256rpx;
}

/* text2 */
.text2 {
  margin-top: 110rpx;
  font-size: 24rpx;
}

.text2 text {
  display: inline-block;
  color: rgb(142, 142, 142);
  font-size: 30rpx;
  font-weight: 700;
}

.text2 button {
  margin-top: 28rpx;
}
</style>

<route lang="json">
{
  "layout": "default"
}
</route>
