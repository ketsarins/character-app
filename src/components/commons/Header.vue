<template>
  <header class="header py-3">
    <div class="row flex-nowrap justify-content-between align-items-center">
      <div class="col-4 pt-1">
        <b-button variant="success" v-if="!characterPage()" v-on:click="goToHomePage()">
          <b-icon-house></b-icon-house>&nbsp;Home
        </b-button>
      </div>
      <div class="col-4 text-center">
        <h2 class="header-logo text-dark">Rick and Morty</h2>
      </div>
      <div class="col-4 d-flex justify-content-end align-items-center">
        <b-button v-b-toggle.fillter-collapse variant="outline-success" v-if="characterPage()">
          <b-icon-filter></b-icon-filter>&nbsp;Fillter
        </b-button>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: "app-header",
  methods: {
    characterPage() {
      return this.$route.path === "/";
    },
    goToHomePage() {
      this.$router.push({name: "CharaterPage"});
    }
  }
};
</script>
<style>
.header {
  line-height: 1;
  border-bottom: 1px solid #55a846;
}
</style>