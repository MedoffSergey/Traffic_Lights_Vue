<template>
  <div class="wrapper">
    <div @click="changeOnRed" class="red circle">
    </div>

    <div @click="changeOnYellow" class="yellow circle">
    </div>

    <div @click="changeOnGreen" class="green circle" :class="classToggle ? 'active' : 'noActive'">
      <h1>{{timer}}</h1>
    </div>
  </div>
</template>

<script>
import store from '../Store/store.js'

export default {
  data() {
    return {
      timer: localStorage.getItem('greenTimer') || store.greenTimer ,
      classToggle: false
    }
  },
  methods: {
    changeOnRed() {
      this.$router.push('/red')
    },
    changeOnYellow() {
      store.color = 'green'
      this.$router.push('/yellow')
    },
    changeOnGreen() {
      this.$router.push('/green')
    },
    changeRoute() {
      if (this.timer <= 0) {
        store.color = 'green'
        localStorage.removeItem('greenTimer')
        this.$router.push('/yellow')

      }
    },
    changeColor() {
      if (this.timer == 3) {
        this.classToggle = true
      }
      if (this.timer == 2) {
        this.classToggle = false
      }
      if (this.timer == 1) {
        this.classToggle = true
      }
    }
  },
  mounted() {
    setInterval(() => {
      if(localStorage.getItem('greenTimer') == 0) localStorage.removeItem('greenTimer')
      if (this.timer > 0) {
        this.timer--
        localStorage.setItem('greenTimer',this.timer)
      }
    }, 1000)
  },
  updated() {
    this.changeRoute()
    this.changeColor()
  }
}
</script>

<style scoped>
.red {
  background-color: #ff000040;
}

.yellow {
  background-color: #ffff0078;
}

.green {
  background-color: green;
  box-shadow: 0px 0px 15px 5px green;
}

h1 {
  color: #39ab1380;
}

.active {
  background-color: #39ab1380;
}

.noActive {
  background-color: green;
}
</style>
