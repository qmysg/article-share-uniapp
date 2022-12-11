<template>
	<view>
		<view v-if="!articleList.length" class="no-data">暂无收藏的文章</view>
		<List-Card v-else :item="item" v-for="item in articleList" :key="item._id"></List-Card>
		
	</view>
</template>

<script>
	export default {
		onLoad() {
			this._getUserArticleList()
		},
		data() {
			return {
				articleList:[]
			}
		},
		methods: {
			//获取用户发布过的文章
			async _getUserArticleList(){
				const list = await this.$http.get_my_article_list({userId:this.userInfo._id})
				this.articleList = list;
			}
		}
	}
</script>

<style lang="scss">
.no-data {
        height: 400rpx;
        line-height: 400rpx;
        width: 100%;
        text-align: center;
        font-size: 24rpx;
        color: #666;
    }
</style>
