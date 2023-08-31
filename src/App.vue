



<template>
    <!--MenuBar /-->
    <div style="background-color: maroon; width 100%; height:50px; margin:-10px; display:block;">
      <h1 style="color:white; text-align:center; margin:0px; padding-top:10px;">View Courses</h1>
      </div>

      <div class="column">
    <div class="card flex justify-content-center">
        <Listbox v-model="selectedCity" :options="cities" filter optionLabel="name" />
    </div>
    <div style="margin-top: 7rem"> 
      <h1 style="text-align: center;">Actions</h1>
      <div class="row">
      <button >View</button>
      <button>Edit</button>
      </div>
      <div class="row">
      <button>Add</button>
      <button>Delete</button>
      </div>
      </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import Listbox from 'primevue/listbox';

const selectedCity = ref();
const cities = ref([
    { name: 'Course', code: 'NY' },
    { name: 'Course', code: 'RM' },
    { name: 'Course', code: 'LDN' },
    { name: 'Course', code: 'IST' },
    { name: 'Course', code: 'PRS' },
    { name: 'Course', code: '3' },
    { name: 'Course', code: '4' }
]);
</script>









