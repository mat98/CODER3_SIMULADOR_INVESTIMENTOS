<template>
  <v-app>
    <Header />
    <v-content>
      <v-container>
        <transition name="slide" mode="out-in">
          <router-view></router-view>
        </transition>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Header from './core/components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  },
  created() {
    // chama o action para inicializar o estoque de ações
    this.$store.dispatch('initStocks')
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

@keyframes slide-in {
  from {transform: translateY(-30px); opacity: 0}
  from {transform: translateY(0px); opacity: 1}
}

@keyframes slide-out {
  from {transform: translateY(0px); opacity: 1}
  from {transform: translateY(-30px); opacity:0}
}

.slide-enter-active {
  animation: slide-in 0.3s ease;
}

.slide-leave-active {
  animation: slide-out 0.3s ease;
}
</style>
