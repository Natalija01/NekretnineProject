import firebase from 'firebase';
import router from '../../router';
// import router from '@/router/index.js';

const state = {
	nekretnine: [],
	nekretnina: {},
	lastVisible: {},
	size: false
};

const getters = {
	getNekretnine(state) {
		return state.nekretnine;
	},
	getNekretnina(state) {
		return state.nekretnina;
	},
	getSize(state) {
		return state.size;
	}
};

const mutations = {
	setNekretnine(state, payload) {
		state.nekretnine = payload;
	},
	setNekretnina(state, payload) {
		state.nekretnina = payload;
	},
	setLastVisible(state, payload) {
		state.lastVisible = payload;
	},
	addToNekretnine(state, payload) {
		state.nekretnine.push(payload);
	},
	setSize(state, payload) {
		state.size = payload;
	}
};

const actions = {
	takeAllNekretnine({ commit }, payload) {
		commit('setLoading', true);
		var array = [];
		var query = payload
			? firebase.firestore().collection('nekretnine').startAfter(state.lastVisible).limit(3)
			: firebase.firestore().collection('nekretnine').limit(3);
		query.get().then((snapshot) => {
			if (snapshot.docs.length > 0) {
				commit('setSize', true);
			} else {
				commit('setSize', false);
			}
			commit('setLastVisible', snapshot.docs[snapshot.docs.length - 1]);
			snapshot.docs.forEach((item) => {
				array.push(item.data());
				if (payload) commit('addToNekretnine', item.data());
			});
			if (!payload) commit('setNekretnine', array);
			commit('setLoading', false);
		});
	},
	sendToNekretninaView({ commit }, payload) {
		console.log(payload);
		commit('setNekretnina', payload);
		router.push('/nekretnina');
	},
	novaNekretnina({ commit }, payload) {
		commit('setLoading', true);
		firebase.firestore().collection('nekretnine').add(payload);
		commit('setLoading', false);
	}
	// addNekretnine({ commit }, payload) {
	// 	var array = payload;
	// 	array.forEach((element) => {
	// 		firebase.firestore().collection('nekretnine').add(element);
	// 	});
	// 	commit('setNekretnine', array);
	// }
};

export default {
	state,
	getters,
	mutations,
	actions
};
