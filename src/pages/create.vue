<script setup lang="ts">
</script>

<template>
  <view>
    <view class="defaultTop">
      <navigator
        url="/pages/"
        open-type="navigateBack"
        hover-class="navigator-hover"
      >
        <text>返回</text>
      </navigator>
      <view class="fontPosition">
        新建打卡项目
      </view>
    </view>
  </view>

  <view class="createInfo">
    <newbox class="name bottomLine">
      <text>任务名称</text>
      <input type="text" value="成华大道打卡">
    </newbox>
    <newbox class="bottomLine position">
      <text>地点</text>
      <input type="text" value="成华大道">
    </newbox>
    <newbox class="bottomLine time">
      <text>打卡时间</text>
      <picker-view class="picker-view">
        <picker-view-column>
          <view v-for="item in ['2021', '2022', '2023', '2024']" :key="item" class="item">
            {{ item }}年
          </view>
        </picker-view-column>
        <picker-view-column>
          <view v-for="item in ['2', '3', '4', '5']" :key="item" class="item">
            {{ item }}月
          </view>
        </picker-view-column>
        <picker-view-column>
          <view v-for="item in ['2', '3', '4', '5']" :key="item" class="item">
            {{ item }}日
          </view>
        </picker-view-column>
      </picker-view>
    </newbox>
    <newbox class="bottomLine earlyTime">
      <text>最早打卡时间</text>
    </newbox>
    <newbox class="bottomLine during">
      <text>开始时间：{{ '2014-05-21' }}</text>
      -----
      <text>结束时间：{{ '2014-05-28' }}</text>
    </newbox>
    <newbox class="bottomLine setMore">
      <navigator
        url="/pages/"
        open-type="navigate"
        hover-class="navigator-hover"
      >
        <text>
          更多设置
        </text>
      </navigator>
    </newbox>
    <newbox class="bottomLine invition">
      <text>邀请他人一起打卡</text>
    </newbox>

    <button size="mini">
      完成
    </button>
  </view>
</template>

<style scoped>
.view {
  width: 80%;
  position: relative;
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

/* createInfo */
.createInfo {
  width: 93%;
  display: flex;
  flex-direction: column;
}
/* 公共样式 */
.bottomLine {
  width: 100%;
  padding: 0 25rpx;
  border-bottom: 1px solid rgb(223, 223, 223);
  height: 90rpx;
  color: rgb(143, 143, 143);
  line-height: 90rpx;
  font-size: 32rpx;
  display: flex;
  justify-content: space-between;
}

/* name */
.createInfo .name input {
  height: 90rpx;
}
/* position */
.createInfo .position input {
  height: 90rpx;
}
/* during */
.createInfo .during {
  font-size: 26rpx;
}

/* button */
button {
  left: 25%;
  transform: translateX(-50%);
  margin-top: 150rpx;
  width: 300rpx;
  height: 70rpx;
  background-color: rgb(201, 201, 201);
  font-size: 34rpx;
  text-align: center;
  line-height: 70rpx;
}
</style>

<route lang="json">
{
  "layout": "home"
}
</route>
