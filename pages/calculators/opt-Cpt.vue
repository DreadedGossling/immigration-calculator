
import BasicCalci from '../../components/basicCalci.vue';

<template>
  <div>
    <BasicCalci />
    <v-col cols="12" class="mt-n4">
      <v-row>
        <v-col cols="6" sm="6" md="6" lg="6">
          <v-row>
            <v-col cols="6" sm="6" md="6"> </v-col>
            <v-col cols="6" sm="6" md="6">
              <h3 class="font-weight-medium text-right">
                OPT Prohibited by CPT <span v-if="truth"><b
                  class="green--text"
                  >NO</b></span>
                  <span v-else><b class="red--text">YES</b></span>
              </h3>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="6" sm="6" md="6" lg="6">
          <h3 class="font-weight-medium">OPT Eligible Days <b>147</b></h3>
        </v-col>
      </v-row>
    </v-col>
    <hr />
    <v-col cols="12">
      <v-row>
        <v-col cols="6" sm="10" md="10" lg="6">
          <h3 class="font-weight-medium">Part Time CPT</h3>
          <v-list>
            <v-list-item id="bgsilver">
              <v-row>
                <v-col cols="3" sm="3" md="3" class="font-weight-bold"
                  >Start
                </v-col>
                <v-col cols="3" sm="3" md="3" class="font-weight-bold"
                  >End
                </v-col>
                <v-col cols="3" sm="3" md="3" class="font-weight-bold"
                  >Total Days Used
                </v-col>
                <v-col cols="3" sm="3" md="3" class="font-weight-bold"
                  >Total Days Used Toward OPT Ineligibility
                </v-col>
              </v-row>
            </v-list-item>
            <v-list-item>
              <v-row>
                <v-col cols="3" sm="3" md="3" class="font-weight-normal"
                  >03/04/2023
                </v-col>
                <v-col cols="3" sm="3" md="3" class="font-weight-normal"
                  >03/04/2023
                </v-col>
                <v-col
                  cols="3"
                  sm="3"
                  md="3"
                  class="font-weight-normal text-right"
                  >0
                </v-col>
                <v-col
                  cols="3"
                  sm="3"
                  md="3"
                  class="font-weight-normal text-right"
                  >0
                </v-col>
              </v-row>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item>
              <v-row>
                <v-col cols="3" sm="3" md="3" class="font-weight-normal"
                  >03/04/2023
                </v-col>
                <v-col cols="3" sm="3" md="3" class="font-weight-normal"
                  >03/04/2023
                </v-col>
                <v-col
                  cols="3"
                  sm="3"
                  md="3"
                  class="font-weight-normal text-right"
                  >0
                </v-col>
                <v-col
                  cols="3"
                  sm="3"
                  md="3"
                  class="font-weight-normal text-right"
                  >0
                </v-col>
              </v-row>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item>
              <v-row>
                <v-col cols="3" sm="3" md="3" class="font-weight-normal"
                  >03/04/2023
                </v-col>
                <v-col cols="3" sm="3" md="3" class="font-weight-normal"
                  >03/04/2023
                </v-col>
                <v-col
                  cols="3"
                  sm="3"
                  md="3"
                  class="font-weight-normal text-right"
                  >0
                </v-col>
                <v-col
                  cols="3"
                  sm="3"
                  md="3"
                  class="font-weight-normal text-right"
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
                  cols="3"
                  sm="3"
                  md="3"
                  class="font-weight-bold text-right"
                  >0
                </v-col>
                <v-col
                  cols="3"
                  sm="3"
                  md="3"
                  class="font-weight-bold text-right"
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
                    label="03/04/2023"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="3" sm="3" md="3" class="font-weight-medium"
                  ><v-text-field
                    model-value=""
                    label="03/04/2023"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="3"
                  sm="3"
                  md="3"
                  class="font-weight-normal text-right"
                >
                </v-col>
                <v-col cols="3" sm="3" md="3" class="text-right"><button class="text-h3">+</button> </v-col>
              </v-row>
            </v-list-item>
            <v-list-item id="bgfinal" class="mt-n6">
              <v-row>
                <v-col cols="6" sm="6" md="6" class="font-weight-bold"
                  >Total Part Time Days Used
                </v-col>

                <v-col
                  cols="3"
                  sm="3"
                  md="3"
                  class="font-weight-bold text-right"
                  >0
                </v-col>
                <v-col
                  cols="3"
                  sm="3"
                  md="3"
                  class="font-weight-bold text-right"
                  >0
                </v-col>
              </v-row>
            </v-list-item>
          </v-list>
          <h3 class="font-weight-medium">Full Time CPT</h3>
          <hr />
          <v-list>
            <v-list-item>
              <v-row>
                <v-col cols="3" sm="3" md="3" class="font-weight-normal"
                  >03/04/2023
                </v-col>
                <v-col cols="3" sm="3" md="3" class="font-weight-normal"
                  >03/04/2023
                </v-col>
                <v-col
                  cols="3"
                  sm="3"
                  md="3"
                  class="font-weight-normal text-right"
                  >0
                </v-col>
                <v-col
                  cols="3"
                  sm="3"
                  md="3"
                  class="font-weight-normal text-right"
                  >0
                </v-col>
              </v-row>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item>
              <v-row>
                <v-col cols="3" sm="3" md="3" class="font-weight-normal"
                  >03/04/2023
                </v-col>
                <v-col cols="3" sm="3" md="3" class="font-weight-normal"
                  >03/04/2023
                </v-col>
                <v-col
                  cols="3"
                  sm="3"
                  md="3"
                  class="font-weight-normal text-right"
                  >0
                </v-col>
                <v-col
                  cols="3"
                  sm="3"
                  md="3"
                  class="font-weight-normal text-right"
                  >0
                </v-col>
              </v-row>
            </v-list-item>
            <v-list-item>
              <v-row>
                <v-col cols="3" sm="3" md="3" class="font-weight-medium"
                  ><v-text-field
                    model-value=""
                    label="03/04/2023"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="3" sm="3" md="3" class="font-weight-medium"
                  ><v-text-field
                    model-value=""
                    label="03/04/2023"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="3"
                  sm="3"
                  md="3"
                  class="font-weight-normal text-right"
                >
                </v-col>
                <v-col cols="3" sm="3" md="3" class="text-right"><button class="text-h3">+</button> </v-col>
              </v-row>
            </v-list-item>
            <v-list-item id="bgfinal" class="mt-n6">
              <v-row>
                <v-col cols="6" sm="6" md="6" class="font-weight-bold"
                  >Total Full Time Days Used
                </v-col>

                <v-col
                  cols="3"
                  sm="3"
                  md="3"
                  class="font-weight-bold text-right"
                  >0
                </v-col>
                <v-col
                  cols="3"
                  sm="3"
                  md="3"
                  class="font-weight-bold text-right"
                  >0
                </v-col>
              </v-row>
            </v-list-item>
          </v-list>
          <!-- <v-list-item>
            <v-row>
              <v-col cols="9" sm="9" md="9" class="font-weight-bold"
                >Total Days Used Against OPT
              </v-col>
              <v-col cols="3" sm="3" md="3" class="font-weight-bold text-right"
                >200
              </v-col>
            </v-row>
          </v-list-item> -->
        </v-col>
        <v-col cols="6" sm="10" md="10" lg="6">
          <h3 class="font-weight-medium">Previous Part Time OPT</h3>
          <v-list>
            <v-list-item id="bgsilver">
              <v-row>
                <v-col cols="3" sm="3" md="3" class="font-weight-bold"
                  >Start
                </v-col>
                <v-col cols="3" sm="3" md="3" class="font-weight-bold"
                  >End
                </v-col>
                <v-col cols="3" sm="3" md="3" class="font-weight-bold"
                  >Total Days Used
                </v-col>
                <v-col cols="3" sm="3" md="3" class="font-weight-bold"
                  >Total Days Used Toward 12 Months Limit
                </v-col>
              </v-row>
            </v-list-item>
            <v-list-item>
              <v-row>
                <v-col cols="3" sm="3" md="3" class="font-weight-normal"
                  >03/04/2023
                </v-col>
                <v-col cols="3" sm="3" md="3" class="font-weight-normal"
                  >03/04/2023
                </v-col>
                <v-col
                  cols="3"
                  sm="3"
                  md="3"
                  class="font-weight-normal text-right"
                  >0
                </v-col>
                <v-col
                  cols="3"
                  sm="3"
                  md="3"
                  class="font-weight-normal text-right"
                  >0
                </v-col>
              </v-row>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item>
              <v-row>
                <v-col cols="3" sm="3" md="3" class="font-weight-normal"
                  >03/04/2023
                </v-col>
                <v-col cols="3" sm="3" md="3" class="font-weight-normal"
                  >03/04/2023
                </v-col>
                <v-col
                  cols="3"
                  sm="3"
                  md="3"
                  class="font-weight-normal text-right"
                  >0
                </v-col>
                <v-col
                  cols="3"
                  sm="3"
                  md="3"
                  class="font-weight-normal text-right"
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
                    label="03/04/2023"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="3" sm="3" md="3" class="font-weight-medium"
                  ><v-text-field
                    model-value=""
                    label="03/04/2023"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="3"
                  sm="3"
                  md="3"
                  class="font-weight-normal text-right"
                >
                </v-col>
                <v-col cols="3" sm="3" md="3" class="text-right"><button class="text-h3">+</button> </v-col>
              </v-row>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item> </v-list-item>
            <v-list-item> </v-list-item>
            <v-divider></v-divider>

            <v-list-item id="bgfinal" class="mt-n6">
              <v-row>
                <v-col cols="6" sm="6" md="6" class="font-weight-bold"
                  >Total Part Time Days Used
                </v-col>

                <v-col
                  cols="3"
                  sm="3"
                  md="3"
                  class="font-weight-bold text-right"
                  >0
                </v-col>
                <v-col
                  cols="3"
                  sm="3"
                  md="3"
                  class="font-weight-bold text-right"
                  >0
                </v-col>
              </v-row>
            </v-list-item>
          </v-list>
          <h3 class="font-weight-medium">Previous Full Time OPT</h3>
          <hr />
          <v-list>
            <v-list-item>
              <v-row>
                <v-col cols="3" sm="3" md="3" class="font-weight-normal"
                  >03/04/2023
                </v-col>
                <v-col cols="3" sm="3" md="3" class="font-weight-normal"
                  >03/04/2023
                </v-col>
                <v-col
                  cols="3"
                  sm="3"
                  md="3"
                  class="font-weight-normal text-right"
                  >0
                </v-col>
                <v-col
                  cols="3"
                  sm="3"
                  md="3"
                  class="font-weight-normal text-right"
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
                    label="03/04/2023"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="3" sm="3" md="3" class="font-weight-medium"
                  ><v-text-field
                    model-value=""
                    label="03/04/2023"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="3"
                  sm="3"
                  md="3"
                  class="font-weight-normal text-right"
                >
                </v-col>
                <v-col cols="3" sm="3" md="3" class="text-right"><button class="text-h3">+</button> </v-col>
              </v-row>
            </v-list-item>
            <v-list-item>
              <!-- <v-row>
                <v-col cols="3" sm="3" md="3" class="font-weight-normal"
                  >03/04/2023
                </v-col>
                <v-col cols="3" sm="3" md="3" class="font-weight-normal"
                  >03/04/2023
                </v-col>
                <v-col
                  cols="3"
                  sm="3"
                  md="3"
                  class="font-weight-normal text-right"
                  >0
                </v-col>
                <v-col
                  cols="3"
                  sm="3"
                  md="3"
                  class="font-weight-normal text-right"
                  >0
                </v-col>
              </v-row> -->
            </v-list-item>
            <v-list-item id="bgfinal" class="mt-n6">
              <v-row>
                <v-col cols="6" sm="6" md="6" class="font-weight-bold"
                  >Total Full Time Days Used
                </v-col>

                <v-col
                  cols="3"
                  sm="3"
                  md="3"
                  class="font-weight-bold text-right"
                  >0
                </v-col>
                <v-col
                  cols="3"
                  sm="3"
                  md="3"
                  class="font-weight-bold text-right"
                  >0
                </v-col>
              </v-row>
            </v-list-item>
          </v-list>
          <v-list-item>
            <v-row>
              <v-col cols="9" sm="9" md="9" class="font-weight-bold"
                >Total OPT Days Used Toward 12 Months Limit
              </v-col>
              <v-col cols="3" sm="3" md="3" class="font-weight-bold text-right"
                >200
              </v-col>
            </v-row>
          </v-list-item>
        </v-col>
      </v-row>
    </v-col>
  </div>
</template>

<script>
export default {
  layout: "sideBar",
  data() {
    return {
      truth: true
    }
  }
}
</script>

<style scoped>
#bgsilver {
  height: 10%;
  background-color: rgba(225, 220, 220, 0.716);
  padding: 2%;
}
#bgfinal {
  background-color: rgba(225, 220, 220, 0.716);
}
</style>