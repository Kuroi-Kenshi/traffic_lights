import Vue from 'vue'
import Vuex from 'vuex'
//import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const store = new Vuex.Store({
   // plugins: [createPersistedState()],
    state: {
        lastColor: '',
        color: '',
        time: Number,
        path: '',
        styles: {
            styles_red: ['red_light','circle','opacity_circle'],
            styles_yellow: ['yellow_light','circle','opacity_circle'],
            styles_green: ['green_light','circle','opacity_circle'],
        },
    },
    mutations: {
        switchLastColor(state, lastcolor){
            state.lastColor = lastcolor
        },
        switchColor(state, color){
            state.color = color
        },
        setTime(state, time){
            state.time = time
        },
        setPath(state, path){
            state.path = path
        }
    },
    actions: {
        switchLastColorAction(ctx, lastcolor) {
            this.state.lastColor = lastcolor

            ctx.commit('switchLastColor', lastcolor)
        },
        switchColorAction(ctx, color) {
            this.state.color = color

            ctx.commit('switchColor', color)
        },
        switchTimeAction(ctx, time) {
            this.state.time = time

            ctx.commit('setTime', time)
        },
        switchPathAction(ctx, path) {
            this.state.path = path

            ctx.commit('setPath', path)
        }
    },
    getters: {
        lastColorState(state) {
            return state.lastColor
        },
        colorState(state) {
            return state.color
        },
        timeState(state) {
            return state.time
        },
        pathState(state) {
            return state.path
        },
    }
})

export default store;