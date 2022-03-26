<template>
  <h1>{{ $t('home.test') }}</h1>
  <div class="dash">
    <div v-for="dash_item of dash" :style="{backgroundImage:`url(${dash_item.img_src})`}" class="dash_item">
      <div class="dash_item-title">{{ dash_item.title }}</div>
      <div class="dash_item-desc">{{ dash_item.description }}</div>
    </div>
  </div>
  <!--  <el-button @click="getUsers()">获取用户信息</el-button>-->
</template>

<script setup>
import {inject, onMounted, ref} from "vue";
import store from "@/store";
import {getArticles} from "@/api/article";

const $t = inject('$t'),
    dash = ref([])
onMounted(() => {
  getUsers()
  getArticles({
    limit: 3,
    page: 1,
    order: 'views desc'
  })
      .then(res => dash.value = res.data)
})
const getUsers = () => {
  console.log(store.getters.user);
}
</script>

<style lang="scss" scoped>
.dash {
  @apply w-10/12 max-w-4xl h-36 mx-auto grid grid-cols-3 gap-5;
  .dash_item {
    @apply w-full rounded-3xl bg-center bg-no-repeat shadow-sm transition-all relative overflow-hidden;
    background-size: 100%;

    &::before {
      @apply w-full h-full bg-gray-darkest bg-opacity-0 transition block absolute top-0 left-0 rounded-3xl;
      content: "";
    }

    &:hover {
      background-size: 120%;

      &::before {
        @apply bg-opacity-40 backdrop-blur ;
      }
    }

    &-title,
    &-desc {
      @apply block w-full py-1.5 text-center absolute top-5 bg-gray-darkest font-bold text-white truncate;
    }

    &-desc {
      @apply top-1/2;
    }
  }
}
</style>