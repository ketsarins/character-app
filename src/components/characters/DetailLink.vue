
<template class="detail-link" v-slot:footer>
  <b-button v-on:click="showDetails(id)" variant="warning" size="sm">More {{id}}</b-button>
</template>
<script>
export default {
  name: "detail-link",
  props: ["id"],
  methods: {
    showDetails(id) {
      console.log("--id---", id);
      this.$router.push({name: "CharacterInfo", params: { id }});
      
    }
  }
};
</script>