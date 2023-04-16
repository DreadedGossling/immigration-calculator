<template>
  <div>
    <v-data-table
      item-key="slug"
      :headers="headers"
      :items="details"
      :items-per-page="5"
      sort-by="slug"
      class="elevation-1 mt-10"
    >
    </v-data-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headers: [
      { text: "Date", value: "date" },
      { text: "Name", value: "name" },
      { text: "Email", value: "email" },
      { text: "Program", value: "program" },
      { text: "Eligible Days", value: "eligibleDays" },
    ],
    }
  },
  mounted() {
    this.$store.dispatch("getDetails");
  },
  computed: {
    details(){
      return this.$store.state.details
    }
  }
}
</script>