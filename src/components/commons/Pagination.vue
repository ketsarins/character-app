<template>
  <div class="ct-pagination">
    <div class="overflow-auto">
      <b-pagination size="md" :total-rows="totalItemsVal" v-model="currentPage" :per-page="perPageVal"></b-pagination>
      <p class="mt-3"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ct-pagination",
  props: {
    currentPageVal: Number,
    perPageVal: Number,
    totalItemsVal: Number
  },
  data() {
    return {
      currentPage: this.currentPageVal,
    };
  },
  methods: {
    goToPage(page) {
      // Passing current page to parent component.
      this.$emit("currentPage", page);
    }
  },
  watch: {
    // Watch if current page is changed then call goToPage() with new current page value.
    currentPage: function(newValue) {
      this.goToPage(newValue);
    }
  }
};
</script>