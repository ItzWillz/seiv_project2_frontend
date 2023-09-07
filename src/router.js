import {createRouter, createWebHistory} from "vue-router";

import AddCourse from "@/views/addCourses.vue";
import ViewCourse from "@/views/ViewCourses.vue";
import Home from "@/views/HomePage.vue"
import EditCourse from "./views/EditCourse.vue";
//import ListCourses from "./App.vue";




const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path:"/",
            name: "Home",
            component: Home,
        },
        {
            path:"/add",
            name: "add",
            component: AddCourse,
        },
        {
            path:"/view",
            name: "view",
            component: ViewCourse,
        },
        {
            path:"/edit",
            name: "edit",
            component: EditCourse,
        },
    ],
});

export default router;