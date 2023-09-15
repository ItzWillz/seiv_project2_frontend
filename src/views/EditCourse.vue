<script setup>
  import { ref } from "vue";
  import CourseServices from "../services/courseServices";
  import { useRouter } from "vue-router";

  const router = useRouter();
  const course = ref({});
  const valid = ref(false);

  const props = defineProps({
  id: {
    required: true,
  },
});

  const retrieveCourse = async () => {
  try {
    
    const response = await CourseServices.get(props.id);
    course.value = response.data;
  } 
  catch (e) {
    console.log(e.response.data.message);
    //message.value = e.response.data.message;
  }
};

retrieveCourse();

const returnHome = () => {
  router.push({ path: "/" });
};

const editCourse = async () => {
  const data = {
    name: course.value.name,
    hours: course.value.hours,
    courseNum: course.value.courseNum,
    level: course.value.level,
    dept: course.value.dept,
    desc: course.value.desc,
  };
  try {
    const response = await CourseServices.update(props.id, data);
    course.value.courseNum = response.data.id;
    router.push({ name: "Home" });
  } 
  catch (e) {
    console.log(e.response.data.message);
    //message.value = e.response.data.message;
  }
};


</script>

<template>
<div style="background-color: maroon; width 100%; height:50px; display:block;">
      <h1 style="color:white; text-align:center; margin:0px; padding-top:5px;">Edit Course</h1>
      </div>

    <v-form v-model="valid" style="padding-top:50px;">


      <v-container>
        <v-row>
          <v-col  cols="12"  md="4">
            <v-text-field v-model="course.name" id="name" label="Name" :counter="50" required hide-details
            ></v-text-field>
          </v-col>
  
          <v-col cols="12" md="4" >
          <v-select v-model="course.hours" label="Hours" :items="['0','1', '2', '3', '4',]" > </v-select>
          </v-col>
              </v-row>


        <v-row>
          <v-col cols="12" md="4" >
            <v-text-field v-model="course.courseNum" label="Number" hide-details required></v-text-field>
          </v-col>

          <v-col cols="12" md="4" >
          <v-select  v-model="course.level" label="Level"  :items="['0', '1', '2', '3', '4','5']"></v-select>
          </v-col>


          <v-col cols="12"  md="4">
          <v-text-field  v-model="course.dept" label="Department" hide-details required></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" >
             <v-textarea class="text-wrap" v-model="course.desc"  label="Description"   hide-details
          ></v-textarea>
          </v-col>
        </v-row>

        <v-row>
            <v-col cols="auto">
            <v-btn  block class="text-none mb-4"   color="#AD1212"  variant="flat" @click="editCourse()">
             Submit </v-btn>
            <v-btn  block class="text-none mb-4"   color="#AD1212"  variant="flat" @click="returnHome">
             Return </v-btn>
            </v-col>
        </v-row>
      </v-container>
    </v-form>
  </template>

<style>
.text-wrap{
  height: 200;
  max-height: 200px;
  overflow-y:auto;
  word-wrap: break-word;
}
</style>