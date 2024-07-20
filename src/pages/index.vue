<!-- 此页是 快速签到 页面 -->
<script setup lang="ts">
const Time = ref('')

function timestampToTime(timestamp?: number) {
  const date = new Date(timestamp || Date.now())
  const h = `${date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()}:`
  const m = `${date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()}:`
  const s = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds()
  return `${h} ${m} ${s}`
}

onMounted(() => {
  updateTime()
  const timer = setInterval(updateTime, 1000)
  onUnmounted(() => {
    clearInterval(timer)
  })
})

function updateTime() {
  Time.value = timestampToTime()
}
</script>

<template>
  <view>
    <view class="defaultTop">
      <view class="fontPosition">
        快速打卡
      </view>
    </view>
    签到打卡
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
        {{ Time }}
      </view>
      <view class="date">
        {{ '2024' }}年{{ '5' }}月{{ '23' }}日&nbsp;星期{{ '四' }}
      </view>
    </view>

    <view class="scan">
      扫&nbsp;码&nbsp;打&nbsp;卡
    </view>

    <view class="text2">
      <view class="info">
        本月已累计打卡&nbsp;&nbsp;<text>{{ '1' }}</text>&nbsp;&nbsp;天，未打卡&nbsp;&nbsp;<text>{{ '1' }}</text>&nbsp;&nbsp;天
      </view>
      <navigator
        url="/pages/edit"
        open-type="navigate"
        hover-class="none"
      >
        <button size="mini">
          查看我的打卡记录
        </button>
      </navigator>
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
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index:999;
  height: 130rpx;
  width: 100%;
  background-color: rgb(78, 199, 106)
}

.defaultTop .fontPosition {
  color: #fff;
  position: absolute;
  top: 60rpx;
}

.defaultTab {
  height: 100rpx;
  width: 100%;
  position: absolute;
  background-color: rgb(247, 247, 249);
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-around;
  line-height: 100rpx;
  text-align: center;
  color: #555;
  font-size: 28rpx;
}

.defaultTab .current {
  color: rgb(78, 199, 106);
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

/* scan */
.scan {
  margin-top: 50rpx;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  width: 320rpx;
  height: 320rpx;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #000;
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
