let app = new Vue({
    el: '#app',
    data: {
        obj: [
            {color: 'red', time: 10000},
            {color: 'yellow', time: 3000},
            {color: 'green', time: 15000},
        ],
        styles_red: ['red_light','circle','opacity_circle'],
        styles_yellow: ['yellow_light','circle','opacity_circle'],
        styles_green: ['green_light','circle','opacity_circle'],
    },

    created: function() {
        this.test()
    },
    
    methods: {
        test(){
            // for (let i = 0; i <= this.obj.length-1; i++) {
            //     if (this.obj[i].color === 'red') {
            //         this.styles_red.splice(2,1)
            //         console.log('Color Red')
            //         this.timer()
            //     } else if(this.obj[i].color === 'yellow') {
            //         this.styles_red.splice(2,1)
            //         console.log('Color Yellow')
            //     } else{
            //         this.styles_red.splice(2,1)
            //         console.log('Color Green')
            //     }
            // }
          
                this.styles_red.splice(2,1)

                setInterval(() => {
                    this.styles_red.push('opacity_circle')
                    this.styles_yellow.splice(2,1)

                    setInterval(() => {
                        this.styles_yellow.push('opacity_circle')
                        this.styles_green.splice(2,1)
                    }, 3000)

                }, 10000)
            
        },
    }
    
})