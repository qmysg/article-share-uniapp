<template>
	<view class="home-container">
		<Nav-Bar></Nav-Bar>
		<!-- 选项卡 -->
		<Tab-Bar :labelList = "labelList"></Tab-Bar>
	</view>
</template>

<script>
	export default {
		onLoad() {
			this._initLabelList()
		},
		data(){
			return{
				labelList:[]
			}
		},
		methods:{
			_initLabelList(){
				uniCloud.callFunction({
					name:"get_label_list",
					success: (res) => {
						this.labelList = res.result.labelList
					}
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.container {
		@include flex()
		color:$base-color;
	}
</style>