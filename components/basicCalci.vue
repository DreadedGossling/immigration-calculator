<template>
  <v-col cols="12">
    <v-row>
      <v-col cols="6" sm="10" md="10 d-flex justify-space-between mb-6" lg="6">
        <v-form>
          <v-container>
            <v-row>
              <v-col cols="8" sm="8" md="8">
                <v-text-field
                  model-value="John Doe"
                  label="Name"
                  outlined
                ></v-text-field
              ></v-col>
              <v-col cols="4" sm="4" md="4">
                <v-btn
                  block
                  height="55"
                  color="primary"
                  class="text-h5 text-none"
                  >New Student</v-btn
                >
              </v-col>
              <v-col cols="8" sm="8" md="8">
                <v-text-field
                  model-value="John Doe"
                  label="Email"
                  outlined
                  class="mt-n8"
                ></v-text-field>
              </v-col>
              <v-col cols="auto"> </v-col>
              <v-col cols="4" sm="4" md="4">
                <v-text-field
                  model-value="John Doe"
                  label="Program Start Date"
                  outlined
                  class="mt-n8"
                ></v-text-field>
              </v-col>
              <v-col cols="4" sm="4" md="4">
                <v-text-field
                  model-value="John Doe"
                  label="Program End Date"
                  outlined
                  class="mt-n8"
                ></v-text-field>
              </v-col>
              <v-col cols="4" sm="4" md="4">
                <v-btn
                  block
                  height="55"
                  color="success"
                  class="text-h5 text-none mt-n8"
                  >Edit</v-btn
                >
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-col>
      <v-col cols="6" sm="10" md="10" lg="6" class="mb-md-6 mb-sm-6">
        <div class="pa-4 elevation-1">
          <v-sheet>
            <h3 class="mb-4">Date Calculator</h3>
            <div class="d-flex justify-space-between mb-n4">
              <div>
                <v-text-field
                  model-value=""
                  label="03/04/2023"
                  outlined
                ></v-text-field>
              </div>
              <div>
                <button
                  class="text-h2 px-4"
                  :class="{ active: isActive }"
                  @click="toggle()"
                >
                  <!-- {{ isActive ? "-" : "+" }} -->
                  {{ isActive ? "-" : "+"}}
                </button>
              </div>
              <div id="set">
                <v-sheet class="d-flex justify-space-around mb-6 px-4">
                  <div>
                    <v-select :items="items" label="30" outlined></v-select>
                  </div>
                  <div class="mt-4 px-2">Days</div>
                </v-sheet>
              </div>
              <div class="text-h2 px-4">=</div>
              <div>
                <v-text-field model-value="" label="03/04/2023"></v-text-field>
              </div>
            </div>
          </v-sheet>
        </div>
        <!-- <v-col cols="3" lg="3">
              <v-text-field
                model-value=""
                label="03/04/2023"
                outlined
              ></v-text-field>
            </v-col>
            <v-col cols="1">
              <button
                class="text-h3"
                :class="{ active: isActive }"
                @click="toggle()"
              >
                {{ isActive ? "-" : "+" }}
              </button>
            </v-col>
            <v-col cols="4">
              <v-row>
                <v-col cols="5">
                  <v-text-field
                    model-value=""
                    label="30"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="5" class="text-center mt-3"> Days </v-col>
              </v-row>
            </v-col>
            <v-col cols="1">
              <span class="text-h3">=</span>
            </v-col>
            <v-col cols="3">
              <v-text-field model-value="" label="03/04/2023"></v-text-field>
            </v-col> 
          </v-row>
        </v-card> -->
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
      items: [10, 20, 30, 40, 50],
    };
  },
  methods: {
    toggle() {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style scoped>
#set {
  width: 20%;
}
</style>