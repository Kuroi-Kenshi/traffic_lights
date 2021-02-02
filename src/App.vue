<template>
  <div id="app">
    <Wrapper />
  </div>
</template>

<script>

import Wrapper from './components/Wrapper'

export default {

  name: 'App',
  data () {
    return {
    }
  },

  components: {
    Wrapper
  },

}

</script>

<style scoped>

* {
    margin: 0;
    padding: 0;
}

#app {
    display: flex;
    justify-content: center;
    
}

</style>
