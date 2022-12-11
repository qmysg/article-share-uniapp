<template>
	<view class="home-container">
		<Nav-Bar></Nav-Bar>
		<!-- 选项卡 -->
		<Tab-Bar :labelList="labelList" :activeIndex="activeIndex" @chaneActiveIndex="chaneActiveIndex"></Tab-Bar>
		<!-- 文章列表 -->

		<Article-List class="list-container" :labelList="labelList" :activeIndex="activeIndex"
			@changCurrentIndex="chaneActiveIndex"></Article-List>

	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex';
	export default {
		onLoad() {
			this._initLabelList()
		},
		data() {
			return {
				activeIndex: 0, //选项卡下标
			}
		},
		methods: {
			async _initLabelList() {
				if (this.labelList.length) return
				const labelList = await this.$http.get_label_list()
				this.setLabelList([{
					name: "全部"
				}, ...labelList])
			},
			//选项卡改变时，更改对应的下标
			chaneActiveIndex(index) {
				this.activeIndex = index
			},
			...mapMutations(['setLabelList'])
		},
		computed: {
			labelList() {
				//导航栏根据是否登录显示不同的标签
				if (this.userInfo) {
					return [...this.$store.state.labelList.slice(0, 1), ...this.$store.state.labelList.filter(item => this
						.userInfo.label_ids.includes(item._id))]
				} else {
					return this.$store.state.labelList
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	page {
		display: flex;
		height: 100%;
	}

	.home-container {
		flex: 1;
		overflow: hidden;
		box-sizing: border-box;
		@include flex(flex-start, column);
		align-items: inherit;
	}

	.list-container {
		flex: 1;
		box-sizing: border-box;
	}
</style>
