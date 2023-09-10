<template>
    <div>
      <!-- Header -->
      <div class="header">
        <h1>View Course</h1>
      </div>
  
      <!-- Course Information -->
      <div class="course-info">
        <strong>Course ID:</strong> {{ course.id }}
        <br />
        <strong>Course Name:</strong> {{ course.name }}
        <br />
        <strong>Hours:</strong> {{ course.hours }}
      </div>
  
      <!-- Return Button -->
      <div class="return-button">
        <router-link to="/">
          <v-btn color="primary" text>
            Return
          </v-btn>
        </router-link>
      </div>
    </div>
  </template>
  
  <script>
  //import axios from 'axios';
  export default {
    data() {
      return {
        course: {
          id: '',
          name: '',
          hours: '',
        },
      };
    },
    mounted() {
      const courseId = this.$route.params.id;
      
      // Fetch course data from Express.js server
      this.fetchCourse(courseId);
    },
    methods: {
      fetchCourse(courseId) {
        // axios.get(`/api/course/${courseId}`)
        //   .then((response) => {
        //     this.course = response.data; // Assuming you receive a single course object
        //   })
        //   .catch((error) => {
        //     console.error('Error fetching course:', error);
        //   });
        this.course={
            id: courseId,
            name:"MO",
            hours:5,
        }
      },
    },
  };
  </script>
  <style scoped>
  /* Add your CSS styles here */
  .header {
    background-color: maroon;
    width: 100%;
    height: 50px;
    margin: -10px;
    text-align: center;
  }
  
  .header h1 {
    color: white;
    margin: 0;
    padding-top: 10px;
  }
  
  .course-info {
    margin-top: 1rem;
    text-align: center;
  }
  
  .return-button {
    margin-top: 2rem;
    text-align: center;
  }
  </style>
  