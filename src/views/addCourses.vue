<script setup>
  import { ref } from "vue";
  import courseServices from "../services/courseServices.js";
  import { useRouter } from "vue-router";
  
  const valid = ref(false);
  const router = useRouter();
  const message = ref("");

  const course = ref({
  id: null,
  name: "",
  hours: "",
  courseNum: "",
  level: "",
  dept: "",
  desc: "",
});


const saveCourse = () => {
  const data = {
    name: course.value.name,
    hours: course.value.hours,
    courseNum: course.value.courseNum,
    level: course.value.level,
    dept: course.value.dept,
    desc: course.value.desc,
  };
  courseServices.create(data)
    .then((response) => {
      course.value.id = response.data.id;
      console.log("add " + response.data);
      router.push({ path: "/" });
    })
    .catch((e) => {
      //console.log(e);
      message.value = e.response.data.message;
    });
};

const returnHome = () => {
  router.push({ path: "/" });
};

</script>

<template>
<div style="background-color: maroon; width 100%; height:50px; display:block;">
      <h1 style="color:white; text-align:center; margin:0px; padding-top:5px;">Add Course</h1>
      </div>

    <v-form v-model="valid" style="padding-top:50px;">


      <v-container>
        <v-row>
          <v-col  cols="12"  md="4">
            <v-text-field  v-model="course.name" id="name" label="Name"  required  hide-details
            ></v-text-field>
          </v-col>
  
          <v-col cols="12" md="4" >
          <v-select v-model="course.hours" id="hours" label="Hours" :items="['0','1', '2', '3', '4',]" > </v-select>
          </v-col>
              </v-row>


        <v-row>
          <v-col cols="12" md="4" >
            <v-text-field v-model="course.courseNum" id="courseNum" label="Number" hide-details required></v-text-field>
          </v-col>

          <v-col cols="12" md="4" >
          <v-select  v-model="course.level" id="level" label="Level"  :items="['0', '1', '2', '3', '4','5']"></v-select>
          </v-col>


          <v-col cols="12"  md="4">
          <v-select  v-model="course.dept" id="dept" label="Department"  :items="['Computer Science', 'Arts', 'Business','Music']"></v-select>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" >
             <v-text-field  v-model="course.desc"  id="desc" label="Description"   hide-details
          ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
            <v-col cols="auto">
            <v-btn  :disabled="!valid" class="text-none mb-4"   color="#AD1212"  variant="flat" 
            @click="saveCourse">
             Submit </v-btn>
            <v-btn  block class="text-none mb-4"   color="#AD1212"  variant="flat" @click="returnHome">
             Return </v-btn>
            </v-col>
        </v-row>
      </v-container>
    </v-form>
  </template>

<style>

</style>