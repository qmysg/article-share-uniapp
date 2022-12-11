'use strict';

const db = uniCloud.database()
exports.main = async (event, context) => {
	const {classify,page=1,pageSize=10} = event;
	let matchObj = {};
	if(classify !== '全部'){
		matchObj = {classify}
	}
const list = await db.collection('article')
.aggregate()
.match(matchObj)
.project({
	content:0
})
.skip(pageSize * (page-1))//跳过指定数量的文章
.limit(pageSize)
.end()
const {total} = await  db.collection('article').where(matchObj).count()
	return {
		code:0,
		msg:"数据获取成功",
		data:{
			articleList:list.data,
			total
		}
	}
};
