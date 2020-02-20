<template>
  <div class="episode-item">
    <b-card :title="episodeItem.name">
      <b-card-text>
        {{episodeItem.id}}
        {{episodeItem.air_date}}
      </b-card-text>
    </b-card>
  </div>
</template>
<script>
import CharacterService from "@/services/api/CharacterService";

export default {
  name: "episode-item",
  data() {
    return {
      episodeItem: []
    };
  },
  methods: {
    getEpisodeItem(url) {
      CharacterService.getCharacterEpisodes(url)
        .then(response => {
          this.episodeItem = response;
        })
        .catch(reason => {
          console.log(reason);
          // TODO:: Handle error.
        });
    }
  },
  props: ["url"],
  created() {
    this.getEpisodeItem(this.url);
  }
};
</script>
<style>