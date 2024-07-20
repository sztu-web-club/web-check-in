<script setup lang="ts">
import { ref } from 'vue'

const currentPageTitle = ref('快速打卡')
const isClick = ref(0)

const handleTabChange = (pagePath: string) => {
  switch (pagePath) {
    case '/pages/index':
      currentPageTitle.value = '快速打卡'
      isClick.value = 0
      break
    case '/pages/tasks':
      currentPageTitle.value = '打卡任务'
      isClick.value = 1
      break
    case '/pages/user':
      currentPageTitle.value = '个人中心'
      isClick.value = 2
      break
    default:
      currentPageTitle.value = '快速打卡'
      isClick.value = 0
      break
  }
}
</script>

<template>
  <nav-bar :title="currentPageTitle" />
  <slot />
  <tab-bar :current-tab="isClick" @tab-change="handleTabChange" />
</template>
