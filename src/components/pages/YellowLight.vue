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
            color: this.styles.color,
            lastColor: ''
        }
    },

    created: function() {
        this.styles.styles_yellow.splice(2,1)
        this.color = 'yellow'
        this.switchColorAction(this.color)
        // beforeRouteEnter(to, from, next) {
        //     console.log('сейчас будем получать данные...');

        //     store.dispatch('updateItems')
        // }
    },

    computed: {
        ...mapGetters(['colorState']),
        ...mapGetters(['lastColorState'])
    },

    methods: {
       ...mapActions(['switchColorAction']),

    },

    watch: {
      color (value) {

        if (value === 'yellow' && this.lastColorState === 'red') {
            setTimeout(() => {
                this.styles.styles_yellow.push('opacity_circle')
                this.styles.styles_green.splice(2,1)
                this.$router.push({ path: '/green' })
            }, 3000)
        }

        if (value === 'yellow' && this.lastColorState === 'green') {
            setTimeout(() => {
                this.styles.styles_yellow.push('opacity_circle')
                this.styles.styles_red.splice(2,1)
                this.$router.push({ path: '/red' })
            }, 3000)
        }

        if (value === 'yellow' && this.lastColorState === '') {
            setTimeout(() => {
                this.styles.styles_yellow.push('opacity_circle')
                this.styles.styles_green.splice(2,1)
                this.$router.push({ path: '/green' })
            }, 3000)
        }
      
      }  
    }
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