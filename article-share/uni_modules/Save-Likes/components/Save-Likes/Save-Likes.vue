<template>
	<view class="save-icons" @click.stop="_changeSaveStatus">
		<uni-icons color="#ff6600" :type=" isSave ? 'heart-filled': 'heart'" :size="size"></uni-icons>
	</view>
</template>
<script>
	export default {
		name:"SaveLikes",
		props:{
			articleId:String,
			size:{
				type:String,
				default:'20',
			}
		},
		methods:{
			//收藏文章
			async _changeSaveStatus(){
				//用户是否登录
			 await this.checkedisLogin()
				const {msg,newUserInfo} = await this.$http.update_save_like({
					articleId:this.articleId,
					userId:this.userInfo._id
				});
				uni.showToast({
					title:msg,
					icon:"none"
				})
				//将新的用户信息保存到本地
				this.updateUserInfo({...this.userInfo,...newUserInfo})
				uni.$emit('updateArticle')
			}
		},
		computed:{
			isSave(){
				try {
					return this.userInfo && this.userInfo.article_likes_ids.includes(this.articleId)
				} catch (e) {
					//TODO handle the exception
					return false
				}
				
			}
		}
	}
</script>
<style>
</style>
