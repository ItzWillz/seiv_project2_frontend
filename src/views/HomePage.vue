<script setup>
import { ref } from "vue";
import Listbox from 'primevue/listbox';
import router from "../router.js";
import courseServices from "../services/courseServices";

//import ViewCourse from './components/addCourse.vue'

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


const deleteCourse = (course) => {
  courseServices.delete(course.id)
    .then(() => {
      retrieveLessons();
    })
    .catch((e) => {
      message.value = e.response.data.message;
    });
};


const addCourse =() => {
     router.push({ name: 'add'});
};

const editCourse =() => {
     router.push({ name: 'edit', params: { id: course.id } });
};

// const viewCourse = (course) => {
//   router.push({ name: "view", params: { id: course.id } });
// };

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
retrieveLessons();

const viewCourse = () => {
  if (!selectedCourse.value) {
    console.error('Error: No course selected.');
    return;
  }
  router.push({ name: 'viewCourse', params: { id: 4 } });//put course ID after retreiving data 
};

</script>

<template>
 <!-- <tr v-for="(item, index) in tutorials" :key="item.title">
              <td>{{ item.title }}</td>
              <td>{{ item.description }}</td>
                          </tr> -->
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
      <button @click=viewCourse(selectedCourse.value) >View</button>
      <button @click=editCourse(selectedCourse.value)>Edit</button>
      </div>
      <div class="row">
      <button @click=addCourse>Add</button>
      <!-- <a href="../views/addCourses.vue">Add</a> -->
      <button @click="viewCourse()">View Course</button>

      <button @click=deleteCourse(selectedCourse.value)>Delete</button>
      </div>
      </div>
    </div>
    
    <div class="card text-center m-3">
        <div class="card-body">New course courseNum, maybe:</div>
    </div>
</template>

<style>

</style>