import ajax from '../../http.js'

//获取应用版本
export const get_current_version = data =>ajax({
	name:"get_current_version",
	data
})