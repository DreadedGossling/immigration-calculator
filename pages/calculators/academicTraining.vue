<template>
  <div>
    <BasicCalci />
    <h2 class="ml-6 mb-2 mt-sm-8 mt-md-8 mt-lg-2">Academic Training Period</h2>
    <hr />
    <v-col cols="12" class="mt-4">
      <v-row>
        <v-col cols="12" lg="6">
          <v-list>
            <v-list-item>
              <v-row>
                <v-col cols="8" sm="8" md="8">
                  <h4>Next AT Start Date</h4>
                </v-col>
                <v-col cols="4" sm="4" md="4">
                  <v-text-field
                    model-value=""
                    value="03/04/2023"
                    outlined
                    readonly
                  ></v-text-field
                ></v-col>
              </v-row>
            </v-list-item>
            <v-list-item>
              <v-row class="mt-n8">
                <v-col cols="8" sm="8" md="8">
                  <p>Total months of eligibility</p>
                </v-col>
                <v-spacer></v-spacer>
                <v-col cols="2" sm="2" md="2">
                  <v-text-field
                    model-value=""
                    value="18"
                    outlined
                    readonly
                  ></v-text-field
                ></v-col>
              </v-row>
            </v-list-item>
            <v-list-item>
              <v-row class="mt-n8">
                <v-col cols="8" sm="8" md="8">
                  <p>Total months used</p>
                </v-col>
                <v-spacer></v-spacer>
                <v-col cols="2" sm="2" md="2" class="max-width">
                  <!-- <v-text-field model-value="" label="18"></v-text-field
                > -->
                <div class="text-right">
                <span class="px-4">18</span>
              </div>
              </v-col>
              </v-row>
            </v-list-item>
            <v-list-item>
              <v-row class="mt-n8">
                <v-col cols="8" sm="8" md="8">
                  <p>Total Months Available</p>
                </v-col>
                <v-spacer></v-spacer>
                <v-col cols="2" sm="2" md="2">
                  <!-- <v-text-field model-value="" label="1"></v-text-field
                > -->
                <div class="text-right">
                <span class="px-4">1</span>
              </div>
              </v-col>
              </v-row>
            </v-list-item>
            <v-list-item>
              <v-row class="mt-n8">
                <v-col cols="8" sm="8" md="8">
                  <h4>Next AT End Date</h4>
                </v-col>
                <v-col cols="4" sm="4" md="4">
                  <!-- <v-text-field model-value="" label="03/04/2023"></v-text-field
                > -->
                <div class="text-right">
                <span class="px-4">03/04/2023</span>
              </div>
              </v-col>
              </v-row>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col cols="12" lg="6">
          <v-list>
            <v-list-item id="bgsilver">
              <v-row>
                <v-col cols="3" sm="3" md="3" class="font-weight-bold"
                  >Start
                </v-col>
                <v-col cols="3" sm="3" md="3" class="font-weight-bold"
                  >End
                </v-col>
                <v-col cols="2" sm="2" md="2" class="font-weight-bold"
                  >Months
                </v-col>
                <v-col cols="1" sm="1" md="1" class="font-weight-bold"
                  >Days
                </v-col>
                <v-col
                  cols="3"
                  sm="3"
                  md="3"
                  class="font-weight-bold text-right"
                  >Total Days
                </v-col>
              </v-row>
            </v-list-item>
            <v-list-item>
              <v-row>
                <v-col cols="3" sm="3" md="3" class="font-weight-medium"
                  >03/04/2023
                </v-col>
                <v-col cols="3" sm="3" md="3" class="font-weight-medium"
                  >03/04/2023
                </v-col>
                <v-col
                  cols="2"
                  sm="2"
                  md="2"
                  class="font-weight-medium text-right"
                  >0
                </v-col>
                <v-col
                  cols="2"
                  sm="2"
                  md="2"
                  class="font-weight-medium text-right"
                  >0
                </v-col>
                <v-col
                  cols="2"
                  sm="2"
                  md="2"
                  class="font-weight-medium text-right"
                  >0
                </v-col>
              </v-row>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item>
              <v-row>
                <v-col cols="3" sm="3" md="3" class="font-weight-medium"
                  >03/04/2023
                </v-col>
                <v-col cols="3" sm="3" md="3" class="font-weight-medium"
                  >03/04/2023
                </v-col>
                <v-col
                  cols="2"
                  sm="2"
                  md="2"
                  class="font-weight-medium text-right"
                  >0
                </v-col>
                <v-col
                  cols="2"
                  sm="2"
                  md="2"
                  class="font-weight-medium text-right"
                  >0
                </v-col>
                <v-col
                  cols="2"
                  sm="2"
                  md="2"
                  class="font-weight-medium text-right"
                  >0
                </v-col>
              </v-row>
            </v-list-item>

            <v-divider></v-divider>
            <v-list-item>
              <v-row>
                <v-col cols="3" sm="3" md="3" class="font-weight-medium"
                  ><v-text-field
                    model-value=""
                    value="03/04/2023"
                    outlined
                    disabled
                  ></v-text-field>
                </v-col>
                <v-col cols="3" sm="3" md="3" class="font-weight-medium"
                  ><v-text-field
                    model-value=""
                    value="03/04/2023"
                    outlined
                    disabled
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="2"
                  sm="2"
                  md="2"
                  class="font-weight-medium text-right"
                  >
                </v-col>
                <v-col
                  cols="2"
                  sm="2"
                  md="2"
                  class="font-weight-medium text-right"
                  >
                </v-col>
                <v-col
                  cols="2"
                  sm="2"
                  md="2"
                  class="font-weight-medium text-right"
                  >0
                </v-col>
              </v-row>
            </v-list-item>

            <v-list-item id="bgsilver" class="mt-n7">
              <v-row>
                <v-col cols="3" sm="3" md="3" class="font-weight-bold"
                  >Total
                </v-col>
                <v-col cols="3" sm="3" md="3" class="font-weight-bold"> </v-col>
                <v-col
                  cols="2"
                  sm="2"
                  md="2"
                  class="font-weight-bold text-right"
                  >0
                </v-col>
                <v-col
                  cols="2"
                  sm="2"
                  md="2"
                  class="font-weight-bold text-right"
                  >0
                </v-col>
                <v-col
                  cols="2"
                  sm="2"
                  md="2"
                  class="font-weight-bold text-right"
                  >0
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
  layout: "sideBar"
}
</script>

<style scoped>
#bgsilver {
  height: 10%;
  background-color: rgba(225, 220, 220, 0.716);
  padding: 2%;
}
span {
border-bottom: 1px solid black;
}
</style>