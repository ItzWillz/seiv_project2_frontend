<script setup>
//import { ref } from "vue";
//import Listbox from 'primevue/listbox';
import router from "@/router.js";
//import ViewCourse from './components/addCourse.vue'

const addCourse =() => {
  console.log("help me plase");
     router.push({ name: 'add'});
       console.log("crying myself to sleep");


};

// const selectedCity = ref();
// const cities = ref([
//     { name: 'Course', code: 'NY' },
//     { name: 'Course', code: 'RM' },
//     { name: 'Course', code: 'LDN' },
//     { name: 'Course', code: 'IST' },
//     { name: 'Course', code: 'PRS' },
//     { name: 'Course', code: '3' },
//     { name: 'Course', code: '4' }
// ]);
</script>

<template>
    <!--MenuBar /-->
    <!--ViewCourse /-->
    <div style="background-color: maroon; width 100%; height:50px; margin:-10px; display:block;">
      <h1 style="color:white; text-align:center; margin:0px; padding-top:10px;">View Courses</h1>
      </div>

      <div class="column">
    <div class="card flex justify-content-center">
        <!--<Listbox v-model="selectedCity" :options="cities" optionLabel="name" />-->
    </div>
    <div style="margin-top: 7rem"> 
      <h1 style="text-align: center;">Actions</h1>
      <div class="row">
      <button >View</button>
      <button>Edit</button>
      </div>
      <div class="row">
      <button @click=addCourse>Add</button>
      <!-- <a href="../views/addCourses.vue">Add</a> -->

      <button>Delete</button>
      </div>
      </div>
    </div>
    
    <div class="card text-center m-3">
        <div class="card-body">New course courseNum, maybe:</div>
    </div>
</template>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>