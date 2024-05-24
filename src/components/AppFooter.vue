<script lang="ts" setup>
</script>

<template>
  <view class="defaultTab">
    <navigator class="current" url="/pages/index" open-type="navigate" hover-class="navigator-hover">
      快速打卡
    </navigator>
    <navigator url="/pages/tasks" open-type="navigate" hover-class="navigator-hover">
      打卡任务
    </navigator>
    <navigator url="/pages/user" open-type="navigate" hover-class="navigator-hover">
      个人中心
    </navigator>
  </view>
</template>

<style>
.view {
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
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
  position: fixed;
}

.defaultTab navigator {
  width: 100%;
}

.defaultTab .current {
  color: rgb(78, 199, 106);
}
</style>
