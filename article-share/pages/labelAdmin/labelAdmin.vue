<template>
  <view class="label-container">
    <view class="label-box">
      <view class="label-header">
        <view class="label-title">我的标签</view>
        <view class="label-edit" @click="startEdit">{{this.isEdit? '完成' :'编辑'}}</view>
      </view>
      <view class="label-content">
        <view  class="label-content-item" v-for="(item,index) in selfLabelList" :key="item._id">
          {{item.name}}
          <uni-icons @click="deleteSelfItem(item)" v-if="isEdit" class="icon-close" type="clear" size="20" color="red"></uni-icons>
        </view>
        <view v-if="!selfLabelList.length" class="no-data">当前没有数据</view>
      </view>
    </view>
    <view class="label-box">
      <view class="label-header">
        <view class="label-title">标签推荐</view>
      </view>
      <view class="label-content">
        <view @click="changeSelfLabelList(item)" class="label-content-item" v-for="(item,index) in recommendLabelList" :key="item._id">
          {{item.name}}
        </view>
        <view v-if="!recommendLabelList.length" class="no-data">当前没有数据</view>
      </view>
    </view>
  </view>
</template>

<script>
	import {mapState} from 'vuex'
export default {
  data () {
    return {
      isEdit: false,//是否是编辑状态
	  labelIds:[]
    }
  },
  watch:{
	  //获取用户保存的标签
	  userInfo:{
		  immediate:true,//一开始获取一次
		  handler(newVal,oldVal){
			  this.labelIds = this.userInfo.label_ids
		  }
	  }
  },  
  methods: {
    // 编辑按钮事件
    startEdit () {
      this.isEdit && this._updateLabel();
      this.isEdit = !this.isEdit;
    },
    // 修改标签
    async _updateLabel() {
		const label_ids = this.selfLabelList.map(item=>item._id)
		const {msg} = this.$http.update_label_ids({userInfoId:this.userInfo._id,label_ids})
		uni.showToast({
			title:msg
		})
		this.updateUserInfo({...this.userInfo,label_ids})
    },
	//添加收藏
	changeSelfLabelList(item){
		if(!this.isEdit)return
		this.labelIds.push(item._id)
	},
	//删除收藏
	deleteSelfItem(item){
		this.labelIds = this.labelIds.filter(id=>id!==item._id)
	}
  },
  computed:{
	  ...mapState(['labelList']),
	  //用户选中的标签
	  selfLabelList(){
		  return this.labelList.filter(item=>this.labelIds.includes(item._id))
	  },
	  //未选中的标签
	  recommendLabelList(){
		  return this.labelList.filter(item=>!this.labelIds.includes(item._id) && item._id)
	  }
  }
}
</script>

<style lang="scss">
@import "./css/labelAdmin.scss";
</style>
