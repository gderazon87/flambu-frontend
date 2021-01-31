<template>
  <div>
    <p class="landing-sub-title">Didn’t found what you need?</p>
    <b-form class="custom-form">
      <b-row class="mt-5">
        <b-col md="6" class="pr-lg-5">
          <b-form-group>
            <b-form-input
              v-model="form.name"
              type="text"
              placeholder="Your Name"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col md="6" class="pl-lg-5">
          <b-form-group>
            <b-form-input
              v-model="form.email"
              type="email"
              placeholder="Your Email*"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>

      <b-form-group class="mt-5">
        <b-form-textarea
          v-model="form.message"
          placeholder="Describe here what you are looking for..."
          rows="5"
        ></b-form-textarea>
      </b-form-group>
      <b-button type="submit" class="pink-round-btn mt-4 float-right"
        >Submit</b-button
      >
    </b-form>
  </div>
</template>

<script>
export default {
  name: "DescribeNeedForm",
  components: {},
  props: [],
  methods: {},
  data: function() {
    return {
        form: {
            name: '',
            email: '',
            message: ''
        }
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/custom/_variables.scss";
</style>
