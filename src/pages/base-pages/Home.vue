<template>
  <h1>{{ $t('home.test') }}</h1>
</template>

<script setup>
import {inject} from "vue";

const $t = inject('$t')
</script>

<style scoped>

</style>