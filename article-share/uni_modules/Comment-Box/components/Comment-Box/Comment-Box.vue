<template>
  <view class="comment-box">
    <view class="comment-header">
      <view class="comment-header-logo">
        <image :src="commentData.author.avatar" mode="aspectFill"></image>
      </view>
      <view class="comment-header-info">
        <view class="title" v-if="!commentData.is_reply">
          {{commentData.author.author_name}}
        </view>
		<view class="title" v-else>
		  {{commentData.author.author_name}}
		  <text class="reply-text">回复</text>
		  {{commentData.to}}
		</view>
        <view class="">
          <uni-dateformat :date="commentData.create_time" format="yyyy-MM-dd hh:mm:ss"></uni-dateformat>
        </view>
      </view>
    </view>
    <!-- 内容部分 -->
    <view class="comment-content">
      <view class="">
        {{commentData.comment_content}}
      </view>
      <view class="comment-info">
        <view class="comment-button" @click="commentReply({comment:commentData,isReply})">
          回复
        </view>
      </view>
	  <!-- 子回复-->
	  <view class="comment-reply-list" v-for="item in commentData.replyArr" :key="item.comment_id">
	  	<CommentBox :isReply="true" :commentData="item" @commentReply="commentReply"></CommentBox>
	  </view>
    </view>
  </view>
</template>
<script>
	import CommentBox from '@/uni_modules/Comment-Box/components/Comment-Box/Comment-Box.vue'
export default {
	name:"CommentBox",
	components:{
		CommentBox
	},
  props :{
    commentData:Object,
	isReply:{
		type:Boolean,
		default:false
	}
  },
  methods:{
	  commentReply(data){
		  this.checkedisLogin()
		  if(data.isReply){
			  data.comment.reply_id = data.comment.comment_id;
			  data.comment.comment_id = this.commentData.comment_id
		  }
		  this.$emit("commentReply",data)
	  }
  }
}
</script>
<style  lang="scss">
@import "./css/Comment-Box.scss";
</style>
