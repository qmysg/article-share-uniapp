'use strict';
const db = uniCloud.database()
const dbCmd = db.command
exports.main = async (event, context) => {
	const {articleId,userId} = event;
	let newArticledArr=null
	let msg = '';
	const userInfo = await db.collection('user').doc(userId).get()
	const articledIdArr = userInfo.data[0].article_likes_ids
	if(articledIdArr.includes(articleId)){
		//删除
		newArticledArr = dbCmd.pull(articleId)
		msg = '取消收藏'
	}else{
		//添加
		newArticledArr = dbCmd.addToSet(articleId)
		msg="收藏成功"
	}
	//修改用户收藏文章的状态
	await db.collection('user').doc(userId).update({
		article_likes_ids:newArticledArr
	})
	//重新获取用户信息
	const updateUser = await db.collection('user').doc(userId).get()
	return {
		code:0,
		data:{
			msg,
			newUserInfo:updateUser.data[0]
		}
	}
};
