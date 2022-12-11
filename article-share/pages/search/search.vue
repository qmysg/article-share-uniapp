<template>
	<view class="search-container">
		<!-- 搜索导航 -->
		<Nav-Bar @sendSearchData="_sendSearchData" :isSearch="isSearch" :parentVal="parentVal" @updateVal="parentVal=$event"></Nav-Bar>
		<view class="search-wrapper" v-if="isShowHistory">
			<!-- 没有搜索时显示的内容 -->
			<view  class="search-history-container">
				<!-- 头部内容 -->
				<view class="search-header">
					<text class="history-text">搜索历史</text>
					<text class="history-clean" @click="removeHistory">清空</text>
				</view>
				<!-- 内容 -->
				<view class="search-history-content" v-if="searchHistory.length">
					<view @click="openHistory(item)" class="history-content-item" v-for="(item,index) in searchHistory" :key="index">
						{{item}}
					</view>
				</view>
				<!-- 没有内容 -->
				<view class="no-data" v-else>
					当前没有搜索历史
				</view>
			</view>
		</view>
		<!-- 搜索时显示的内容 -->
		<view v-else class="search-list-container">
			<List-Item @saveSearchHistory="saveSearchHistory" :isShowLoadMore="false" :articleList="searchList" v-if="searchList.length"></List-Item>
			<view v-else class="no-data" >
				没有搜索到相关数据
			</view>
		</view>
	</view>
</template>

<script>
	import {mapMutations,mapState} from 'vuex'
	export default {
		name:"search",
		data() {
			return {
				isSearch:true,
				searchList:[],//搜索到的数据
				parentVal:'',//搜索内容
				isShowHistory:true,//是否显示历史记录
			}
		},
		methods: {
			//发送数据到云函数
			async _sendSearchData(){
				this.isShowHistory = false;
				if(!this.parentVal){
					//无内容
					this.isShowHistory = true
					this.searchList = [];
					return;
				}
				const {articleList} = await this.$http.get_search_list({searchVal:this.parentVal});
				this.searchList = articleList
			},
			//保存历史记录
			saveSearchHistory(){
				this.setHistory(this.parentVal)
			},
			//根据历史记录搜索
			openHistory(val){
				this.parentVal = val;
				this._sendSearchData()
			},
			...mapMutations(['setHistory','removeHistory'])
		},
		computed:{
			...mapState(['searchHistory'])
		}
	}
</script>

<style lang="scss">
 @import './css/search.scss';
</style>
