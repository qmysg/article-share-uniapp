<template>
	<view class="follow-container">
		<view class="follow-tab">
			<view class="follow-tab-box">
				<view class="follow-tab-item" :class="{active:currentIndex===0}"@click="currentIndex = 0">文章</view>
				<view class="follow-tab-item" :class="{active:currentIndex===1}"@click="currentIndex = 1">作者</view>
			</view>
		</view>
		<!-- 内容切换区域 -->
		<view class="follow-list-container">
			<swiper class="follow-list-swiper" :current="currentIndex" @change="currentIndex = $event.detail.current">
				<swiper-item>
					<List-Item :isShowLoading="isShowLoading" :articleList="articleList" v-if="articleList.length">
					</List-Item>
					<view v-if="!articleList.length" class="no-data">暂无收藏的文章</view>
				</swiper-item>
				<swiper-item>
					<Author-List :authorList="authorList" v-if="authorList.length"></Author-List>
					<view v-if="!authorList.length" class="no-data">暂无关注的作者</view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>


<script>
	export default {
		name:"follow",
		onLoad() {
			// #ifdef MP-WEIXIN
			if (!this.userInfo) {
				uni.redirectTo({
					url: '/pages/userInfo/login/login'
				})
				return
			}
			// #endif
			uni.$on('updateArticle',()=>{
				this._getFollowArticle('noloading')
			})
			uni.$on('updateFollowAuthor',()=>{
				this._getFollowAuthor('noloading')
			})
			this._getFollowArticle()
			this._getFollowAuthor()
		},
		data() {
			return {
				currentIndex: 0,
				articleList: [],//关注的文章
				isShowLoading: false,
				authorList:[],//关注的作者
			}
		},
		methods: {
			//获取关注的文章
			async _getFollowArticle(isLoading){
				const list = await this.$http.get_follow_article({userId:this.userInfo._id,isLoading})
				this.articleList = list
			},
			//获取关注的作者
			async _getFollowAuthor(isLoading){
				const list = await this.$http.get_follow_author({userId:this.userInfo._id,isLoading})
				this.authorList = list
			}
		}
	}
</script>

<style lang="scss">
	@import "./css/follow.scss";
</style>
