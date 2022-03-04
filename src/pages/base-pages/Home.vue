<template>
  <h1>{{ $t('home.test') }}</h1>
  <el-button @click="getUsers()">获取用户信息</el-button>
</template>

<script setup>
import {inject} from "vue";
import {getUsers as _getUsers} from "@/api/user";
import User from "@/entity/User";

const $t = inject('$t')
const getUsers = () => {
  _getUsers()
      .then(res => {
        let u = new User(res.data[0])
        console.log(u);
      })
      .catch(err => {
        console.log(err);
      })
}
</script>

<style scoped>

</style>