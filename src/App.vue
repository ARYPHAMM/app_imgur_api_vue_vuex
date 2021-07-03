<template>
  <div >
 <AppHeader></AppHeader>
 <div class="container ui">

    <router-view></router-view>
 </div>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
export default {
  name: 'App',
  components:{
    AppHeader,
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
