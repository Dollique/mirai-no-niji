export const state = () => ({
  navOpen: false
})

export const mutations = {
  toggle(state) {
      state.navOpen = !state.navOpen
  }
}
