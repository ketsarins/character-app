<template src='./character.html'></template>
<script>
import CharacterService from "@/services/api/CharacterService"
import DetailLink from './DetailLink';

export default {
  name: "character",
  data() {
    return {
      loading: true, // TODO:: Implement loading.
      characterData: []
    };
  },
  mounted() {
    this.getCharacters();
  },
  methods: {
    // Get characters information from service and set characters data to the list.
    getCharacters() {
      CharacterService.getAllCharacters()
        .then(character => {
          if (character && character.results) {
            this.characterData = character.results;
          }
        })
        .catch(reason => {
          console.log(reason);
          // TODO:: Handle error.
        })
        .finally(() => {
          this.loading = false;
        });
    }
  }
};
</script>
<style>
.card-deck .card {
  position: relative;
}
/* TODO:: Move this to be global style */
.m-b-sm {
  padding-bottom: 15px;
}

.m-t-sm {
  padding-top: 15px;
}
</style>