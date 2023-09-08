<script setup>
import { ref, onMounted } from "vue";
import Listbox from 'primevue/listbox';
import router from "./router.js";
import courseServices from "./services/courseServices.js";


</script>

<template>
<v-app>
  <v-name>
  <router-view />

  <div>
    <h1> hi </h1>
  </div>
  </v-name>
</v-app>
</template>

