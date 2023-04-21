<template>
  <v-app dark>
    <v-app-bar :clipped-right="clipped" fixed app>
      <v-spacer />

      <v-app-bar-nav-icon
        @click="drawer = true"
        class="d-flex d-sm-none"
      ></v-app-bar-nav-icon>

      <v-hover v-slot="{ hover }"
      v-for="(item) in menu"
            :key="item.title">
        <NuxtLink
          :to="item.link"
          class="text-decoration-none font-weight-medium ma-2 d-none d-sm-flex text-lg-subtitle-1 text-sm-subtitle-2"
          :style="{ color: hover ? '#1E88E5' : 'black' }"
        >
          {{item.title}}
        </NuxtLink>
      </v-hover>

      <!-- <v-hover v-slot="{ hover }">
        <NuxtLink
          to="/"
          class="text-decoration-none d-none d-md-flex"
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

    <v-navigation-drawer v-model="drawer" absolute temporary
      height="auto">
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
          class="text-decoration-none ma-3 black--text font-weight-medium">
            <v-list-item-title @click="tab = index">{{
              item.title
            }}</v-list-item-title></NuxtLink>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

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
      left: true,
      leftDrawer: false,
      title: "Vuetify.js",
      menu: [
        { title: "Calculators", link: "/" },
        { title: "Students", link: "/students" },
        { title: "Feedback", link: "/feedback" },
        { title: "Settings", link: "/settings" },
        { title: "Logout", link: "/logout" },
      ],
    };
  },
};
</script>
