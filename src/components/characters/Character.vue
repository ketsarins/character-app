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
        if (character) {
            this.characterData = character;
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