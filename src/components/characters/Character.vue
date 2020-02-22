<template src='./character.html'></template>
<script>
import CharacterService from "@/services/api/CharacterService";

export default {
  name: "character",
  data() {
    return {
      loading: true, // TODO:: Implement loading.
      characterData: [],
      ctFilter: {},
      currentPage: 1,
      perPage: 20,
      totalItems: 0
    };
  },
  created() {
    this.getCharacters();
  },
  methods: {
    // Get all characters information from service and set characters data to the list.
    getCharacters() {
      CharacterService.getAllCharacters()
        .then(character => {
          if (character && character.results) {
            this.characterData = character.results;
            this.totalItems = character.info.count;
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
    // Set pagination and call API to get specific page by current page that get from pagination component.
    goToPage(page) {
      let parameters = {
        page: page
      };
      // Set current page to be what it is in pagination component.
      this.currentPage = page;
      this.filterCharacters(parameters);
    },
    filterCharacters(parameters) {
      this.setFilterParam(parameters);
      CharacterService.getCharactersWithFilters(this.ctFilter)
        .then(character => {
          if (character && character.results) {
            this.characterData = character.results;
            this.totalItems = character.info.count;
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
    setFilterParam(parameters) {
      // Set up current filter parameters to objects
      if (Object.keys(this.ctFilter).length === 0) {
        this.ctFilter = parameters;
      } else {
        // Checking if parameter is come from fillter component or not
        if (!Object.keys(parameters).find(key => key === "page")) {
          // Assign page to be first page
          Object.assign(this.ctFilter, { page: 1 });
        }
        Object.assign(this.ctFilter, parameters);
      }
    }
  }
};
</script>
<style>
.card-deck .card {
  position: relative;
}
</style>