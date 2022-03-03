<template>
  <el-switch
      v-model="darkMode"
      active-text="夜间模式"
      inactive-text="日间模式"
  ></el-switch>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {
    //是否显示设置栏
    settings: {
      get() {
        return this.$store.state.settings.showSettings
      },
      set(val) {
        this.$store.dispatch('settings/changeSetting', {
          key: 'showSettings',
          value: val,
        })
      }
    },
    //夜间模式
    darkMode: {
      get() {
        return this.$store.state.settings.darkMode
      },
      set(value) {
        this.$store.dispatch('settings/toggleDarkMode', {value})
      },
    }
  }
}
</script>

<style>

</style>