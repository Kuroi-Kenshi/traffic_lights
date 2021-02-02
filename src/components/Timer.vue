<template>
    <div class="timer"> 
        <span>{{ timeState }}</span>
    </div>
</template>

<script>

import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'

export default {
    data () {
        return {
        }
    },
    computed: {
        ...mapGetters(['colorState']),
        ...mapGetters(['timeState']),
    },
    methods: {
        ...mapActions(['switchTimeAction']),
        ...mapActions(['switchColorAction']),

    },
    mounted: function() {
    //    window.onload = this.switchColorAction('test')
        
             
    },
    watch: {

        colorState: function() {
            if (this.colorState === 'red') {
                this.switchTimeAction(10.0)
                
                let redTimer = setInterval(() => {
                    this.switchTimeAction((parseFloat(this.timeState) - 0.1).toFixed(1))
                }, 100)

                setTimeout(() => {
                    clearInterval(redTimer)
                }, 10000)
              
            }

            if (this.colorState === 'yellow') {
                this.switchTimeAction(3.0)

                let yellowTimer = setInterval(() => {
                    this.switchTimeAction((parseFloat(this.timeState) - 0.1).toFixed(1))
                }, 100)

                setTimeout(() => {
                    clearInterval(yellowTimer)
                }, 3000)
            }

            if (this.colorState === 'green') {
                this.switchTimeAction(15.0)

                let greenTimer = setInterval(() => {
                    this.switchTimeAction((parseFloat(this.timeState) - 0.1).toFixed(1))
                }, 100)

                setTimeout(() => {
                    clearInterval(greenTimer)
                }, 15000)
            }
        }
    },

}
</script>


<style>

#traffic_light {
    background-color:rgb(14, 13, 13);
    width: 170px;
    height: 490px;
    margin-top: 60px;
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