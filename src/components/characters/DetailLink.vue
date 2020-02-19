
<template class="detail-link" v-slot:footer>
  <b-button href="#" variant="warning" size="sm">More {{link}}</b-button>
</template>
<script>
export default {
  name: "detail-link",
  props: ['link']
};
</script>