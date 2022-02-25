<script setup>

</script>

<template>
  <router-link to="/">Home</router-link>
  <router-link to="/about">About</router-link>
  <router-view v-slot="{Component}">
    <suspense>
      <component :is="Component" />
    </suspense>
  </router-view>
</template>

<style>

</style>
