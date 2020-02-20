<template>
  <div id="app" class="container">
    <app-header></app-header>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
/* TODO:: Move this to be global style */
.m-b-sm {
  padding-bottom: 15px;
}

.m-t-sm {
  padding-top: 15px;
}
.m-t-md {
  padding-top: 20px;
}
</style>
