<template>
	<view>
		<view class="comment-content-container" v-for="item in commentList" :key="item.comment_id">
			<Comment-Box :commentData="item" @commentReply="commentReply"></Comment-Box>
		</view>
		<uni-load-more :contentText='{contentdown: " 上拉显示更多",contentrefresh: "正在加载..." ,contentnomore: "没有更多评论了" }'
			:status="loadingState"></uni-load-more>
		<Comment-Masker @closePopup="showPopup=$event" @sendPopupData="_sendPopupData" :showPopup="showPopup">
		</Comment-Masker>
	</view>
</template>

<script>
	export default {
		name: "commentLists",
		onLoad(props) {

			this.articleId = props.articleId
			this._getCommentList()
		},
		//触底加载更多评论
		onReachBottom() {
			if (this.loadingState === 'no-more') return
			this.loadingState = 'loading'
			this.page++;
			this._getCommentList()
		},
		data() {
			return {
				articleId: '', //文章id
				commentList: [], //评论列表
				loadingState: "more", //加载状态
				//分页信息
				pageSize: 5,
				page: 1,
				showPopup: false,
				replyData: {}
			}
		},
		methods: {
			//获取评论
			async _getCommentList() {

				const list = await this.$http.get_comments({
					articledId: this.articleId,
					pageSize: this.pageSize,
					page: this.page
				});
				if (list.length === 0) {
					this.loadingState = 'no-more'
				}
				const oldList = JSON.parse(JSON.stringify(this.commentList))
				oldList.push(...list)
				this.commentList = oldList
			},
			//回复评论
			commentReply(data) {
				this.replyData = {
					comment_id: data.comment.comment_id,
					is_reply: data.isReply
				};
				data.comment.reply_id && (this.replyData.reply_id = data.comment.reply_id)
				this.openCommentMasker()
			},
			//打开弹窗
			async openCommentMasker() {
				await this.checkedisLogin()
				this.showPopup = true
			},
			//向后端发送评论数据
			async _sendPopupData(content) {
				const {
					msg
				} = this.$http.update_comment({
					userId: this.userInfo._id,
					articleId: this.articleId,
					content,
					...this.replyData
				})
				uni.showToast({
					title: msg
				})
				this.showPopup = false;
				//重新获取评论
				this.replyData = {}
				this.page = 1;
				this.loadingState = 'more'
				this.commentList = [];
				this._getCommentList()
			}
		}
	}
</script>

<style lang="scss">
	.comment-content-container {
		padding-left: 20rpx;
	}
</style>
