import app from '../App.vue'
import PageA from '../components/pageA.vue'
import Index from '../components/index.vue'
import Home from '../components/home.vue'
import Classify from '../components/classify.vue'
import Order from '../components/order.vue'
import My from '../components/my.vue'

export default{
	routes:[
		{
			path:'/', component:Index,
			children:[
				{path:'/home', component:Home},
				{path:'/classify', component:Classify},
				{path:'/order', component:Order},
				{path:'/my', component:My},
				{path:'/', redirect:'/home'}
			]
		},
		{path:'/pageA', component:PageA},
		{path:'*', redirect:'/index'}
	]
}