<script setup>
import { ref } from "vue";
import Listbox from 'primevue/listbox';
import router from "../router.js";
import courseServices from "../services/courseServices";

const course = ref([]);

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

retrieveLessons();

const deleteCourse = () => {
  courseServices.delete(selectedCourse.value)
    .finally(() => {
        router.go();
    });
};

     //const items = ref(Array.from({ length: course.length }, (_, i) => ({ label: `${course[i].name} ${course[i].courseNum}`, })));
       // console.log(items);
    
const addCourse =() => {
     router.push({ name: 'add'});
};

const editCourse =() => {
  if (!selectedCourse.value) {
    console.error('Error: No course selected.');
    return;
  }
  router.push({ name: 'edit', params: { id: selectedCourse.value } });
};


const selectedCourse = ref();

const viewCourse = () => {
  if (!selectedCourse.value) {
    console.error('Error: No course selected.');
    return;
  }
  router.push({ name: 'viewCourse', params: { id: selectedCourse.value } });
};


</script>

<template>

    <div style="background-color: maroon; width 100%; height:50px; margin:-10px; display:block;">
      <h1 style="color:white; text-align:center; margin:0px; padding-top:10px;">View Courses</h1>
      </div>

      <div class="column">
    <div class="card flex justify-content-center">
        <Listbox v-model="selectedCourse"  :options='course' optionLabel= 'name' optionValue="courseNum"/>

    </div>
    <div style="margin-top: 7rem"> 
      <h1 style="text-align: center;">Actions</h1>
      <div class="row">
      <button @click="editCourse()">Edit</button>
        <button @click="viewCourse()">View</button>

      </div>
      <div class="row">
      <button @click="addCourse()">Add</button>
      <button @click="deleteCourse()">Delete</button>
      </div>
      </div>
    </div>

</template>

<style>

</style>