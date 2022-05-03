<template>
  <v-container
    height="100%"
    class="d-flex justify-center grey--text"
    style="margin-top: 300px; font-size: 20px"
  >
    No Data Loaded
  </v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["userInfo"]),
  },
};
</script>

<style></style>
