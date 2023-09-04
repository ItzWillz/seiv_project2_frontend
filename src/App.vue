<template>
  <ViewCourse />
</template>

<script>
import ViewCourse from './components/addCourse.vue'

export default {
  name: 'App',
  components: {
    ViewCourse
  }
}
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
