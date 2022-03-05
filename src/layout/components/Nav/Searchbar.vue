<template>
  <view class="flex">
    <!--    <input class="outline-none bg-transparent shadow-sm shadow-gray-300 focus:shadow-pink-300 w-full box-border px-" type="text" name="search" id="search" placeholder="Search..." />-->
    <el-input
        v-model="search_text"
        :prefix-icon="search_icon"
        class="w-full m-2"
        placeholder="Type something"
    />
  </view>
</template>

<script setup>
import {ref} from "vue";
import {Search as search_icon} from '@element-plus/icons-vue'

let search_text = ref('')
</script>

<style scoped>

</style>