<template>
  <div class="h-9 relative group mx-2">
    <img :src="user?user.head_img:site_avatar" alt=""
         class="h-9 transition-all group-hover:scale-125 rounded-full shadow">
    <div class="w-44 bg-white absolute right-0 invisible group-hover:visible shadow">
      <ul>
        <li v-if="!user" class="w-full py-2 px-2.5 shadow-sm hover:bg-gray-100 cursor-pointer">
          <router-link to="/login">登录</router-link>
        </li>
        <li v-if="!user" class="w-full py-2 px-2.5 shadow-sm hover:bg-gray-100 cursor-pointer">
          <router-link to="/register">注册</router-link>
        </li>
        <li v-if="user" class="w-full py-2 px-2.5 shadow-sm hover:bg-gray-100 cursor-pointer">
          <router-link to="">个人资料</router-link>
        </li>
        <li v-if="user" class="w-full py-2 px-2.5 shadow-sm hover:bg-gray-100 cursor-pointer">
          <router-link to="">后台管理</router-link>
        </li>
        <li v-if="user" class="w-full py-2 px-2.5 shadow-sm hover:bg-gray-100 cursor-pointer">退出登录</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import store from "@/store";

const site_avatar = store.state.settings.site_avatar
const user = store.state.app.user
</script>