
<template>
  <div class="character-info m-b-sm m-t-sm row">
    <div class="col-sm-12 col-md-12">
      <div class="ct-image m-b-sm">
        <b-img
          class="rounded-circle profile-image"
          :src="characterInfo.image"
          fluid
          :alt="characterInfo.name"
        ></b-img>
      </div>
      <div class="ct-name col-md-12">
        <h3>{{characterInfo.name}}</h3>
        <span class="status text-uppercase">
          <strong>Status:</strong>
          <!-- TODO:: Move to new component-->
          <template v-if="characterInfo.status === 'Alive'">
            <b-badge pill variant="success">{{characterInfo.status}}</b-badge>
          </template>
          <template v-else-if="characterInfo.status === 'Dead'">
            <b-badge pill variant="danger">{{characterInfo.status}}</b-badge>
          </template>
          <template v-else>
            <b-badge pill variant="secondary">{{characterInfo.status}}</b-badge>
          </template>
        </span>
      </div>
      <div class="ct-more-info m-t-sm">
        <b-card>
          <div class="row">
            <div class="d-flex flex-column bd-highlight col-xs-12 col-md-4">
              <strong class="text-uppercase">species</strong>
              <span>{{characterInfo.species}}</span>
            </div>
            <div class="d-flex flex-column bd-highlight col-xs-12 col-md-4">
              <strong class="text-uppercase">gender</strong>
              <span>{{characterInfo.gender}}</span>
            </div>
            <div class="d-flex flex-column bd-highlight col-xs-12 col-md-4">
              <strong class="text-uppercase">type</strong>
              <span v-if="characterInfo.type">{{characterInfo.type}}</span>
              <span v-if="!characterInfo.type">-</span>
            </div>
          </div>
          <div class="ct-more-info-tabs m-t-md">
            <b-tabs class="m-t-sm" content-class="mt-3" fill>
              <b-tab title="EPISODES" active>
                <div class="ct-episodes">
                  <episode :episodesList="characterInfo.episode"></episode>
                </div>
              </b-tab>
              <b-tab title="MORE DETAILS">
                <div class="ct-more-info"></div>
              </b-tab>
            </b-tabs>
          </div>
        </b-card>
      </div>
    </div>
  </div>
</template>
<script>
import CharacterService from "@/services/api/CharacterService";

export default {
  name: "character-info",
  components: {
    Episode: () => import("./Episode")
  },
  data() {
    return {
      characterInfo: []
    };
  },
  created() {
    if (this.$route.params && this.$route.params.id) {
      const characterId = this.$route.params.id;
      CharacterService.getCharacterById(characterId)
        .then(characterInfo => {
          this.characterInfo = characterInfo;
        })
        .catch(reason => {
          console.log(reason);
          // TODO:: Handle error.
        });
    }
  }
};
</script>
<style>
.character-info {
  text-align: center;
}
.ct-image .profile-image {
  width: 10rem;
}
.ct-more-info-tabs .nav-tabs {
  border-bottom: 1px solid #55a846;
}
.ct-more-info-tabs .nav-tabs .nav-link.active {
  border-color: #55a846 #55a846 #fff;
  color: #55a846;
  font-weight: 600;
}
.ct-more-info-tabs .nav-item a {
  color: #495057;
}
</style>