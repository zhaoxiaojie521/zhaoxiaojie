import Home from "../view/Home.vue";
import Example from "../view/Example.vue";

import {
  Location,
  Document,
  Menu as IconMenu,
  Setting,
} from "@element-plus/icons";
const routes = [
  {
    path: "/",
    redirect: "/home",
    component: Home,
    meta: { title: "首页", icon: Location },
  },
  {
    path: "/home",
    name: "home",
    component: Home,
    meta: { title: "首页", icon: Location },
  },
  {
    path: "/setting",
    name: "setting",

    component: () => import("../view/Setting.vue"),
    redirect: "/setting/user",
    meta: { title: "系统设置", icon: Document },
    children: [
      {
        path: "/setting/user",
        component: () => import("../view/Usermanger.vue"),
        name: "usermanage",
        meta: { title: "用户管理" },
      },
      {
        path: "/setting/message",
        component: () => import("../view/Mesmanger.vue"),
        name: "mesmanage",
        meta: { title: "短信管理" },
      },
    ],
  },
  {
    path: "/example",
    name: "example",
    component: Example,

    meta: { title: "综合实例", icon: Setting },
  },
];

export default routes;
