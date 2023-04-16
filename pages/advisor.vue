<template>
  <v-row justify="center" align="center" class="mt-12">
    <v-col cols="12" sm="8" md="6">
      <v-card elevation="0">
        <v-card-title class="headline justify-center"> Advisor </v-card-title>
        <v-form>
          <v-container>
            <v-row>
              <v-col cols="12" sm="12" md="12">
                <v-text-field
                  model-value="John Doe"
                  label="Email"
                  outlined
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="12" md="12" class="mt-n6">
                <v-text-field
                  model-value="John Doe"
                  label="Password"
                  outlined
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="12"
                md="12"
                class="mt-n6 blue--text mb-4"
                justify="center"
                align="center"
              >
                <NuxtLink to="/reset" class="text-decoration-none">
                  Reset Password
                </NuxtLink></v-col
              >
              <v-col cols="12" sm="12" md="12" class="mt-n5">
                <v-btn
                  block
                  height="50"
                  color="blue"
                  class="white--text text-h6 text-none"
                >
                  Login
                </v-btn>
              </v-col>
              <v-col
                cols="12"
                sm="12"
                md="12"
                class="blue--text text-h5"
                justify="center"
                align="center"
                ><NuxtLink to="/registration" class="text-decoration-none">
                  Create An Advisor Account</NuxtLink
                ></v-col
              >
            </v-row>
          </v-container>
        </v-form>
      </v-card>
    </v-col>
  </v-row>
</template>