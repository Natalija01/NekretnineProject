import firebase from 'firebase';
import router from '@/router/index.js';

const state = {
  user: null,
  email: null,
  redirect: null,
  loading: false,
  error: null
};

const getters = {
  user(state) {
    return state.user;
  },
  getEmail(state) {
    return state.email;
  },
  redirect(state) {
    return state.redirect;
  },
  loading(state) {
    return state.loading;
  },
  getError(state) {
    return state.error;
  }
};

const mutations = {
  setUser(state, payload) {
    state.user = payload;
  },
  setEmail(state, payload) {
    state.email = payload;
  },
  setLoading(state, payload) {
    state.loading = payload;
  },
  setError(state, payload) {
    state.error = payload;
  },
  clearError(state) {
    state.error = null;
  }
};

const actions = {
  signInUser({ commit }, payload) {
    commit('setLoading', true);
    commit('clearError', false);
    firebase
      .auth()
      .signInWithEmailAndPassword(payload.email, payload.password)
      .then(user => {
        const newUser = {
          id: user.user.uid,
          email: user.user.email
        };
        commit('setUser', newUser);
        commit('setLoading', false);
        router.push('/dashboard');
      })
      .catch(err => {
        commit('setLoading', false);
        commit('setError', err);
      });
  },
  autoSignIn({ commit }, payload) {
    commit('setUser', { id: payload.uid });
  },
  signOut({ commit }) {
    commit('setLoading', true);
    firebase
      .auth()
      .signOut()
      .then(() => {
        router.push('/login');
        commit('setUser', '');
        commit('setLoading', false);
      });
  },
  isLoading({ commit }, payload) {
    commit('setLoading', payload);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
