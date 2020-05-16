const moduleA = {
	state: {
		text: 'helloB',
	},
	mutations: {
		addText(state, txt) {
			state.text += txt
		},
	},
	actions: {
		setText({ commit }) {
			commit('addText', 'zou yu hong!')
		},
	},
	getters: {
		getText(state) {
			return state.text + 'zzzz'
		},
	},
}

export default moduleA
