<template>
	<swiper :current="activeIndex" @change="changCurrentIndex" class="swiper-container">
		<swiper-item v-for="(item,index) in labelList" :key="item._id">
			<view class="swiper-item uuni-bg-red">
				<List-Item :loadData="loadData[index]" :articleList="articleData[index]" @loadMore="watchLoadMore">
				</List-Item>
			</view>
		</swiper-item>
	</swiper>
</template>
<script>
	export default {
		name: "ArticleList",
		created() {		
			this.labelList.length && this._getArticleList(this.activeIndex)		
		},
		watch: {
			labelList(newVal, OldVal) {
				if(JSON.stringify(newVal)===JSON.stringify(OldVal))return;
				this.articleData= {}
				this.loadData= {}
				this._getArticleList(this.activeIndex)
			}
		},
		props: {
			labelList: Array,
			activeIndex: Number
		},
		data() {
			return {
				articleData: {}, //文章列表
				loadData: {},
				pageSize: 6, //每页数据量
			}
		},
		methods: {
			//触底加载更多数据
			watchLoadMore() {
				//全部数据已加载
				if (this.articleData[this.activeIndex].length === this.loadData[this.activeIndex].total) {
					this.loadData[this.activeIndex] = {
						...this.loadData[this.activeIndex],
						...{
							loading: "noMore",
							page: this.loadData[this.activeIndex].page
						}
					}
					this.$forceUpdate()
					return
				}
				this.loadData[this.activeIndex].page++
				this._getArticleList(this.activeIndex)

			},
			//滑动滑块后将当前滑块的下标传递给父组件
			changCurrentIndex(e) {
				
				const {
					current
				} = e.detail;
				this.$emit("changCurrentIndex", current);
				//缓存浏览过的数据
				if (!this.articleData[current] || this.articleData[current].length == 0) {
					this._getArticleList(current)
				}
			},
			//获取数据
			async _getArticleList(currentIndex) {
				//指定每一个分类里面的页面数据
				if (!this.loadData[currentIndex]) {
					this.loadData[currentIndex] = {
						page: 1,
						loading: "loading",
						total: 0
					}
				}
				const {
					articleList,
					total
				} = await this.$http.get_artcile_list({
					classify: this.labelList[currentIndex].name,
					page: this.loadData[currentIndex].page,
					pageSize: this.pageSize
				});
				let oldList = this.articleData[currentIndex] || [];
				oldList.push(...articleList) //追加数据	
				this.$set(this.articleData, currentIndex, oldList)
				this.loadData[currentIndex].total = total;
			}
		}
	}
</script>
<style lang="scss">
	.swiper-container {
		height: 1000rpx;

		.swiper-item {
			height: 100%;
			overflow: hidden;
		}
	}
</style>
