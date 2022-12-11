export default {
	userInfo: uni.getStorageSync('userInfo') || null,
	searchHistory:uni.getStorageSync('searchHistory') || [],
	labelList:uni.getStorageSync('labelList') || []   // 导航栏标签
}