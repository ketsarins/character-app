<template>
  <div class="episode-item">
    <div v-if="!isShow">
      <b-spinner small label="Small Spinner" type="grow" variant="success"></b-spinner>
    </div>
    <div class="card" v-if="isShow">
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
      episodeItem: [],
      isShow: false
    };
  },
  methods: {
    getEpisodeItem(url) {
      CharacterService.getCharacterEpisodes(url)
        .then(response => {
          this.episodeItem = response;
          this.isShow = Object.keys(this.episodeItem).length !== 0;
        })
        .catch(reason => {
          console.log(reason);
          // TODO:: Handle error.
          this.isShow = false;
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
.episode-item,
.card {
  height: 100%;
}
</style>