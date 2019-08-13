import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex)


const store = new vuex.Store({
  state: { //唯一数据源，我理解为声明全局变量
    count:1,
    paperShow:true
  },
  getters: {//针对state数据的过滤，
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    }
  },
  mutations: { //逻辑处理，但Mutation 必须是同步函数
    increment (state) {
      // 变更状态
      state.count++,
      state.paperShow = !state.paperShow;
    }
  },
  actions: {//Action 类似于 mutation,Action 提交的是 mutation，而不是直接变更状态;Action 可以包含任意异步操作.
    setIncrement (context) {
      context.commit('increment')
    }
  }

})
export default store;
