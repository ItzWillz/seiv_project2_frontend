import {createRouter, createWebHistory} from "vue-router";

import AddCourse from "./views/addCourses.vue";
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
            path:"/edit/:id",
            name: "edit",
            component: EditCourse,
            props: true,
        },
        {
                    path:"/view/:id",
                    name:"viewCourse",
                    component: View,
                    props: true,
        },
    ],
});

export default router;