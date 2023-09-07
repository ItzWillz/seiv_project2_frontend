<script>
  
  export default {
    data: () => ({
      valid: false,
      name: '',
      hours: '',
      number: '',
    }),
  }
</script>

<template>
    <v-form v-model="valid">
        <h1>Add Course 
        </h1>
      <v-container>
        <v-row>
          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              v-model="Name"
              :counter="10"
              label="Name"
              required
              hide-details
            ></v-text-field>
          </v-col>
  
          <v-col
            cols="12"
            md="4"
          >
          <v-select
            label="Hours"
            :items="['1', '2', '3', '4',]"
            ></v-select>
          </v-col>
        </v-row>
        <v-row>
          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              v-model="number"
              label="Number"
              hide-details
              required
            ></v-text-field>
          </v-col>
          <v-col
          cols="12"
            md="4"
          >
          <v-select
            label="Level"
            :items="['1000', '2000', '3000']"
            ></v-select>
          </v-col>
          <v-col
          cols="12"
            md="4"
          >
          <v-select
            label="Department"
            :items="['Computer Science', 'Arts', 'Business','Music']"
            ></v-select>
          </v-col>
        </v-row>
        <v-row>
            <v-col cols="auto">
            <v-btn
        :disabled="loading"
        :loading="loading"
        block
        class="text-none mb-4"
        color="#AD1212"
        variant="flat"
        @click="loading = !loading"
      >
        Submit
      </v-btn>
    </v-col>
        </v-row>
      </v-container>
    </v-form>
  </template>

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