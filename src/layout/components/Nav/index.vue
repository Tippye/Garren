<template>
  <div id="nav" class="w-full px-10 py-2 fixed top-0 left-0 bg-opacity-90 backdrop-blur-md box-border grid gap-1">
    <div class="h-10 flex flex-nowrap items-center">
      <img alt="Garren" class="h-full object-left" src="/public/favicon.ico">
      <span class=" text-xl text-gray-800 font-bold items-center ml-2">Garren</span>
    </div>
    <!--    <div class="grid grid-cols-8 items-center col-span-5 col-start-8 h-10">-->
    <search-bar class="items-center col-start-3"/>
    <nav-list class="items-center"/>
    <notice class="self-center"/>
    <nav-avatar class="self-center w-max max-h-full"/>
    <!--    </div>-->
  </div>
</template>

<script setup>
import SearchBar from "./Searchbar.vue";
import NavAvatar from "./NavAvatar.vue";
import NavList from "./NavList.vue";
import Notice from "./Notice.vue"</script>

<style lang="scss" scoped>
#nav {
  grid-template-columns: 20% auto 20% max-content 30px 50px;
}
</style>