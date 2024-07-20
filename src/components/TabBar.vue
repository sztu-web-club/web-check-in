<script setup lang="ts">
import { defineEmits, defineProps, ref } from 'vue'

const { currentTab } = defineProps({
  currentTab: {
    type: Number,
    default: 0,
  },
})

const emit = defineEmits(['pagePath'])

const isClick = ref(0)

const redirectTab = (pagePath: string, currentTab: number) => {
  isClick.value = currentTab
  emit('pagePath', pagePath)
  uni.redirectTo({
    url: pagePath,
  })
}
</script>

<template>
  <view class="custom-tab-bar">
    <view
      class="tab-item"
      :class="isClick === 0 ? 'current' : ''"
      @tap="redirectTab('/pages/index', currentTab)"
    >
      <!-- 用来放置tabBar图标 -->
      <!-- <image src=""/> -->
      <text class="text">
        快速打卡
      </text>
    </view>
    <view
      class="tab-item"
      :class="isClick === 1 ? 'current' : ''"
      @tap="redirectTab('/pages/tasks', currentTab)"
    >
      <!-- 用来放置tabBar图标 -->
      <!-- <image src=""/> -->
      <text class="text">
        打卡任务
      </text>
    </view>
    <view
      class="tab-item"
      :class="isClick === 2 ? 'current' : ''"
      @tap="redirectTab('/pages/user', currentTab)"
    >
      <!-- 用来放置tabBar图标 -->
      <!-- <image src=""/> -->
      <text class="text">
        个人中心
      </text>
    </view>
  </view>
</template>

<style scoped>
.custom-tab-bar {
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
.current {
  color: rgb(78, 199, 106);
}
</style>
