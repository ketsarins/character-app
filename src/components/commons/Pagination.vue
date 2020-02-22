<template>
  <div class="ct-pagination">
    <div class="overflow-auto">
      <b-pagination size="md" :total-rows="totalItemsVal" v-model="currentPage" :per-page="perPageVal"></b-pagination>
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
      currentPage: 1,
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
    },
    // Watch current page value from parent component if changed then updated current page.
    currentPageVal: function(newValue) {
      this.currentPage = this.currentPage === newValue? this.currentPage : newValue;
    }
  }
};
</script>