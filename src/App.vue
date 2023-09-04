<template>
  <ViewCourse />
</template>

<script>
import ViewCourse from './components/addCourse.vue'

//export default {
//  name: 'App',
//  components: {
//    ViewCourse
//  }
//}


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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
