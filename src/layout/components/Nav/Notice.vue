<template>
  <el-popover :effect="darkMode?'dark':'light'" :width="200" placement="bottom" trigger="click">
    <template #reference>
      <div class="text-center text-xl text-gray-800 relative self-center">
        <span class="w-3 h-3 bg-rose-200 animate-ping rounded-full absolute right-0.5 top-0.5"/>
        <span class="w-2 h-2 bg-rose-300 rounded-full absolute right-1 top-1"/>
        <el-icon class="cursor-pointer hover:text-rose-300 text-gray-500">
          <bell/>
        </el-icon>
      </div>
    </template>
    <div class="dark:text-gray-100">
      <!--   TODO:消息通知模板   -->
      Content
    </div>
  </el-popover>
</template>

<script setup>
import {Bell} from "@element-plus/icons-vue";
import {computed} from "vue";
import store from "@/store";

let darkMode = computed(() => store.state.settings.darkMode)
</script>