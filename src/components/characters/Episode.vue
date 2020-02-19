<template>
  <div class="episode-info">
    I am episode
  </div>
</template>
<script>
// import CharacterService from "@/services/api/CharacterService";

export default {
  name: "episode",
  methods: {
    updateEpisodeList() {
      console.log('Hello-episodesList', this.episodesList);
    }
  },
  props: {
    episodesList: Array
  },
  watch: {
    // Property to invoke the updateEpisodeList(). To ensure that when the episodesList is changed 
    // updateEpisodeList() function will be invoked.
    'episodesList': function () {
      this.updateEpisodeList();
    }
  }
};
</script>
<style>