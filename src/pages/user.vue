<!-- 个人中心 -->
<script setup>
// 登录功能逻辑 后续加个修改昵称？
// 点击登录/注册时 弹出dialog？然后调用微信接口进行登录/注册？
// 登录之后 显示用户头像和昵称 原先的按钮变成退出登录？
const isLogin = ref('false')
const nickname = ref('用户昵称')
//
</script>

<template>
  <view class="container">
    <view class="bgcolor" />
    <view class="userinfo">
      <view :wx:if="isLogin === 'false'" class="nologin">
        <image class="userinfo-avatar" src="../static/login.png" mode="scaleToFill" />
        <text class="login-msg">
          请点击下方登录/注册
        </text>
        <button class="login-btn" hover-class="ontap" hover-stay-time="500" @onclick="userLogin()">
          登录/注册
        </button>
      </view>
      <!-- 登录成功时的判断条件记得改为true，false为调试用 -->
      <view :wx:if="isLogin === 'false'" class="islogin">
        <!-- 登录成功后的头像需要更改为用户头像 -->
        <image class="userinfo-avatar" src="../static/logined.png" mode="scaleToFill" />
        <!-- 登录成功后的昵称需要更改为用户昵称 -->
        <text class="userinfo-nickname">
          {{ nickname }}
        </text>
        <button class="logout-btn" hover-class="ontap" hover-stay-time="500" @onclick="userLogout()">
          退出登录
        </button>
      </view>
    </view>
  </view>
</template>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
}
.bgcolor {
  width: 100vw;
  height: 500rpx;
  background-color: rgb(78, 199, 106)
}
.nologin  {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.islogin {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.userinfo-avatar {
  margin-top: 20rpx;
  width: 128rpx;
  height: 128rpx;
  border-radius: 50%;
}

.login-msg  {
  margin-top: 20rpx;
  color: rgb(78, 199, 106);
  font-size: 36rpx;
}
.userinfo-nickname {
  margin-top: 20rpx;
  font-size: 36rpx;
}
.login-btn {
  margin-top: 50rpx;
  width: 400rpx;
  height: 65rpx;
  line-height:65rpx;
  background-color: rgb(78, 199, 106);
  color: #ffffff;
  text-align: center;
  border-radius: 40rpx;
}
.logout-btn {
  margin-top: 50rpx;
  width: 400rpx;
  height: 65rpx;
  line-height: 65rpx;
  background-color: rgb(208, 66, 50);
  color: #ffffff;
  text-align: center;
  border-radius: 40rpx;
}
.ontap{
  transform: scale(1.2);
  transition: transform 0.5s ease;
}
</style>

<route lang="json">
{
  "navigationBarTitleText": "个人中心"
}
</route>
