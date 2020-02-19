<template src='./character.html'></template>
<script>
import CharacterService from "../../services/api/CharacterService";

export default {
  name: "character",
  data() {
    return {
      loading: true,
      characterData: []
    }
  },
  created() {
    console.log("Hello");
    CharacterService.getAllCharacters()
    .then(character => {
        if (character && character.results) {
            this.characterData = character.results;
        }
    })
    .catch(reason => {
        console.log(reason);
    })
    .finally(() => {
        this.loading = false;
    })
  }
};
</script>
<style>
.card-deck .card {
  position: relative;
}
.m-b-sm {
  padding-bottom: 15px;
}

.m-t-sm {
  padding-top: 15px;
}
</style>