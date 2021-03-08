/*!

=========================================================
* Argon Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Maps from "views/examples/Maps.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import Icons from "views/examples/Icons.js";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Basic Settings",
    icon: "ni ni-settings text-blue",
    component: Icons,
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "Rate Setups",
    icon: "ni ni-bag-17 text-orange",
    component: Maps,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "Taxes",
    icon: "ni ni-money-coins text-yellow",
    component: Profile,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Booking Engine",
    icon: "ni ni-cart text-red",
    component: Tables,
    layout: "/admin",
  },
  {
    path: "/login",
    name: "Service shop",
    icon: "ni ni-satisfied text-info",
    component: Login,
    layout: "/auth",
  },
  {
    path: "/register",
    name: "Reports",
    icon: "ni ni-check-bold text-pink",
    component: Register,
    layout: "/auth",
  },
];
export default routes;
