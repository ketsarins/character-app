<template>
  <header class="header py-3">
    <div class="row flex-nowrap justify-content-between align-items-center">
      <div class="col-4 pt-1"></div>
      <div class="col-4 text-center">
        <h2 class="header-logo text-dark">Rick and Morty</h2>
      </div>
      <div class="col-4 d-flex justify-content-end align-items-center">
        <a class="text-muted" href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="mx-3"
          >
            <circle cx="10.5" cy="10.5" r="7.5" />
            <line x1="21" y1="21" x2="15.8" y2="15.8" />
          </svg>
        </a>
        <!-- <a class="btn btn-sm btn-outline-secondary" href="#">Sign up</a> -->
        <b-button v-b-toggle.fillter-collapse variant="outline-success">Fillter</b-button>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: "app-header"
};
</script>
<style>
.header {
  line-height: 1;
  border-bottom: 1px solid #e5e5e5;
}
</style>