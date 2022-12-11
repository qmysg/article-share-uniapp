'use strict';
const db = uniCloud.database()
const dbComd = db.command;
exports.main = async (event, context) => {
	const {userId,articleId} = event
	
	const user = await db.collection('user').doc(userId).get();
	const thumbs_up_article_ids = user.data[0].thumbs_up_article_ids
	
	let returnMsg = '';
	let thumbs_ids = null;
	let thumbsNumber = 0;
	
	if(thumbs_up_article_ids.includes(articleId)){
		thumbs_ids = dbComd.pull(articleId)
		thumbsNumber = -1
		returnMsg = '您取消了点赞'
	}else{
		thumbs_ids = dbComd.addToSet(articleId)
		thumbsNumber = 1
		returnMsg = '点赞成功'
	}
	 await db.collection('user').doc(userId).update({
		 thumbs_up_article_ids:thumbs_ids
	 });

	//修改文章点赞数量
	await db.collection('article').doc(articleId).update({
		thumbs_up_count:dbComd.inc(thumbsNumber)
	})
	
	return {
		code:0,
		data:{
			msg:returnMsg
		}
	}
};
