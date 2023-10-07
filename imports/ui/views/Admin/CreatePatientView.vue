<template>
  <div class="custom-container">
    <h4>Creating A New Patient</h4>
    <div class="form-container">
      <b-form @submit="handleSubmit">
        <b-alert variant="success" :show="status.show">
          {{ status.text }}
        </b-alert>
        <b-row align-v="center" class="form-row">
          <b-col cols="3">
            <p for="mrn">MRN</p>
          </b-col>
          <b-col cols="9">
            <b-form-input
              required
              type="text"
              id="mrn"
              placeholder="MRN"
              v-model="formData.mrn"
            />
          </b-col>
          <b-col cols="3">
            <p for="mrn">SSN</p>
          </b-col>
          <b-col cols="9">
            <b-form-input
              required
              type="text"
              id="ssn"
              placeholder="SSN"
              v-model="formData.ssn"
            />
          </b-col>
          <b-col cols="3">
            <p for="firstName">First Name</p>
          </b-col>
          <b-col cols="9">
            <b-form-input
              required
              type="text"
              id="firstName"
              placeholder="First Name"
              v-model="formData.firstName"
            />
          </b-col>
          <b-col cols="3">
            <p for="middleName">Middle Name</p>
          </b-col>
          <b-col cols="9">
            <b-form-input
              required
              type="text"
              id="middleName"
              placeholder="Middle Name"
              v-model="formData.middleName"
            />
          </b-col>
          <b-col cols="3"> </b-col>
          <b-col cols="9">
            <div class="d-flex align-items-center gap-2">
              <button type="submit" class="btn btn-info-custom">Update</button>
              <button
                @click="$router.back()"
                type="button"
                class="btn btn-light-custom"
              >
                Back
              </button>
            </div>
          </b-col>
        </b-row>
      </b-form>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    formData: {},
    status: {
      show: false,
      text: null,
    },
  }),
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.status = {
        show: true,
        text: "Patient Added Successfully!",
      };
      setTimeout(() => this.resetAlert(), 2500);
    },
    resetAlert() {
      this.status = {
        show: false,
        text: null,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.form-container {
  width: 750px;
  margin: 50px 0 50px 0;
  .form-row > * {
    margin: 10px 0;
  }
  p {
    margin: auto;
    font-size: 13px;
    font-weight: bold;
    text-align: right;
  }
  input::placeholder {
    font-size: 13px;
  }
}
</style>
