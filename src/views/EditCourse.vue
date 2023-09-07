<script>
  
  export default {
    data: () => ({
      valid: false,
      name: '',
      hours: '',
      number: '',
      isDisabled: false,
    }),
  }
</script>

<template>
<div style="background-color: maroon; width 100%; height:50px; display:block;">
      <h1 style="color:white; text-align:center; margin:0px; padding-top:5px;">Edit Course</h1>
      </div>

    <v-form v-model="valid" :disabled="isDisabled" style="padding-top:50px;">


      <v-container>
        <v-row>
          <v-col  cols="12"  md="4">
            <v-text-field  v-model="name"  label="Name"  required  hide-details
            ></v-text-field>
          </v-col>
  
          <v-col cols="12" md="4" >
          <v-select label="Hours" :items="['0','1', '2', '3', '4',]" > </v-select>
          </v-col>
              </v-row>


        <v-row>
          <v-col cols="12" md="4" >
            <v-text-field v-model="number" label="Number" hide-details required></v-text-field>
          </v-col>

          <v-col cols="12" md="4" >
          <v-select  label="Level"  :items="['0', '1', '2', '3', '4','5']"></v-select>
          </v-col>


          <v-col cols="12"  md="4">
          <v-select  label="Department"  :items="['Computer Science', 'Arts', 'Business','Music']"></v-select>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" >
             <v-text-field  v-model="description"  label="Description"   hide-details
          ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
            <v-col cols="auto">
            <v-btn  block class="text-none mb-4"   color="#AD1212"  variant="flat" @click=!isDisabled>
             Submit </v-btn>
            </v-col>
        </v-row>
      </v-container>
    </v-form>
  </template>

<style>

</style>