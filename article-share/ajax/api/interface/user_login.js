import ajax from '../../http.js'

//用户登录
export const user_login = data => ajax({
	name:"user_login",
	data
})

//关注作者
export const update_follow_author = data => ajax({
	name:"update_follow_author",
	data
})

//点赞文章
export const update_ompliments = data=> ajax({
	name:"update_ompliments",
	data
})

//获取用户收藏的文章
export const get_follow_article = data => ajax({
	name:"get_follow_article",
	data
})

//获取用户关注的作者
export const get_follow_author = data => ajax({
	name:"get_follow_author",
	data
})

//获取用户发布过的文章
export const get_my_article_list = data => ajax({
	name:"get_my_article_list",
	data
})

//用户提交意见反馈
export const update_feedback = data => ajax({
	name:"update_feedback",
	data
})

//修改用户头像
export const update_user_avatar = data => ajax({
	name:"update_user_avatar",
	data
})