<template>
  <el-switch
      v-model="darkMode"
      active-text="夜间模式"
      inactive-text="日间模式"
  ></el-switch>
  <el-color-picker
      v-model="theme"
      :predefine="['#fef0ed', '#1890ff', '#333333','#212121','#11a983', '#13c2c2', '#6959CD', '#f5222d', ]"
      class="theme-picker"
      popper-class="theme-picker-dropdown"
  />
</template>

<script>
export default {
  data() {
    return {
      chalk: '', // content of theme-chalk css
      theme: ''
    }
  },
  computed: {
    // //是否显示设置栏
    // settings: {
    //   get() {
    //     return this.$store.state.settings.showSettings
    //   },
    //   set(val) {
    //     this.$store.dispatch('settings/changeSetting', {
    //       key: 'showSettings',
    //       value: val,
    //     })
    //   }
    // },
    // //夜间模式
    // darkMode: {
    //   get() {
    //     return this.$store.state.settings.darkMode
    //   },
    //   set(val) {
    //     this.$store.dispatch('settings/changeSetting', {
    //       key: 'darkMode',
    //       value: val
    //     })
    //   },
    // }
  }
  ,
  watch: {
    theme(val) {
      this.$store.dispatch('settings/changeThemes', {val})
    }
  }
}
</script>

<style>

</style>