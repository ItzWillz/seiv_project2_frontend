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
retrieveLessons();

</script>

<template>
  <router-view />
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

<script>
// export default {
//   name: 'App',
//   components: {
//     HelloWorld
//   }
// }

// Post attempt with axios
// import axios from "axios";
// axios.post('http://localhost:8081/', {
//       courseNum: 'Test',
//        dept: 'test',
//        level: '1',
//        hours: '1',
//        name: 'test'
// }).then(function (response) {
//   console.log(response);
// });

//One that works, ish
//const product = ref(null);

// POST request using fetch with set headers
// const requestOptions = {
//     method: 'POST',
//     headers: { 
//         'Content-Type': 'application/json',
//         'My-Custom-Header': 'foobar'
//     },
//     body: JSON.stringify({
//        courseNum: 'Test',
//        dept: 'test',
//        level: '1',
//        hours: '1',
//        name: 'test'
//        })
// };
// fetch('http://localhost:8081/', requestOptions)
//     .then(response => response.json())
//     .then(data => product.value = data);

// // POST request using fetch with set headers
// import CourseServices from "../courseServices.js";
// import { useRouter } from "vue-router";

// const router = useRouter();
//   const data = {
//        courseNum: 'Test',
//        dept: 'test',
//        level: '1',
//        hours: '1',
//        name: 'test'
//   };
//   CourseServices.create(data)
//     .then((response) => {
//       console.log("add " + response.data);
//       router.push({ name: "courses" });
//     })
//     .catch((e) => {
//       console.log(e.response.data.message);
//     });



</script>