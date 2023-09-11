import {createRouter, createWebHistory} from "vue-router";

import AddCourse from "./views/addCourses.vue";
import ViewCourse from "./views/ViewCourses.vue";
import Home from "./views/HomePage.vue"
import EditCourse from "./views/EditCourse.vue";
import View from "./views/ViewCourse.vue";
//import ListCourses from "./App.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
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
        {
                    path:"/courses/:id",
                    name:"viewCourse",
                    component: View,
        },
    ],
});

export default router;