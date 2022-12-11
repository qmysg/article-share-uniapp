<template>
	<view class="list-scroll-container">
		<scroll-view scroll-y="true" class="list-scroll">
			<view class="author-card" v-for="item in authorList" :key="item.id">
				<!-- 作者头像 -->
				<view class="author-card-img">
					<image :src="item.avatar" mode=""></image>
				</view>
				<!-- 卡片信息 -->
				<view class="author-card-container">
					<view class="author-card-title">
						{{item.author_name}}
					</view>
					<view class="author-card-buttom">
						<view class="author-card-left">
							{{item.professional}}
						</view>
						<view class="author-card-right">
							<view class="author-eash">
								发帖 {{item.article_ids.length}}
							</view>
							<view class="author-eash">
								粉丝 {{item.fans_count}}
							</view>
						</view>
					</view>
				</view>
			</view>

		</scroll-view>

	</view>
</template>
<script>
	export default {
		name: "AuthorList",
		data() {
			return {

			}
		},
		props: {
			authorList: Array
		}
	}
</script>
<style lang="scss">
	.list-scroll-container {
		height: 100%;
		.list-scroll {
			height: 100%;
			.author-card {
				@include flex(flex-start);
				align-items: flex-start;
				border-bottom: 1px solid #f5f5f5;
				padding: 20rpx 0;
				margin: 0 20rpx;
				box-sizing: border-box;

				.author-card-img {
					width: 80rpx;
					height: 80rpx;
					flex-shrink: 0;
					overflow: hidden;
					image {
						width: 100%;
						height: 100%;
					}
				}

				.author-card-container {
					flex-grow: 1;
					@include flex(space-between,column);
					align-items: flex-start;
					padding-left: 20rpx;
					height: 80rpx;
					.author-card-title {
						font-size: 28rpx;
						font-weight: bold;
						line-height: 1.2;
						color: #333;
					}

					.author-card-buttom {
						@include flex();
						width: 100%;
						line-height: 1.5;
						font-size: 24rpx;
						color: #666;
						.author-card-right {
							@include flex(flex-start);
							.author-eash {
								margin-left: 20rpx;
							}
						}
					}
				}
			}
		}
	}
</style>
