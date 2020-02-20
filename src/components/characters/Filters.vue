<template>
  <div class="character-filter">
    <b-collapse id="fillter-collapse" class="mt-2">
      <b-card>
        <div class="card-text">
          <b-card-group deck>
            <b-card header-tag="header">
              <template v-slot:header>
                <h6 class="mb-0">Status</h6>
              </template>
              <b-form-group>
                <b-form-checkbox-group v-model="statusSelected" :options="status" name="status"
                @change="serchFilter">

                </b-form-checkbox-group>
                <!-- <span>Selected: {{statusSelected}}</span> -->
              </b-form-group>
            </b-card>
            <b-card header-tag="header">
              <template v-slot:header>
                <h6 class="mb-0">Gender</h6>
              </template>
              <b-form-group>
                <b-form-checkbox-group v-model="genderSelected" :options="gender" name="gender" @change="serchFilter"></b-form-checkbox-group>
                <!-- <span>Selected: {{genderSelected}}</span> -->
              </b-form-group>
            </b-card>
          </b-card-group>
        </div>
      </b-card>
    </b-collapse>
  </div>
</template>
<script>
export default {
  name: "ct-filter",
  data() {
    return {
      genderSelected: [], // TODO:: Change to radio inputs
      gender: [
        { text: "Female", value: "female" },
        { text: "Male", value: "male" },
        { text: "Genderless", value: "genderless" },
        { text: "Unknown", value: "unknown" }
      ],
      statusSelected: [],
      status: [
        { text: "Alive", value: "alive" },
        { text: "Dead", value: "dead" },
        { text: "Unknown", value: "unknown" }
      ]
    }
  },
  methods: {
    serchFilter() {
      // TODO:: Send more parameters to get characters.
      this.$emit('filterData', this.statusSelected);
    }
  }
};
</script>