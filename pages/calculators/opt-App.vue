<template>
  <div>
    <BasicCalci />
    <h2 class="ml-6 mb-2 mt-sm-8 mt-md-8 mt-lg-2">OPT Application Deadlines</h2>
    <hr />
    <v-col cols="12" class="mt-4">
      <v-row>
        <v-col cols="6" sm="10" md="10" lg="6">
          <v-row class="pa-2">
            <v-col cols="8" sm="8" md="8">
              <p>Requested OPT Start Date</p>
            </v-col>
            <v-col cols="4" sm="4" md="4">
              <v-text-field
                model-value=""
                label="03/04/2023"
                outlined
              ></v-text-field
            ></v-col>
          </v-row>
        </v-col>
        <v-col cols="6" sm="10" md="10" lg="6">
          <v-list>
            <span>
              <h3 id="bgsilver">Important Dates</h3>
            </span>
            <v-list-item>
              <v-row>
                <v-col cols="8" sm="8" md="8">
                  <p>Earliest Application Date</p>
                </v-col>
                <v-col cols="4" sm="4" md="4" class="font-weight-medium text-right"
                  >03/04/2023
                </v-col>
              </v-row>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item>
              <v-row>
                <v-col cols="8" sm="8" md="8">
                  <p>Grace period begins</p>
                </v-col>
                <v-col cols="4" sm="4" md="4" class="font-weight-medium text-right"
                  >03/04/2023
                </v-col>
              </v-row>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item>
              <v-row>
                <v-col cols="8" sm="8" md="8">
                  <p>Grace period ends</p>
                </v-col>
                <v-col cols="4" sm="4" md="4" class="font-weight-medium text-right"
                  >03/04/2023
                </v-col>
              </v-row>
            </v-list-item>
            <v-divider></v-divider>
          </v-list>
        </v-col>
      </v-row>
    </v-col>
  </div>
</template>

<script>
export default {
  layout: "sideBar"
}
</script>

<style scoped>
#bgsilver {
  height: 20%;
  background-color: rgba(225, 220, 220, 0.716);
  padding: 2%;
}
</style>