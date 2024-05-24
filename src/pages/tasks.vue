<!-- 打卡任务 -->
<template>
  <view>
    <view class="defaultTop">
      <view class="fontPosition">
        打卡任务
      </view>
    </view>
  </view>

  <view class="task">
    <view class="createTask">
      <navigator
        url="/pages/create"
        open-type="navigate"
        hover-class="navigator-hover"
      >
        <button size="default">
          新建打卡任务
        </button>
      </navigator>
    </view>

    <view class="list">
      <newbox v-for="item in 10" :key="item" class="item">
        <text class="title">
          任务{{ item }}
        </text>
        <text class="isPass">
          已打卡
        </text>
        <text class="pos">
          成华大道
        </text>
        <view class="status">
          <text class="isPass">
            已签人数：{{ '100' }}
          </text>
          &nbsp;/&nbsp;
          <text class="sum">
            总人数：{{ '200' }}
          </text>
        </view>
      </newbox>
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
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  z-index: 999;
  font-size: 32rpx;
}

.defaultTop .fontPosition {
  color: #fff;
  position: absolute;
  top: 60rpx;
}

/* task */
.task {
  position: relative;
  top: 130rpx;
  color: rgb(182, 182, 182);
  text-align: center;
  font-size: 36rpx;
  margin-bottom: 200rpx;
}

/* createTask */

/* list */
.list {
  margin-bottom: 100rpx;
  width: 100%;
  background-color: #fff;
  color: rgb(163, 163, 163);
  font-size: 24rpx;
}
.list .item {
  padding: 18rpx 22rpx;
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
.list .item .status {
  flex: 1;
}
</style>

<route  lang="json">
{
  "layout": "default"
}
</route>
