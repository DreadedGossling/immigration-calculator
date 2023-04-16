<template>
  <v-app dark>
    <v-app-bar :clipped-left="clipped" fixed app class="elevation-0">
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
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js",
    };
  },
};
</script>
