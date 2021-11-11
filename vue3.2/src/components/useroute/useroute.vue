<template>
  <!-- 放到你想使用的地方即可 -->
  <div id="User">

    <!-- 导航栏 -->
    <div class="midden">
      <div class="left">
        <el-row>
          <el-col :span="24">

            <el-menu active-text-color="#ffd04b"
                     background-color="#545c64"
                     class="el-menu-vertical-demo"
                     :default-active="upRoute"
                     :default-openeds="['2']"
                     text-color="#fff"
                     router
                     @open="handleOpen"
                     @close="handleClose">
              <template v-for="(item,index) in arr">
                <div :key="index"
                     v-if="index!==1">
                  <el-menu-item :index="item.path"
                                v-if="!item.children">
                    <el-icon>
                      <component :is="item.meta.icon" />
                    </el-icon>

                    <span>{{item.meta.title}}</span>
                  </el-menu-item>
                  <el-sub-menu index="2"
                               v-if="item.children">
                    <template #title>
                      <el-icon>
                        <component :is="item.meta.icon" />
                      </el-icon>
                      <span>{{item.meta.title}}</span>
                    </template>
                    <el-menu-item :index="items.path"
                                  v-for="(items,indexs) in item.children"
                                  :key="indexs">{{items.meta.title}}</el-menu-item>
                  </el-sub-menu>
                </div>
              </template>
            </el-menu>
          </el-col>
        </el-row>
      </div>
      <div class="right">
        <div class="context">
          <template v-for="(item,index) in breadList"
                    :key="index">
            <div class="box">
              <!-- 路由 -->
              <router-link :to="{path:item.path}">
                <div class="every"
                     :class="{'red':index==breadList.length-1}">
                  {{item.meta.title}}
                </div>
              </router-link>
              <!-- 右边箭头 -->
              <div style="margin-left:20px"
                   v-if="index!==breadList.length-1">
                >
              </div>
            </div>
          </template>

        </div>
        <router-view />
      </div>
    </div>

  </div>
</template>
<script setup>
import { onMounted, ref, watch } from "vue"
import { useRoute, useRouter } from "vue-router"

import {
  Location,
  Document,
  Menu as IconMenu,
  Setting,
} from '@element-plus/icons'

const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}
const route = useRoute()

const router = useRouter()
let upRoute = () => {
  //使组件路由地址与当前route对象一样
  return route.path
}
//如果组件循环的话使用router.options.routes
let arr = router.options.routes
// console.log(arr)




//储存路由信息容器
let breadList = ref([]);
let isHome = (route) => {
  return route.name === "home"
}
let getBreadcrumb = () => {
  let matched = route.matched;

  if (matched.length != 0) {
    //如果不是首页
    if (!isHome(matched[0])) {
      matched = [{ path: "/home", name: "home", meta: { title: "首页" } }].concat(matched);
    }
    breadList.value = matched;
    console.log(breadList.value)
  }
}
//监听route管理对象
watch(route, () => {
  getBreadcrumb()
})
onMounted(() => {
  getBreadcrumb()
})
</script>
<style>
#User .midden .left {
  width: 300px;
}
#User .midden {
  display: flex;
}
.context .every {
  padding: 10px;
  border: 1px solid red;

  font-weight: 800;
}
.context .red {
  background: red;
  color: white;
}
.context > div {
  margin-right: 20px;
}
.context,
.context .box {
  display: flex;
  align-items: center;
}
.context a,
#User a {
  text-decoration: none;
  color: black;
  font-weight: 600;
}
</style>