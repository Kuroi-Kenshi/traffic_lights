<template>
    <div id="traffic_light">
        <div :class="styles.styles_red"></div>
        <div :class="styles.styles_yellow"></div>
        <div :class="styles.styles_green"></div> 
    </div>
</template>

<script>

import {mapGetters} from 'vuex'
import {mapActions} from 'vuex'

export default {
    props: ['styles'],
    data () {
        return {
            blink: false,
        }
    },

    computed: {
        ...mapGetters([
            'lastColorState', 
            'timeState',
            'pathState'
        ]),
        switchPath: function(){
            return this.switchPathAction(this.$route.path)
        },

    },

    methods: {
        ...mapActions([
            'switchLastColorAction', 
            'switchColorAction',
            'switchPathAction'
        ]),

    },

    created: function() {
        this.switchPathAction(this.$route.path)
    },

    watch: {
        pathState (value) {

            if (value === '/red') {
                this.switchLastColorAction('red')
                this.styles.styles_red.splice(2,1)
                setTimeout(() => {
                    this.styles.styles_red.push('opacity_circle')
                    this.styles.styles_yellow.splice(2,1)
                    this.$router.push({ path: '/yellow' })

                }, 10000)

                setTimeout(() => {
                    let blink_interval = setInterval(() => {
                        this.blink = !this.blink
                        if (this.blink === true){
                            this.styles.styles_red.push('opacity_circle')
                        }else {
                            this.styles.styles_red.splice(2,1)
                        }
                    }, 500)

                    setTimeout(() => {
                        if (this.blink === true){
                            this.styles.styles_red.splice(2,1)
                        }
                        clearInterval(blink_interval)
                    }, 3500)

                }, 6500)
               
            }

            if (value === '/yellow' && this.lastColorState === 'red') {

                this.styles.styles_yellow.splice(2,1)
                setTimeout(() => {
                    this.styles.styles_yellow.push('opacity_circle')
                    this.styles.styles_green.splice(2,1)
                    this.$router.push({ path: '/green' })
                }, 3000)
            }

            if (value === '/yellow' && this.lastColorState === 'green') {
                this.styles.styles_yellow.splice(2,1)
                setTimeout(() => {
                    this.styles.styles_yellow.push('opacity_circle')
                    this.styles.styles_red.splice(2,1)
                    this.$router.push({ path: '/red' })
                }, 3000)
            }

            if (value === '/yellow' && this.lastColorState === '') {
                this.styles.styles_yellow.splice(2,1)
                setTimeout(() => {
                    this.styles.styles_yellow.push('opacity_circle')
                    this.styles.styles_green.splice(2,1)
                    this.$router.push({ path: '/green' })
                }, 3000)
            }

            if (value === '/green') {
                this.styles.styles_green.splice(2,1)
                this.switchLastColorAction('green')
                setTimeout(() => {
                    this.styles.styles_green.push('opacity_circle')
                    this.styles.styles_yellow.splice(2,1)
                    this.$router.push({ path: '/yellow' })
                }, 15000)

                setTimeout(() => {

                    let blink_interval = setInterval(() => {
                        this.blink = !this.blink
                        if (this.blink === true){
                            this.styles.styles_green.push('opacity_circle')
                        }else {
                            this.styles.styles_green.splice(2,1)
                        }
                    }, 500)
                        
                    setTimeout(() => {
                        if (this.blink === true){
                            this.styles.styles_green.splice(2,1)
                        }
                    clearInterval(blink_interval)
                    }, 3500)

                }, 11500)
            }
        }  
    },
}

</script>


<style scoped>

#traffic_light {
    background-color:rgb(14, 13, 13);
    width: 170px;
    height: 490px;
    margin-top: 40px;
    padding-top: 1px;
    box-sizing: border-box;
    border-radius: 25px;
}

.red_light {
    background-color: red;
}

.yellow_light {
    background-color: yellow;

}

.green_light {
    background-color: green;

}

.circle {
    border-radius: 50%;
    margin: 10px;
    width: 150px;
    height: 150px;
    
}

.opacity_circle {
    opacity: 0.07;
}
</style>