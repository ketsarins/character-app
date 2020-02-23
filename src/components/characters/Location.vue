<template>
  <div class="location">
    <b-card>
      <b-card-text>
        <p>Name: {{locationData.name}}</p>
        <p>Type: {{locationData.type}}</p>
      </b-card-text>
    </b-card>
  </div>
</template>
<script>
import LocationService from "@/services/api/LocationService";

export default {
  name: "location",
  props: {
    data: Object
  },
  data() {
    return {
      locationData: []
    }
  },
  methods: {
    // TODO:: Get location
    location(data) {
      LocationService.getLocation(data.url)
        .then(response => {
          this.locationData = response;
        })
        .catch(reason => {
          console.log(reason);
          // TODO:: Handle error.
        });
    }
  },
  watch: {
    data: function(newVal) {
      this.location(newVal);
    }
  }
};
</script>