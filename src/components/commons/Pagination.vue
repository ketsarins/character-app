<template>
  <div class="ct-pagination">
    <div class="overflow-auto">
      <b-pagination
        class="text-success"
        size="md"
        :total-rows="totalItemsVal"
        v-model="currentPage"
        :per-page="perPageVal"
      ></b-pagination>
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
      // Avoid mutating 'currentPageVal' in prop directly becase the value will be overwritten
      // whenever the parent component re-renders.
      currentPage: 1
    };
  },
  methods: {
    goToPage(page) {
      // To reflect changes of current page to go to top of the page.
      this.$nextTick(() => {
        window.scrollTo(0, 0);
      });

      // Passing current page to parent component.
      this.$emit("currentPage", page);
    }
  },
  watch: {
    // Watch if currentPage is changed then call goToPage() with new current page value.
    currentPage: function(newValue) {
      this.goToPage(newValue);
    },
    // Watch currentPageVal in prop (value from parent component) if changed then updated current page.
    currentPageVal: function(newValue) {
      this.currentPage =
        this.currentPage === newValue ? this.currentPage : newValue;
    }
  }
};
</script>