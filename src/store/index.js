import { createStore } from 'vuex'
import toyStore from './toy-module.js'

// create a store instance

const store = createStore({
    strict: true,
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        toyStore
    },
})

export default store