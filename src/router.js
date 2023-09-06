import {createRouter, createWebHistory} from "vue-router";

import AddCourse from "./views/addCourses.vue";
import ViewCourse from "./views/ViewCourses.vue";
import EditCourse from "./views/EditCourses.vue";
import ListCourses from "./App.vue";




const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path:"/",
            alias: "/list",
            name: "list",
            component: ListCourses,
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