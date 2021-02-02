<template>
    <div>
        <Timer />
        <router-view :styles="styles"/> 
    </div>
</template>

<script>

import Timer from './Timer'

export default {

    data () {
        return {
            styles: {
                styles_red: ['red_light','circle','opacity_circle'],
                styles_yellow: ['yellow_light','circle','opacity_circle'],
                styles_green: ['green_light','circle','opacity_circle'],
                color: '',
                lastColor: ''
            },
        }
    },

    components: {
        Timer
    }

}

</script>

<style>

#traffic_light {
    background-color:rgb(14, 13, 13);
    width: 170px;
    height: 490px;
    margin-top: 30px;
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

.timer {
    display: flex;
    justify-content:space-evenly;
    background-color:rgb(14, 13, 13);
    width: 170px; 
    height: 170px; 
    margin-top: 70px;
    margin-bottom: 20px;
    border-radius: 25px;
    color:floralwhite;
    font-size: 400%;
    font-weight: bolder;
}

.timer span {
    margin-top: 25%;
}
</style>