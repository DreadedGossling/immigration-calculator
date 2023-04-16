// states
export const state = () => ({
  details: [],
})


// getters
export const getters = {

  details: state => {
    return state.details;
  },
}

// mutations
export const mutations = {

  setDetails(state, details) {
    state.details = details
  },
}

export const actions = {

  async getDetails({ commit }) {
    const details = await this.$content("studentHistory").fetch();
    console.log(details)
    commit('setDetails', details)
  },
}