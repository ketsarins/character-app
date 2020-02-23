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
