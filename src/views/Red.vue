<template>
  <div class="wrapper">
    <div @click="changeOnRed" class="red circle">
      <h1>{{timer}}</h1>
    </div>

    <div @click="changeOnYellow" class="yellow circle">
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
      timer: localStorage.getItem('redTimer') || store.redTimer
    }
  },
  methods: {
    changeOnRed() {                           
      this.$router.push('/red')
    },
    changeOnYellow() {
      store.color = 'red'
      this.$router.push('/yellow')
    },
    changeOnGreen() {
      this.$router.push('/green')
    },

    changeRoute() {
      if (this.timer <= 0) {
        store.color = 'red'
        this.$router.push('/yellow')
      }
    }
  },
  mounted() {
    setInterval(() => {
      if(localStorage.getItem('redTimer') == 0) localStorage.removeItem('redTimer')
      if (this.timer > 0) {
        this.timer--
        localStorage.setItem('redTimer',this.timer)
      }
    }, 1000)
  },
  updated() {
    this.changeRoute()
  }
}
</script>

<style scoped>
.red {
  background-color: #c50101;
  box-shadow: 0px 0px 15px 5px red;
}

.yellow {
  background-color: #ffff0078;
}

.green {
  background-color: #39ab1380;
}

h1 {
  color: red;
}
</style>
