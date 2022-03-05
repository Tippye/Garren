<template>
  <ul class="flex items-center space-x-6">
    <li v-for="nav_item of nav_list"
        class="font-semibold text-gray-500 cursor-pointer hover:text-rose-300 transition-colors">
      <router-link :to="nav_item.url"><img v-if="nav_item.ico" :src="nav_item.ico" alt="">{{ nav_item.title }}
      </router-link>
    </li>
  </ul>
</template>

<script setup>
import {inject} from "vue";

const $t = inject('$t')
const nav_list = [{
  ico: null,
  title: $t('nav.home'),
  url: '/'
}, {
  ico: null,
  title: $t('nav.link'),
  url: '/'
}]
</script>

<style scoped>

</style>