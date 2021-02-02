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
        styles: {
            styles_red: ['red_light','circle','opacity_circle'],
            styles_yellow: ['yellow_light','circle','opacity_circle'],
            styles_green: ['green_light','circle','opacity_circle'],
            color: '',
            lastColor: ''
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
    }
})

export default store;