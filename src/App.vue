<script setup>
import Cookie from "js-cookies"
import {onMounted} from "vue";
import {useTheme} from "@/utils/themes";

onMounted(() => {
  //设置主题
  useTheme(Cookie.getItem('site_theme') || 'default')
})
</script>

<template>
  <router-view/>
</template>

<style>

</style>
