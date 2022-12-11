const requireApi = require.context('.',true,/.js$/);

let moudle = {};

requireApi.keys().forEach((key,index)=>{
	if (key == './index.js') return
	Object.assign(moudle,requireApi(key))
})

export default moudle