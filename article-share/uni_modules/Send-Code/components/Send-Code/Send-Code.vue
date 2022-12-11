<template>
	<view class="code-container">
		<view class="vCode-btn" @click="getForm">
			{{runtime ? `剩余${time}秒` :'获取验证码'}}
		</view>
	</view>
</template>
<script>
	export default {
		name:"SendCode",
		data(){
			return {
				time:60,
				timeId:null,
				runtime:false,
			}
		},
		methods:{
			getForm(){
				if(this.runtime)return
				this.$emit('getForm',this._sendCode)
			},
			async _sendCode(form){
				//获取手机号
				const {phone} = await form.validateField(['phone']);
				this.runtime = true;
				this.timerunning()
				//验证码未完成
			},
			//发送验证码计时器
			timerunning(){
				this.timeId = setInterval(()=>{
					this.time--;
					if(this.time === 1){
						clearInterval(this.timeId)
						this.runtime = false;
						this.timeId = null;
						this.time = 60;
						return
					}
				},1000)
			}
		},
		beforeDestroy(){
			clearInterval(this.timeId)
			this.runtime = false;
			this.timeId = null;
			this.time = 60;
		}
	}
</script>
<style lang="scss">
	.code-container {
		flex-shrink: 0;
		margin-right: 20rpx;
		.vCode-btn {
			background-color: $base-color;
			color: #FFFFFF;
			padding: 20rpx;
			border-radius: 10rpx;
			opacity: .8;
		}
	}
</style>
