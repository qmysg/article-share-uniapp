<template>
	<view class="list-scroll-container">
		<scroll-view scroll-y="true" class="list-scroll" @scrolltolower="loadMore">
			<view>
				<List-Card @saveSearchHistory="$emit('saveSearchHistory')" :item="item" v-for="item in articleList" :key="item._id"></List-Card>
			</view>
			<uni-load-more v-if="isShowLoadMore&&(articleList.length === 0 || articleList.length> 7)"
				:status="loadData.loading || 'loading'"></uni-load-more>

		</scroll-view>

	</view>
</template>
<script>
	export default {

		name: "ListItem",
		data() {
			return {}
		},
		props: {
			isShowLoadMore:{
				type:Boolean,
				default:true
			},
			articleList: {
				type: Array,
				default () {
					return []
				}
			},
			loadData: {
				type: Object,
				default () {
					return {
						loading: "loading"
					}
				}
			}
		},
		methods: {
			loadMore() {
				this.$emit("loadMore")
			}
		}
	}
</script>
<style lang="scss">
	.list-scroll-container {
		height: 100%;

		.list-scroll {
			overflow: hidden;
			height: 100%;
			box-sizing: border-box;
		}
	}
</style>
