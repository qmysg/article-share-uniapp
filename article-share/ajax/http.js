export default ({name, data = {}}) => {
	return new Promise((resolve, reject) => {
		const loading = data.isLoading;
		delete data.isLoading
		//打开loading弹窗
		!loading && uni.showLoading({})
		
		uniCloud.callFunction({
			name,
			data,
			success({
				result
			}) {
				if (result.code === 0) {
					resolve(result.data)
				} else { //没有查询到数据
					uni.showToast({
						icon: "none",
						title: result.msg
					})
				}
			},
			fail(err) { //请求失败
				reject(err)
			},
			complete() {
				//关闭弹窗
				!loading &&uni.hideLoading()
			}
		})
	})
}
