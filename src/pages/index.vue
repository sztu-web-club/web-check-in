// 此页是 快速打卡 页面
<script setup lang="ts">
</script>

<template>
  <view>
    <view class="defaultTop">
      <view class="fontPosition">
        签到打卡
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
        点击打卡
      </view>
    </view>

    <view class="text2">
      本月已累计打卡&nbsp;<text>{{ '10086' }}</text>&nbsp;天，未打卡&nbsp;<text>{{ '114514' }}</text>&nbsp;天
      <button size="mini">
        查看我的打卡记录
      </button>
    </view>
  </view>
</template>

<style>
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
  margin-top: 20rpx;
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

<route  lang="json">
{
  "layout": "default"
}
</route>
