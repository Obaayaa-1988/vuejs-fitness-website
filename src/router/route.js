import HomeCurrent from '../views/HomeCurrent.vue'
import WearsComponent from '../views/WearsComponent.vue'
import MealComponent from '../views/MealComponent.vue'
import ContactComponent from '../views/ContactComponent.vue'
const routes = [
    {
        path: '/',
        name: "home",
        component: HomeCurrent,
        // children: [
        //     { path: '', name: "wears", component: WearsComponent },
        //     { path: '/Meals', name: "meals", component: MealComponent },
        // ]
    },
    { path: '/Wears', name: "wears", component: WearsComponent },
    { path: '/Meals', name: "meals", component: MealComponent },
    { path: '/Contact', name: "meals", component: ContactComponent },
]
export default routes;