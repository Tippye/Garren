<template>
  <div class="h-9 relative group mx-2">
    <img :src="user?user.head_img:site_avatar" alt=""
         class="h-9 transition-all group-hover:scale-125 rounded-full shadow">
    <div
        class="w-44 bg-white dark:bg-gray-700 absolute right-0 invisible group-hover:visible shadow group-hover:animate-slideInRight">
      <ul>
        <li v-if="!user" class="w-full py-2 px-2.5 shadow-sm hover:bg-gray-100 cursor-pointer">
          <router-link to="/login">{{ $t('login.login') }}</router-link>
        </li>
        <li v-if="!user" class="w-full py-2 px-2.5 shadow-sm hover:bg-gray-100 cursor-pointer">
          <router-link to="/register">{{ $t('login.register') }}</router-link>
        </li>
        <li v-if="user" class="w-full py-2 px-2.5 shadow-sm hover:bg-gray-100 cursor-pointer">
          <router-link to="">{{ $t('avatar_menu.self_material') }}</router-link>
        </li>
        <li v-if="user" class="w-full py-2 px-2.5 shadow-sm hover:bg-gray-100 cursor-pointer">
          <router-link to="">{{ $t('avatar_menu.admin_manage') }}</router-link>
        </li>
        <li v-if="user" class="w-full py-2 px-2.5 shadow-sm hover:bg-gray-100 cursor-pointer">
          {{ $t('login.logout') }}
        </li>
      </ul>
      <div class="flex max-w-full flex-nowrap items-center justify-between px-3 py-1.5">
        <div class="relative w-5 h-5 cursor-pointer overflow-hidden" @click="handleSetDarkMode">
          <div
              class="rounded-full bg-gray-700 w-4 h-4 absolute dark:-top-0.5 dark:-left-0.5 -top-4 -left-4 z-10 transition-all"/>
          <div class="rounded-full bg-amber-300 w-5 h-5 absolute right-0 bottom-0"/>
        </div>
        <el-popover :width="200" effect="dark" placement="bottom">
          <template #reference>
            <i class="el-icon el-tooltip__trigger" style="font-size: 20px;">
              <svg data-v-1e752d22="" height="1.2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"
                   width="1.2em">
                <path
                    d="m18.5 10l4.4 11h-2.155l-1.201-3h-4.09l-1.199 3h-2.154L16.5 10h2zM10 2v2h6v2h-1.968a18.222 18.222 0 0 1-3.62 6.301a14.864 14.864 0 0 0 2.336 1.707l-.751 1.878A17.015 17.015 0 0 1 9 13.725a16.676 16.676 0 0 1-6.201 3.548l-.536-1.929a14.7 14.7 0 0 0 5.327-3.042A18.078 18.078 0 0 1 4.767 8h2.24A16.032 16.032 0 0 0 9 10.877a16.165 16.165 0 0 0 2.91-4.876L2 6V4h6V2h2zm7.5 10.885L16.253 16h2.492L17.5 12.885z"
                    fill="currentColor"></path>
              </svg>
            </i>
          </template>
          <ul class="dark:bg-gray-700">
            <li :class="language==='zh'?'text-gray-400 cursor-not-allowed':'hover:bg-gray-100'"
                class="w-full py-2 px-2.5 shadow-sm cursor-pointer"
                @click="handleSetLanguage('zh')">简体中文
            </li>
            <li :class="language==='en'?'text-gray-400 cursor-not-allowed':'hover:bg-gray-100'"
                class="w-full py-2 px-2.5 shadow-sm cursor-pointer"
                @click="handleSetLanguage('en')">English
            </li>
          </ul>
        </el-popover>
      </div>
    </div>
  </div>
</template>

<script setup>
import store from "@/store";
import {computed, inject} from "vue";
import {ElNotification} from "element-plus";

const $t = inject('$t')
const site_avatar = store.state.settings.site_avatar
const user = store.state.app.user
let language = store.state.settings.lang
let darkMode = computed(() => store.state.settings.darkMode)

const handleSetLanguage = (lang) => {
  store.dispatch('settings/changeLanguage', lang)
      .then((res) => {
        ElNotification({
          title: '语言更换成功',
          type: 'success'
        })
        console.log(res)
        location.reload()
      })
}
const handleSetDarkMode = () => {
  console.log('handleSetDarkMode')
  store.dispatch('settings/toggleDarkMode', {
    value: !darkMode.value
  })

}


</script>