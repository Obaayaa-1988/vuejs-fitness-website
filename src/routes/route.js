import HomePage from '@/pages/home.vue';
import DetailsPage from '@/pages/details.vue'
const routes = [
    {
        name: 'home',
        path: '/',
        component: HomePage
    },
    {
        name: 'details',
        path: '/details',
        component: DetailsPage
    },
]
export default routes;