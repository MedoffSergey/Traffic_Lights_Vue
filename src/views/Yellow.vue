<template>
  <div class="wrapper">
    <div @click="changeOnRed" class="red circle">
    </div>

    <div @click="changeOnYellow" class="yellow circle">
      <h1>{{timer}}</h1>
    </div>

    <div @click="changeOnGreen" class="green circle">
    </div>
  </div>
</template>

<script>
import store from '../Store/store.js'

export default {
  data() {
    return {
      timer: localStorage.getItem('yellowTimer') || store.yellowTimer
    }
  },
  methods: {
    changeOnRed() {
      this.$router.push('/red')
    },
    changeOnYellow() {
      this.$router.push('/yellow')
    },
    changeOnGreen() {
      this.$router.push('/green')
    },
    changeRoute() {
      if (this.timer == 0 && store.color == 'green') {
        this.$router.push('/red')
      }
      if (this.timer == 0 && store.color == 'red') {
        this.$router.push('/green')
      }
    }
  },
  mounted() {
    setInterval(() => {
       if(localStorage.getItem('yellowTimer') == 0) localStorage.removeItem('yellowTimer')
       if (this.timer > 0) {
          this.timer--
          localStorage.setItem('yellowTimer',this.timer)
      }

    }, 1000)
  },
  updated() {
    this.changeRoute()
  },
}
</script>

<style scoped>
.red {
  background-color: #ff000040;
}

.yellow {
  background-color: yellow;
  box-shadow: 0px 0px 15px 5px yellow;
}

.green {
  background-color: #39ab1380;
}

h1 {
  color: #b5b500;
}
</style>
