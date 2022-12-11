<template>
	<view class="nav-bar">
		<!-- 显示区域 -->
		<view class="nav-bar-top">
			<view :style="{height:statusHeight + 'rpx'}"></view>
			<!-- 当该组件作为应用使用时，展示回退按钮 -->
			<view class="return-icon" :style="{top:statusHeight + 'rpx'}" v-if="isSearch" @click="returnArticleList">
				<uni-icons type="back" size="22" color="#fff"></uni-icons>
			</view>
			<view @click="goSearchPage" class="nav-bar-content" :style="{marginRight:marginRight + 'rpx',marginLeft:isSearch?'20rpx':''}">
				<uni-icons type="search" color="#999"></uni-icons>
				<view v-if="!isSearch" class="nav-bar-search-txt">
					输入文章标题进行搜索
				</view>
				<input v-else type="text" class="search-input" v-model="searchVal" @confirm="changeInput" confirm-type="search" placeholder="输入文章标题进行搜索">
			</view>
		</view>
		<!-- 填充高度 -->
		<view :style="{height:statusHeight + 80+'rpx'}"></view>
	</view>
	
</template>
<script>
	export default {
		// name:"NavBar",
		props:{
			isSearch:{
				type:Boolean,
				default:false
			},
			parentVal:String
		},
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
				if(this.isSearch)return
				uni.navigateTo({
					url:'/pages/search/search'
				})
			},
			//返回文章列表界面
			returnArticleList(){
				// #ifdef H5
					uni.switchTab({
						url:'/pages/index/index'
					})
				// #endif
				
				// #ifndef H5
					uni.navigateBack()
				// #endif
			},
			//提交搜索数据
			changeInput(){
				this.$emit('sendSearchData')
			}
		},
		computed:{
			//搜索框内写入数据时，将数据发送至父组件
			searchVal:{
				get(){
					return this.parentVal
				},
				set(val){
					this.$emit('updateVal',val)
					if(!val){
						//清空搜索内容时，以显示的内容应清空
						this.$emit('sendSearchData')
					}
				}
			}
		}
	}
</script>
<style lang="scss" scoped>
	@import './css/Nav-Bar.scss'
</style>
