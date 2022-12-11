import ajax from '../../http.js'

//获取导航信息
export const get_label_list = data => ajax({
	name:"get_label_list",
	data
})

//获取文章信息
export const get_artcile_list = data => ajax({
	name:"get_artcile_list",
	data
})

//收藏或取消收藏文章
export const update_save_like = data => ajax({
	name:"update_save_like",
	data
})

//获取搜索内容
export const get_search_list = data => ajax({
	name:"get_search_list",
	data
})

//修改用户收藏
export const update_label_ids = data => ajax({
	name:"update_label_ids",
	data
})

//获取文章内容
export const get_article_detail = data =>ajax({
	name:"get_article_detail",
	data
})

//发布评论
export const update_comment = data =>ajax({
	name:"update_comment",
	data
})

//获取评论
export const get_comments = data => ajax({
	name:"get_comments",
	data
})