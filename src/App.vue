



<template>
    <!--MenuBar /-->
    <div style="background-color: maroon; width 100%; height:50px; margin:-10px; display:block;">
      <h1 style="color:white; text-align:center; margin:0px; padding-top:10px;">View Courses</h1>
      </div>
      <div class="column">
    <div class="card">
        <Listbox v-model="selectedCity" :options="cities" filter optionLabel="name" />
    </div>
      </div>
    <div class="column">
      <h1 style="text-align: center;">Actions</h1>
      <button>View</button>
      <button>Edit</button>
      <button>Add</button>
      <button>Delete</button>
    </div>
</template>

<script setup>
import { ref } from "vue";
import Listbox from 'primevue/listbox';

const selectedCity = ref();
const cities = ref([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]);
</script>









