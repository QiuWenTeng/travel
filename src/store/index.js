import vue from 'vue'
import Vuex from 'vuex'

vue.use(Vuex)

export default new Vuex.Store({
	state: {
		currentcity: '北京'
	},
	mutations: {
		changeCity: function(state, val){
			state.currentcity = val;
		}
	}
})