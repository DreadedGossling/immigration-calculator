<template>
  <div>
    <BasicCalci />
    <h2 class="ml-6 mb-2 mt-sm-8 mt-md-8 mt-lg-2">OPT STEM Reporting Dates</h2>
    <hr />
    <v-col cols="12" class="mt-4">
      <v-row>
        <v-col cols="6" sm="10" md="10" lg="6">
          <v-list>
            <v-list-item>
              <v-row>
                <v-col cols="8" sm="8" md="8">
                  <p>Current OPT End Date</p>
                </v-col>
                <v-col cols="4" sm="4" md="4">
                  <v-text-field
                    model-value=""
                    label="03/04/2023"
                    outlined
                  ></v-text-field
                ></v-col>
              </v-row>
            </v-list-item>
            <v-list-item>
              <v-row class="mt-n8">
                <v-col cols="8" sm="8" md="8">
                  <p>STEM OPT Start Date</p>
                </v-col>
                <v-col cols="4" sm="4" md="4">
                  <v-text-field
                    model-value=""
                    label="03/04/2023"
                    class="mt-n4"
                  ></v-text-field
                ></v-col>
              </v-row>
            </v-list-item>
            <v-list-item>
              <v-row class="mt-n8">
                <v-col cols="8" sm="8" md="8">
                  <p>STEM OPT End Date</p>
                </v-col>
                <v-col cols="4" sm="4" md="4">
                  <v-text-field
                    model-value=""
                    label="03/04/2023"
                    class="mt-n4"
                  ></v-text-field
                ></v-col>
              </v-row>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col cols="6" sm="10" md="10" lg="6">
          <v-list>
            <span>
              <h3 id="bgsilver">Six-Month Reporting Period</h3>
            </span>
            <v-list-item>
              <v-row>
                <v-col cols="8" sm="8" md="8">
                  <p>Reporting Period Begins</p>
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
                  <p>6-month reporting due date</p>
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
                  <p>Last day for student to submit validation report</p>
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
                  <p>Reporting period ends</p>
                </v-col>
                <v-col cols="4" sm="4" md="4" class="font-weight-medium text-right"
                  >03/04/2023
                </v-col>
              </v-row>
            </v-list-item>
            <!-- <v-divider></v-divider>
            <v-list-item>
              <v-row>
                <v-col cols="8" sm="8" md="8">
                  <p id="bgred">SEVIS record will terminate</p>
                </v-col>
                <v-col cols="4" sm="4" md="4" class="font-weight-medium"
                  >03/04/2023
                </v-col>
              </v-row>
            </v-list-item> -->
          </v-list>
          <v-list class="mt-n6">
            <span>
              <h3 id="bgsilver">Twelve-Month Reporting Period</h3>
            </span>
            <v-list-item>
              <v-row>
                <v-col cols="8" sm="8" md="8">
                  <p>Reporting Period Begins</p>
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
                  <p>6-month reporting due date</p>
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
                  <p>Last day for student to submit validation report</p>
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
                  <p>Reporting period ends</p>
                </v-col>
                <v-col cols="4" sm="4" md="4" class="font-weight-medium text-right"
                  >03/04/2023
                </v-col>
              </v-row>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </v-col>
  </div>
</template>

<script>
export default {
  layout: "sideBar",
};
</script>

<style scoped>
#bgsilver {
  height: 10%;
  background-color: rgba(225, 220, 220, 0.716);
  padding: 2%;
}
#bgred {
  background-color: yellow;
}
</style>