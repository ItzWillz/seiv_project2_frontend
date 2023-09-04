



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
    
    <div class="card text-center m-3">
        <div class="card-body">New course courseNum, maybe:</div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import Listbox from 'primevue/listbox';

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
const product = ref(null);

// POST request using fetch with set headers
const requestOptions = {
    method: 'POST',
    headers: { 
        'Content-Type': 'application/json',
        'My-Custom-Header': 'foobar'
    },
    body: JSON.stringify({
       courseNum: 'Test',
       dept: 'test',
       level: '1',
       hours: '1',
       name: 'test'
       })
};
fetch('http://localhost:8081/', requestOptions)
    .then(response => response.json())
    .then(data => product.value = data);


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









