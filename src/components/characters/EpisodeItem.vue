<template>
  <div class="episode-item">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{episodeItem.id}}. {{episodeItem.name}}</h5>
        <p class="card-text">{{episodeItem.air_date}}</p>
      </div>
    </div>
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
.episode-item, .card {
  height: 100%;
}
</style>