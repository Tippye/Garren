<template>
  <h1>{{ $t('home.test') }}</h1>
  <el-button @click="getUsers()">获取用户信息</el-button>
</template>

<script setup>
import {inject} from "vue";
import {getUsers as _getUsers} from "@/api/login";

const $t = inject('$t')
const getUsers = () => {
  _getUsers()
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
}
</script>

<style scoped>

</style>