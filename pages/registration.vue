<template>
  <v-row justify="center" align="center" class="mt-12">
    <v-col cols="12" sm="8" md="6">
      <v-card elevation="0">
        <v-card-title class="headline justify-center">
          Register as an Advisor
        </v-card-title>
        <v-form>
          <v-container>
            <v-row>
              <v-col cols="12" sm="12" md="12">
                <v-text-field
                  model-value="John Doe"
                  label="Name"
                  outlined
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="12" md="12" class="mt-n6">
                <v-text-field
                  model-value="John Doe"
                  label="Email"
                  outlined
                ></v-text-field>
              </v-col>

              <v-col cols="12" sm="12" md="12" class="mt-n6">
                <v-select
                  :items="items"
                  label="Institution Name"
                  outlined
                ></v-select>
              </v-col>

              <v-col cols="12" sm="12" md="12" class="mt-n6">
                <v-text-field
                  model-value="John Doe"
                  label="Password"
                  outlined
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="12" md="12" class="mt-n5">
                <v-btn
                  block
                  height="50"
                  color="blue"
                  class="white--text text-h6 text-none"
                >
                  Create Account
                </v-btn>
              </v-col>
              <v-col
                cols="12"
                sm="12"
                md="12"
                class="blue--text text-h5"
                justify="center"
                align="center"
                ><NuxtLink to="" class="text-decoration-none">
                  Log in to your Account</NuxtLink
                ></v-col
              >
            </v-row>
          </v-container>
        </v-form>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      items: ["abc", "xyz", "pqr"],
    };
  },
};
</script>