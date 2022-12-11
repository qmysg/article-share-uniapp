<template>
	<view class="login-container">
		<image src="../../../static/img/login_bg.png" class="banner-bg" mode=""></image>
		<!-- 导航 -->
		<view class="login-nav">
			<view class="nav-item" @click="changeUserType('account')" :class="{'active':type==='account'}">
				账号登录
			</view>
			<view class="nav-item" @click="changeUserType('mobile')" :class="{'active':type !=='account'}">
				手机登录
			</view>
		</view>
		<!-- 表单部分 -->
		<uni-forms class="form" ref="form" :modelValue="formData">
			<view class="" v-if="type ==='account'">
				<uni-forms-item label="账号" name="loginName" key='loginName'>
					<input placeholder-class="placeholder" class="form-input" type="text" placeholder="请输入账号"
						v-model="formData.loginName" />
				</uni-forms-item>
				<uni-forms-item label="密码" name="password" key='password'>
					<uni-easyinput :inputBorder="false" placeholder-class="placeholder" class="form-input"
						type="password" placeholder="请输入密码" v-model="formData.password"></uni-easyinput>
				</uni-forms-item>
			</view>
			<view class="" v-else>
				<uni-forms-item label="手机号" name="phone" key='phone'>
					<input placeholder-class="placeholder" class="form-input" type="number" placeholder="请输入手机号"
						v-model="formData.phone" />
				</uni-forms-item>
				<uni-forms-item label="验证码" name="vCode" key='vCode'>
					<input placeholder-class="placeholder" class="form-input" type="text" placeholder="请输入验证码"
						v-model="formData.vCode" />
					<Send-Code class="code-component" @getForm="getForm"></Send-Code>
				</uni-forms-item>
			</view>

			<button class="login-btn" @click="_userLoginSubmit">立即登录</button>
		</uni-forms>
		<view class="footer-select-container">
			<text>注册</text>
			<text>忘记密码</text>
		</view>
	</view>
</template>

<script>
	import {
		mapMutations
	} from 'vuex'
	export default {
		onReady() {
			this.$refs.form.setRules(this.userRules)
		},
		data() {
			return {
				type: 'account',
				formData: {
					loginName: '',
					password: '',
					phone: '',
					vCode: '',
				}
			}
		},
		methods: {
			//登录验证
			async _userLoginSubmit() {
				const res = await this.$refs.form.validate()
				this._sendUserInfo({
					...res,
					type: this.type
				})
			},
			//切换用户登录类型
			changeUserType(type) {
				this.type = type;
				this.$refs.form.clearValidate([])

			},
			//向后端发送数据
			async _sendUserInfo(data) {
				const userInfo = await this.$http.user_login(data)
				if (userInfo) {
					//保存用户数据
					this.updateUserInfo(userInfo)
					uni.showLoading({
						title: "登录成功",
						icon: 'none'
					})
					//返回之前的页面
					setTimeout(() => {
						// #ifdef H5
						uni.switchTab({
							url: '/pages/index/index'
						})
						// #endif
						// #ifndef H5
						uni.navigateBack()
						// #endif

					}, 1500)
				}
			},
			//向验证码组件发送表单数据
			getForm(db) {
				db && db(this.$refs.form)
			},

		}
	}
</script>

<style lang="scss">
	page {
		background-color: #f5f5f5;
	}
</style>

<style lang="scss" scoped>
	@import './css/login.scss'
</style>
