'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	//event为客户端上传的参数
	const {
		userId,
		filePath
	} = event
	const user = await db.collection('user').doc(userId).get();
	const oldUrl = user.data[0].avatar;
	try {
		await uniCloud.deleteFile({
			fileList: [oldUrl]
		})
	} catch (e) {
		console.log(e);
	}

	//更新用户头像
	await db.collection('user').doc(userId).update({
		avatar: filePath
	})

	//更新文章里面作者头像
	const id = user.data[0].id;
	await db.collection('article').where({
		'author.id': id
	}).update({
		'author.avatar': filePath
	})
	//返回数据给客户端
	return {
		code: 0,
		data: {
			msg: "修改头像成功"
		}
	}
};
