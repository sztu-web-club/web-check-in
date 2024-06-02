<!-- 个人中心 -->
<script setup>
// 登录功能逻辑 后续加个修改昵称？
// 点击登录/注册时 弹出dialog？然后调用微信接口进行登录/注册？
// 登录之后 显示用户头像和昵称 原先的按钮变成退出登录？
const isLogin = ref('false')
const nickName = ref('')
const userInfo = ref({ })
const hasUserInfo = ref(false)
const avatarUrl = ref('')
const canIUseGetUserProfile = ref(false)
//
function userLogin() {
  isLogin.value = 'true'
  console.log('登录成功')
  wx.login({
    // success(res) {
    //   if (res.code) {
    //   // 发起网络请求
    //     wx.request({
    //       url: 'https://example.com/onLogin', // 后端接口地址
    //       data: {
    //         code: res.code,
    //       },
    //     })
    //   }
    //   else {
    //     console.log(`登录失败！${res.errMsg}`)
    //   }
    // },
  })
}

function userLogout() {
  isLogin.value = 'false'
}
function getUserProfile() {
  // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认
  // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
  wx.getUserProfile({
    desc: '用于完善个人资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
    success: (res) => {
      // console.log(res.userInfo)
      userInfo.value = res.userInfo
      nickName.value = userInfo.value.nickName
      avatarUrl.value = userInfo.value.avatarUrl
      hasUserInfo.value = true
      // 将这些数据发送给后端服务器
    },
    fail: () => {
      console.log('用户拒绝授权')
    },
  })
}
// function changeNickname() {
//   // nickName.value=
// }
onLoad(() => {
  wx.checkSession({
    success() {
    // session_key 未过期，并且在本生命周期一直有效
    },
    fail() {
      // session_key 已经失效，需要重新执行登录流程
      userLogin() // 重新登录
    },
  })
  if (wx.getUserProfile)
    canIUseGetUserProfile.value = true
},

)
</script>

<template>
  <view class="container">
    <view class="bgcolor" />
    <view class="userinfo">
      <view v-if="isLogin === 'false'" class="nologin">
        <image class="userinfo-avatar" src="../static/login.png" mode="scaleToFill" />
        <text class="login-msg">
          请点击下方登录/注册
        </text>
        <button class="login-btn" hover-class="ontap" hover-stay-time="500" @click="userLogin()">
          登录/注册
        </button>
        <!-- 点击登录后有个弹窗，然后进行wx.login和wx.getUserProfile获取用户的信息 -->
        <view class="button-example">
          <t-button theme="primary" size="large" block>
            填充按钮
          </t-button>
        </view>
        <t-button
          t-class="wrapper"
          theme="primary"
          size="large"
          variant="outline"
          data-key="showTextAndTitle"
          bind:tap="showDialog"
          block
        >
          反馈类-基础
        </t-button>
        <t-dialog
          visible="{{showTextAndTitle}}"
          title="对话框标题"
          content="告知当前状态、信息和解决方法，等内容。描述文案尽可能控制在三行内"
          confirm-btn="{{ confirmBtn }}"
          bind:confirm="closeDialog"
        />
      </view>
      <!-- 登录成功时的判断条件记得改为true，false为调试用 -->
      <view v-if="isLogin === 'true'" class="islogin">
        <block :wx:if="!hasUserInfo">
          <button :wx:if="canIUseGetUserProfile && !hasUserInfo" @click="getUserProfile()">
            获取头像昵称
          </button>
        </block>
        <block wx:else>
          <image bindtap="bindViewTap" class="userinfo-avatar" :src="userInfo.avatarUrl" mode="cover" />
          <text class="userinfo-nickname">
            {{ nickName }}
          </text>
          <!-- <t-input class="userinfo-nickname" label="用户昵称" placeholder="{{ nickName }}">
            <template #suffix>
              <t-button theme="primary" size="extra-small">
                修改昵称
              </t-button>
            </template>
          </t-input> -->
        </block>
        <button class="logout-btn" hover-class="ontap" hover-stay-time="500" @click="userLogout()">
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
.button-example {
  margin: 32rpx;
}
.userinfos{
  width: 100%;
  display: flex;
  justify-content: center;
  height: 100rpx;
}
</style>

<route lang="json">
{
  "navigationBarTitleText": "个人中心",
  "component": true,
  "usingComponents": {
    "t-button": "tdesign-miniprogram/button/button"
  }
}
</route>
