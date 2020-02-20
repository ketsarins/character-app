<template>
  <div class="episode-info">
    <div v-bind:key="item" v-for="item in list">
      <episode-item :url="item">
      </episode-item>
    </div>
  </div>
</template>
<script>
import EpisodeItem from './EpisodeItem'

export default {
  name: "episode",
  components: {
    EpisodeItem
  },
  data() {
    return {
      list: []
    };
  },
  methods: {
    updateEpisodeList() {
      this.list = this.episodesList;
    }
  },
  props: {
    episodesList: Array
  },
  watch: {
    // Property to invoke the updateEpisodeList(). To ensure that when the episodesList is changed
    // updateEpisodeList() function will be invoked.
    episodesList: function() {
      this.updateEpisodeList();
    }
  }
};
</script>
<style>