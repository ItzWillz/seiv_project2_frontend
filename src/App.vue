<script setup>
import { ref, onMounted } from "vue";
import Listbox from 'primevue/listbox';
import router from "./router.js";
import courseServices from "./services/courseServices.js";

//import ViewCourse from './components/addCourse.vue'

const course = ( {} );

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
//retrieveLessons();

</script>

<template>
<v-app>
  <v-name>
  <router-view />

  </v-name>
</v-app>
</template>

