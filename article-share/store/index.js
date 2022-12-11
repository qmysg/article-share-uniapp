import Vue from 'vue'
import VueX from 'vuex'
import actions from './actions.js'
import mutations from './mutations'
import state from './state'

Vue.use(VueX)

export default new VueX.Store({
	state,
	actions,
	mutations
})