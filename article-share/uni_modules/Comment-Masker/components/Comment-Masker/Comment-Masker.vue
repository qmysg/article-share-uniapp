<template>
	<view class="">
		<uni-popup ref="popup" type="bottom" :mask-click="false">
			<view class="popup-wrapper">
				<view class="popup-header">
					<view class="popup-header-item" @click="closePopup">
						取消
					</view>
					<view class="popup-header-item" @click="sendPopupData">
						发布
					</view>
				</view>
				<view class="popup-content">
					<textarea v-model.trim="commentsVal" placeholder="请输入评论内容" maxlength="200"></textarea>
					<view class="popup-content-count">
						{{commentsVal.length}}/200
					</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>
<script>
	export default {
		name:"CommentMasker",
		props:{
			showPopup:Boolean
		},
		data(){
			return{
				commentsVal:""
			}
		},
		watch:{
			showPopup(newVal){
				newVal ? this.$refs.popup.open() : this.$refs.popup.close()
			}
		},
		methods:{
			//关闭弹窗
			closePopup(){
				this.$emit('closePopup',false)
			},
			//发布评论内容
			sendPopupData(){
				if(!this.commentsVal){
					uni.showToast({
						title:"请输入内容",
						icon:'none'
					});
					return
				}
				this.$emit("sendPopupData",this.commentsVal)
				this.commentsVal = ""
			}
		}
	}
</script>
<style lang="scss">
	.popup-wrapper {
	  background-color: #ffffff;
	  .popup-header {
	    @include flex();
	    font-size: 28rpx;
	    color: #666;
	    border-bottom: 1px #f5f5f5 solid;
	    .popup-header-item {
	      height: 100rpx;
	      line-height: 100rpx;
	      padding: 0 30rpx;
	    }
	  }
	  .popup-content {
	    width: 100%;
	    padding: 30rpx;
	    box-sizing: border-box;
	    .popup-content-textarea {
	      height: 400rpx;
	      width: 100%;
	    }
	    .popup-content-count {
	      @include flex(flex-end);
	      font-size: 24rpx;
	      color: $c-9;
	    }
	  }
	}
</style>
