<template>
	<view class="nav-bar">
		<!-- 显示区域 -->
		<view class="nav-bar-top">
			<view :style="{height:statusHeight + 'rpx'}"></view>
			<view @click="goSearchPage" class="nav-bar-content" :style="{marginRight:marginRight + 'rpx'}">
				<uni-icons type="search" color="#999"></uni-icons>
				<view class="nav-bar-search-txt">
					输入文章标题进行搜索
				</view>
			</view>
		</view>
		<!-- 填充高度 -->
		<view :style="{height:statusHeight + 80+'rpx'}"></view>
	</view>
	
</template>
<script>
	export default {
		name:"NavBar",
		created(){
			this.getSystemInfo()
		},
		data(){
			return{
				statusHeight:20 ,//状态栏高度
				marginRight:0,//导航栏右外边距
			};
		},
		methods:{
			//动态设置导航栏高度
			getSystemInfo(){
			const systemInfo = uni.getSystemInfoSync()
			systemInfo.statusBarHeight && (this.statusHeight = systemInfo.statusBarHeight * 2);
			// #ifdef MP-WEIXIN
			//针对微信小程序的胶囊做处理
				const menuButtonInfo = uni.getMenuButtonBoundingClientRect()
				this.statusHeight = menuButtonInfo.top * 2
				this.marginRight = menuButtonInfo.width * 2
			// #endif
			},
			//跳转到搜索页
			goSearchPage(){
				uni.navigateTo({
					url:'/pages/search/search'
				})
			}
		}
	}
</script>
<style lang="scss">
	@import './css/Nav-Bar.scss'
</style>
