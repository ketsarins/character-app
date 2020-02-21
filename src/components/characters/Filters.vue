<template>
  <div class="character-filter">
    <b-collapse id="fillter-collapse" class="mt-2">
      <b-card>
        <div class="card-text">
          <b-card-group deck>
            <b-card
              border-variant="success"
              header-tag="header"
              header-bg-variant="success"
              header-text-variant="white"
            >
              <template v-slot:header>
                <h6 class="mb-0">Status</h6>
              </template>
              <b-form-group>
                <b-form-radio-group
                  id="radio-status"
                  v-model="statusSelected"
                  :options="status"
                  name="radio-status"
                ></b-form-radio-group>
              </b-form-group>
            </b-card>
            <b-card
              border-variant="success"
              header-tag="header"
              header-bg-variant="success"
              header-text-variant="white"
            >
              <template v-slot:header>
                <h6 class="mb-0">Gender</h6>
              </template>
              <b-form-group>
                <b-form-radio-group
                  id="radio-gender"
                  v-model="genderSelected"
                  :options="gender"
                  name="radio-gender"
                  :change="serchFilter"
                ></b-form-radio-group>
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
      genderSelected: "",
      gender: [
        { text: "All", value: "" },
        { text: "Female", value: "female" },
        { text: "Male", value: "male" },
        { text: "Genderless", value: "genderless" },
        { text: "Unknown", value: "unknown" }
      ],
      statusSelected: "",
      status: [
        { text: "All", value: "" },
        { text: "Alive", value: "alive" },
        { text: "Dead", value: "dead" },
        { text: "Unknown", value: "unknown" }
      ]
    };
  },
  methods: {
    serchFilter() {
      const parameters = {
        gender: this.genderSelected,
        status: this.statusSelected
      };
      this.$emit("filterData", parameters);
    }
  },
  watch: {
    // If selected status or gender changed have to call serchFilter()
    statusSelected: function() {
      this.serchFilter();
    },
    genderSelected: function() {
      this.serchFilter();
    }
  }
};
</script>
<style>
.custom-control-input:checked ~ .custom-control-label::before {
  border-color: #55a846;
  background-color: #55a846;
}
</style>