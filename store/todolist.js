

const todoListContract = {
namespaced : true,
state: () => ({
  contract: null,
  tasks: []
}),
mutations: {
  setTaks(state, tasks) {
    state.tasks = tasks;
  },
  setContract(state, contract) {
    state.contract = contract;
  }
},
actions: {},
getters: {}
}
export default todoListContract;