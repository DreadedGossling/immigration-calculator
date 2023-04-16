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
    <v-app-bar :clipped-left="clipped" fixed app class="elevation-0">
      <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer" /> -->

      <v-spacer />
      <v-hover v-slot="{ hover }">
        <NuxtLink
          to="/calculators/opt-cpt"
          class="text-decoration-none"
          :style="{ color: hover ? 'blue' : 'black' }"
        >
          Calculators
        </NuxtLink>
      </v-hover>
      <v-hover v-slot="{ hover }">
        <NuxtLink
          to="/calculators/opt-cpt"
          class="text-decoration-none ma-3"
          :style="{ color: hover ? 'blue' : 'black' }"
        >
          Students
        </NuxtLink>
      </v-hover>
      <v-hover v-slot="{ hover }">
        <NuxtLink
          to="/calculators/opt-cpt"
          class="text-decoration-none"
          :style="{ color: hover ? 'blue' : 'black' }"
        >
          Feedback
        </NuxtLink>
      </v-hover>
      <v-hover v-slot="{ hover }">
        <NuxtLink
          to="/calculators/opt-cpt"
          class="text-decoration-none ma-3"
          :style="{ color: hover ? 'blue' : 'black' }"
        >
          Settings
        </NuxtLink>
      </v-hover>
      <v-hover v-slot="{ hover }">
        <NuxtLink
          to="/calculators/opt-cpt"
          class="text-decoration-none"
          :style="{ color: hover ? 'blue' : 'black' }"
        >
          Logout
        </NuxtLink>
      </v-hover>
    </v-app-bar>

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
      // drawer: false,
      fixed: false,
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