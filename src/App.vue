<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>

<div class="card text-center m-3">
        <div class="card-body">New course courseNum, maybe:</div>
    </div>

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}

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
