import HomeCurrent from '../components/HomeCurrent.vue'
import WearsComponent from '../components/WearsComponent.vue'
import MealComponent from '../components/MealComponent.vue'
const routes = [
    {
        path: '/',
        name: "home",
        component: HomeCurrent,
        children: [
            { path: '', name: "wears", component: WearsComponent, },
            { path: ':id/Meals', name: "meals", component: MealComponent },
        ]
    },
    // { path: '/Wears', name: "wears", component: WearsComponent },
    // { path: '/Meals', name: "meals", component: MealComponent },
]
export default routes;