<script setup>
import { ref } from "vue";
import Listbox from 'primevue/listbox';
import router from "@/router.js";
//import ViewCourse from './components/addCourse.vue'
import courseServices from "../services/courseServices";

const course = ({});

const retrieveLessons = () => {
  courseServices.getAll()
    .then((response) => {
      course.value = response.data;
    })
    .catch((e) => {
        console.log(e);
    //   message.value = e.response.data.message;
    });
};


retrieveLessons(); //end of script tag


const addCourse =() => {
     router.push({ name: 'add'});
};

const editCourse =() => {
     router.push({ name: 'edit'});
};

const selectedCourse = ref();
const cities = ref([
    { name: 'Course', code: '1' },
    { name: 'Course', code: '2' },
    { name: 'Course', code: '3' },
    { name: 'Course', code: '4' },
    { name: 'Course', code: '5' },
    { name: 'Course',code: '6' },
    { name: 'Course',code: '7' }
]);
const items = ref(Array.from({ length: cities.value.length }, (_, i) => ({ label: `${cities.value[i].name} ${cities.value[i].code}`, })));





</script>

<template>
 <!-- <tr v-for="(item, index) in tutorials" :key="item.title">
              <td>{{ item.title }}</td>
              <td>{{ item.description }}</td>
                          </tr> -->
    <!--ViewCourse /-->
    <div style="background-color: maroon; width 100%; height:50px; margin:-10px; display:block;">
      <h1 style="color:white; text-align:center; margin:0px; padding-top:10px;">View Courses</h1>
      </div>

      <div class="column">
    <div class="card flex justify-content-center">
        <Listbox v-model="selectedCourse" :options="items" optionLabel="label" />
    </div>
    <div style="margin-top: 7rem"> 
      <h1 style="text-align: center;">Actions</h1>
      <div class="row">
      <button >View</button>
      <button @click=editCourse>Edit</button>
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