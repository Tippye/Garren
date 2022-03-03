<script setup>
import Cookie from "js-cookies"
import {onMounted} from "vue";
import {useTheme} from "@/utils/themes";
import locale from 'element-plus/lib/locale/lang/zh-cn'

onMounted(() => {
  //设置主题
  useTheme(Cookie.getItem('site_theme') || 'default')
})
</script>

<template>
  <el-config-provider :locale="locale">
    <router-view/>
  </el-config-provider>
</template>

<style>

</style>
