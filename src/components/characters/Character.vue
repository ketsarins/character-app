<template src='./character.html'></template>
<script>
import CharacterService from "@/services/api/CharacterService";

export default {
  name: "character",
  data() {
    return {
      loading: true, // TODO:: Implement loading.
      characterData: [],
      ctFilter: []
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
    },
    filterCharacters(parameters) {
      // TODO:: get characters by more parameters.
      CharacterService.getCharactersWithFilters(parameters)
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
</style>