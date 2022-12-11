<template>
	<view class="article-detail-container">
		<view class="detail-title">
			{{ articleData.title }}
		</view>
		<view class="detail-header">
			<view class="detail-logo">
				<image :src="articleData.author.avatar" mode="aspectFill"></image>
			</view>
			<view class="detail-header-content">
				<view class="detail-header-content-title">
					{{ articleData.author.aurhor_name }}
				</view>
				<view class="detail-header-content-info">
					<text>{{ articleData.create_time }}</text>
					<text>{{ articleData.browse_count }} 浏览</text>
					<text>{{ articleData.thumbs_up_count }} 赞</text>
				</view>
			</view>
			<button @click="_followAuthor" type="default"
				class="detail-header-button">{{isFollowAuthor ? "取消关注" :"关注"}}</button>
		</view>
		<view class="detail-content-container">
			<view class="detail-html">
				<uParse v-if="content" :content="content"> </uParse>
			</view>
			<!-- 评论内容 -->
			<view class="detail-comment">
				<view class="comment-title">
					最新评论
				</view>
				<view class="comment-content-container" v-for="item in commentList" :key="item.comment_id">
					<Comment-Box :commentData="item" @commentReply="commentReply"></Comment-Box>
				</view>
				<view class="no-data" v-if="!commentList.length">暂无评论</view>
			</view>
		</view>

		<!-- 发表评论区域 -->
		<view class="detail-bottom">
			<view class="input-container" @click="openCommentMasker">
				<text>谈谈你的看法</text>
				<uni-icons type="compose" size="16" color="#f07373"></uni-icons>
			</view>
			<view class="detail-bottom-icons">
				<view class="detail-bottom-icon-box" @click="goCommentPage">
					<uni-icons type="chat" size="22" color="#f07373"></uni-icons>
				</view>
				<view class="detail-bottom-icon-box">
					<Save-Likes size="22" :articleId="articleData._id"></Save-Likes>
				</view>
				<view class="detail-bottom-icon-box">
					<uni-icons @click="_updateCompliments" :type="isCompliments ? 'hand-up-filled':'hand-up'" size="22"
						color="#f07373"></uni-icons>
				</view>
			</view>
		</view>
		<!-- 评论 -->
		<Comment-Masker @closePopup="showPopup=$event" @sendPopupData="_sendPopupData" :showPopup="showPopup">
		</Comment-Masker>
	</view>
</template>

<script>
	import {
		marked
	} from 'marked'
	import uParse from '@/components/u-parse/u-parse.vue'
	export default {
		name: "articleDetail",
		onLoad(...options) {
			this.articleData = this.$Router.currentRoute.query
			this._getArticleDetail();
			this._getCommentList()
		},
		components: {
			uParse
		},
		data() {
			return {
				articleData: null, //预渲染数据
				showPopup: false, //是否要评论
				commentList: [], //评论列表
				replyData: {}, //评论回复
			};
		},
		methods: {
			//获取文章内容
			async _getArticleDetail() {
				const data = await this.$http.get_article_detail({
					article_id: this.articleData._id,
				});
				this.articleData = data;
			},
			//打开弹窗，编写评论
			async openCommentMasker() {
				await this.checkedisLogin()
				this.showPopup = true
			},
			//向后端发送评论内容
			async _sendPopupData(content) {
				const {
					msg
				} = this.$http.update_comment({
					userId: this.userInfo._id,
					articleId: this.articleData._id,
					content,
					...this.replyData
				})
				uni.showToast({
					title: msg
				})
				this.showPopup = false;
				//重新获取评论
				this.replyData = {}
				this._getCommentList()
			},
			//获取文章评论
			async _getCommentList() {
				const res = await this.$http.get_comments({
					articledId: this.articleData._id
				});
				this.commentList = res
			},
			//针对某条评论进行回复
			commentReply(data) {
				this.replyData = {
					comment_id: data.comment.comment_id,
					is_reply: data.isReply
				};
				data.comment.reply_id && (this.replyData.reply_id = data.comment.reply_id)
				this.openCommentMasker()
			},
			//改变关注状态
			async _followAuthor() {
				const {
					msg
				} = await this.$http.update_follow_author({
					authorId: this.articleData.author.id,
					userId: this.userInfo._id
				})
				uni.showToast({
					title: msg
				})
				//更新store状态
				let followIds = [...this.userInfo.author_likes_ids]
				if (followIds.includes(this.articleData.author.id)) {
					followIds = followIds.filter(item => item != this.articleData.author.id)
				} else {
					followIds.push(this.articleData.author.id)
				}
				this.updateUserInfo({
					...this.userInfo,
					author_likes_ids: followIds
				})
				uni.$emit('updateFollowAuthor')
			},
			//改变点赞状态
			async _updateCompliments() {
				const {
					msg
				} = await this.$http.update_ompliments({
					articleId: this.articleData._id,
					userId: this.userInfo._id
				})

				uni.showToast({
					title: msg
				})

				//更新store状态
				let thumbsIds = [...this.userInfo.thumbs_up_article_ids]
				if (thumbsIds.includes(this.articleData._id)) {
					thumbsIds = thumbsIds.filter(item => item != this.articleData._id)
					this.articleData.thumbs_up_count -= 1
				} else {
					thumbsIds.push(this.articleData._id)
					this.articleData.thumbs_up_count += 1
				}
				this.updateUserInfo({
					...this.userInfo,
					thumbs_up_article_ids: thumbsIds
				})
			},
			//跳转到评论页
			goCommentPage(){
				uni.navigateTo({
					url:`/pages/commentList/commentList?articleId=${this.articleData._id}`
				})
			}
		},
		computed: {
			content() {
				try {
					return marked(this.articleData.content)
				} catch (e) {
					//TODO handle the exception
					return null
				}
			},
			//是否关注作者
			isFollowAuthor() {
				try {
					return this.userInfo && this.userInfo.author_likes_ids.includes(this.articleData.author.id)
				} catch (e) {
					//TODO handle the exception
					return false
				}

			},
			//是否对文章进行点赞
			isCompliments() {
				try {
					return this.userInfo && this.userInfo.thumbs_up_article_ids.includes(this.articleData._id)
				} catch (e) {
					//TODO handle the exception
					return false
				}
			}
		}
	};
</script>

<style lang="scss">
	@import "./css/acricleDetail.scss";
</style>
