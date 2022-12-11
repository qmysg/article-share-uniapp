'use strict';
const db = uniCloud.database();
const $ = db.command.aggregate;
exports.main = async (event, context) => {
	//event为客户端上传的参数
	const {
		userId
	} = event
	const userInfo = await db.collection('user').doc(userId).get();
	const author_likes_ids = userInfo.data[0].author_likes_ids;

	const list = await db.collection('user')
		.aggregate()
		.addFields({
			is_like: $.in(['$id', author_likes_ids])
		})
		.project({
			loginName:false,
			password:false
		})
		.match({
			is_like: true
		})
		.end()

	//返回数据给客户端
	return {
		code: 0,
		msg: "请求成功",
		data: list.data
	}
};
