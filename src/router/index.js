import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import Contact from "@/views/Contact.vue";
import Cart from "@/views/Cart.vue";
import Products from "@/views/Products/Products.vue";
import Admin from "@/views/Admin.vue";
import productDetails from "@/views/Products/productDetails.vue";


const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/about",
		name: "About",
		component: About,
	},
	{
		path: "/login",
		name: "Login",
		component: Login,
	},
	{
		path: "/register",
		name: "Register",
		component: Register,
	},
	{
		path: "/contact",
		name: "Contact",
		component: Contact,
	},
	{
		path: "/cart",
		name: "Cart",
		component: Cart,
	},
	{
		path: "/products",
		name: "Products",
		component: Products,
	},
	{
		path: "/admin",
		name: "Admin",
		component: Admin,
	},
  {
    path: "/product/:id",
		name: "productDetails",
		component: productDetails,
	},

];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
