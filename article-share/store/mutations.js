export default {
	updateUserInfo(state,userInfo){
		uni.setStorageSync('userInfo',userInfo)
		state.userInfo = userInfo
	},
	//添加历史搜索记录
	setHistory(state,val){
		const list = state.searchHistory
		//已存在，不需要重复添加
		if((list.length>0) && list.findIndex(item=>item === val)>-1)return
		list.unshift(val)
		uni.setStorageSync('searchHistory',list)
		state.searchHistory = list
	},
	//删除所有历史记录
	removeHistory(state){
		state.searchHistory = [];
		uni.removeStorageSync('searchHistory')
	},
	//设置导航栏选项卡
	setLabelList(state,labelList){
		uni.setStorageSync('labelList',labelList);
		state.labelList = labelList
	}
}