'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	const {userInfoId,label_ids} = event
	db.collection("user").doc(userInfoId).update({
		label_ids
	})
	return {
		code:0,
		msg:"标签修改成功"
	}
};
