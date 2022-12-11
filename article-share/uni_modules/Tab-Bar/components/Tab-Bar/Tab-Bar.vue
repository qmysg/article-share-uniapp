<template>
	<view class="tab">
		<!-- 滚动区域 -->
		<scroll-view scroll-x="true" class="tab-scroll" :scroll-with-animation="true" :scroll-into-view="currentIndex">
			<view class="tab-scroll-box">
				<view :id="`item${index}`" @click="chaneActiveIndex(index)" :class="{active:activeIndex === index}"
					class="tab-scroll-item" v-for="(item,index) in labelList" :key="item.id">
					{{item.name}}
				</view>
			</view>

		</scroll-view>
		<!-- 图标 -->
		<view class="tab-icon" @click="goLabelAdmin">
			<uni-icons type="gear" size="26" color="666"></uni-icons>
		</view>
	</view>
</template>
<script>
	export default {
		name: "TabBar",
		props: {
			labelList: Array,
			activeIndex: Number
		},
		watch: {
			activeIndex(index) {
				this.currentIndex = `item${index}`
			}
		},
		data() {
			return {
				currentIndex: ""
			}
		},
		methods: {
			//将改变的选项卡的下标传递给父组件
			chaneActiveIndex(index) {
				this.$emit('chaneActiveIndex', index)
			},
			//打开标签页
			async goLabelAdmin() {
				//用户是否登录
				await this.checkedisLogin();
				uni.navigateTo({
					url: "/pages/labelAdmin/labelAdmin"
				})
			}
		}
	}
</script>
<style lang="scss" scoped>
	@import './css/Tab-Bar.scss'
</style>
