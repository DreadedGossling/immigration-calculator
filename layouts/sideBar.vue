<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
      id="bgfinal"
    >
      <v-list class="mt-12">
        <div class="text-h6 ml-8 my-2">Calculators</div>

        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-content>
            <v-list-item-title class="ml-4">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-right="clipped" fixed app>
      <v-spacer />

      <v-app-bar-nav-icon
        @click="too = true"
        class="d-flex d-sm-none"
      ></v-app-bar-nav-icon>

      <v-hover v-slot="{ hover }" v-for="item in menu" :key="item.title">
        <NuxtLink
          :to="item.link"
          class="text-decoration-none font-weight-medium ma-2 d-none d-sm-flex text-lg-subtitle-1 text-sm-subtitle-2"
          :style="{ color: hover ? '#1E88E5' : 'black' }"
        >
          {{ item.title }}
        </NuxtLink>
      </v-hover>
      <!-- <v-hover v-slot="{ hover }">
        <NuxtLink
          to="/"
          class="text-decoration-none"
          :style="{ color: hover ? 'blue' : 'black' }"
        >
          Calculators
        </NuxtLink>
      </v-hover>
      <v-hover v-slot="{ hover }">
        <NuxtLink
          to="/students"
          class="text-decoration-none ma-3"
          :style="{ color: hover ? 'blue' : 'black' }"
        >
          Students
        </NuxtLink>
      </v-hover>
      <v-hover v-slot="{ hover }">
        <NuxtLink
          to="/feedback"
          class="text-decoration-none"
          :style="{ color: hover ? 'blue' : 'black' }"
        >
          Feedback
        </NuxtLink>
      </v-hover>
      <v-hover v-slot="{ hover }">
        <NuxtLink
          to="/settings"
          class="text-decoration-none ma-3"
          :style="{ color: hover ? 'blue' : 'black' }"
        >
          Settings
        </NuxtLink>
      </v-hover>
      <v-hover v-slot="{ hover }">
        <NuxtLink
          to="/logout"
          class="text-decoration-none"
          :style="{ color: hover ? 'blue' : 'black' }"
        >
          Logout
        </NuxtLink>
      </v-hover> -->
    </v-app-bar>

    <v-navigation-drawer v-model="too" absolute temporary height="auto">
      <v-list nav dense>
        <v-list-item-group>
          <v-list-item
            v-for="(item, index) in menu"
            :key="item.title"
            active-color="#1E88E5"
            class="mt-2"
          >
            <NuxtLink
              :to="item.link"
              class="text-decoration-none ma-3 black--text font-weight-medium"
            >
              <v-list-item-title @click="tab = index">{{
                item.title
              }}</v-list-item-title></NuxtLink
            >
          </v-list-item>

          <v-list-item>
            <v-menu :offset-y="5" open-on-hover close-on-content-click>
              <template v-slot:activator="{ on }">
                <v-btn color="grey darken-3" text v-on="on">
                  <v-icon left>mdi-calculator</v-icon>Calculators
                  <v-icon right>mdi-chevron-down</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item
                  v-for="(item, index) in calculators"
                  :key="index"
                  :href="item.link"
                >
                  <v-list-item-title> {{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light> mdi-repeat </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",

  data() {
    return {
      clipped: false,
      too: false,
      fixed: false,
      right: true,
      rightDrawer: false,
      menu: [
        { title: "Calculators", link: "/" },
        { title: "Students", link: "/students" },
        { title: "Feedback", link: "/feedback" },
        { title: "Settings", link: "/settings" },
        { title: "Logout", link: "/logout" },
      ],
      items: [
        // {
        //   title: "Calculators",
        // },
        {
          title: "OPT-CPT",
          to: "/calculators/opt-Cpt",
        },
        {
          title: "OPT-STEM",
          to: "/calculators/opt-Stem",
        },
        {
          title: "OPT-App Deadlines",
          to: "/calculators/opt-App",
        },
        {
          title: "Academic Training",
          to: "/calculators/academicTraining",
        },
      ],
      calculators: [
        {
          title: "OPT-CPT",
          icon: "mdi-account-circle",
          link: "/calculators/opt-cpt",
        },
        {
          title: "OPT-STEM",
          icon: "mdi-shield-refresh-outline",
          link: "/calculators/opt-stem",
        },
        {
          title: "OPT-App Deadline",
          icon: "mdi-palette-outline",
          link: "/calculators/opt-app",
        },
        {
          title: "Acacdemic Training",
          icon: "mdi-palette-outline",
          link: "/calculators/academicTraining",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js",
    };
  },
};
</script>

<style scoped>
#bgfinal {
  background-color: rgba(243, 243, 243, 0.927);
}
</style>