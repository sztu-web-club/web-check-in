<script setup lang="ts">
import { defineProps } from 'vue'

const { title } = defineProps({
  title: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <view class="custom-nav-bar">
    <text class="title">
      {{ title }}
    </text>
  </view>
</template>

<style scoped>
.custom-nav-bar {
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

.custom-nav-bar .title {
  color: #fff;
  position: absolute;
  top: 60rpx;
}
</style>
