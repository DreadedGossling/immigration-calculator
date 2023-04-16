<template>
  <v-row justify="center" align="center" class="mt-12">
    <v-col cols="12" sm="8" md="6">
      <v-card elevation="0">
        <v-card-title class="headline justify-center">
          Fill in Student Details
        </v-card-title>
        <v-form>
          <v-container>
            <v-row>
              <v-col cols="12" sm="12" md="12">
                <v-text-field
                  model-value="John Doe"
                  label="Student Name"
                  outlined
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="12" md="12" class="mt-n6">
                <v-text-field
                  model-value="John Doe"
                  label="Student Email"
                  outlined
                ></v-text-field>
              </v-col>
              <v-col cols="6" sm="6" md="6" class="mt-n6">
                <v-text-field
                  model-value="John Doe"
                  label="Program Start Date"
                  outlined
                ></v-text-field>
              </v-col>
              <v-col cols="6" sm="6" md="6" class="mt-n6">
                <v-text-field
                  model-value="John Doe"
                  label="Program End Date"
                  outlined
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="12" md="12" class="mt-n6">
                <v-select
                  :items="items"
                  label="Select Calculator To Launch"
                  outlined
                ></v-select>
                <!-- <v-text-field
                  model-value="John Doe"
                  label="Select Calculator To Launch"
                  outlined
                ></v-text-field> -->
              </v-col>
              <v-col cols="12" sm="12" md="12" class="mt-n5">
                <v-btn
                  block
                  height="50"
                  color="green"
                  class="white--text text-h6 text-none"
                >
                  Start Calculator
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      items: ["OPT-CPT", "OPT STEM", "OPT App Deadlines", "Academic Training"],
    };
  },
};
</script>
