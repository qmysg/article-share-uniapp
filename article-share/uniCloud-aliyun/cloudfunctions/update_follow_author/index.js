'use strict';
const db = uniCloud.database()
const dbComd = db.command;
exports.main = async (event, context) => {
	//event为客户端上传的参数
	const {authorId,userId} = event
	const user = await db.collection('user').doc(userId).get();
	const authorLikesIds = user.data[0].author_likes_ids;
	let returnMsg = '';
	let author_ids = null;
	if(authorLikesIds.includes(authorId)){
		author_ids = dbComd.pull(authorId)
		returnMsg = '取消关注'
	}else{
		author_ids = dbComd.addToSet(authorId)
		returnMsg = '关注'
	}
	 await db.collection('user').doc(userId).update({
		 author_likes_ids:author_ids
	 })
	//返回数据给客户端
	return {
		code:0,
		data:{
			msg:returnMsg
		}
	}
};
