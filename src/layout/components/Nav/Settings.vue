<template>
  <el-switch
      v-model="darkMode"
      active-text="夜间模式"
      inactive-text="日间模式"
  ></el-switch>
  <el-dropdown class="languages" trigger="click" @command="handleSetLanguage">
    　　
    <div style="font-size: 15px;">
      　　　　<span>{{ langName }}</span>
      　　　　<i class="el-icon-arrow-down el-icon--right"/>
      　　
    </div>
    　　
    <template #dropdown>
      　　　　
      <el-dropdown-menu>
        　　　　　　
        <el-dropdown-item :disabled="language==='zh'" command="zh">中文</el-dropdown-item>
        　　　　　　
        <el-dropdown-item :disabled="language==='en'" command="en">English</el-dropdown-item>
        　　　　
      </el-dropdown-menu>
      　　
    </template>
  </el-dropdown>
</template>

<script>
import Cookie from "js-cookies";

export default {
  data() {
    return {
      langName: '',
      language: ''
    }
  },
  methods: {
    handleSetLanguage(lang) {
      if (lang === 'zh') {
        this.langName = '中文';
      } else {
        this.langName = 'English';
      }
      this.language = lang;
      Cookie.setItem('lang', lang);
      // ElMessage.success('语言切换成功');
      location.reload();
    }
  },
  mounted() {
    if (Cookie.getItem('lang') === undefined || Cookie.getItem('lang') === 'zh') {
      this.langName = '中文';
      this.language = 'zh';
    } else {
      this.langName = 'English';
      this.language = 'en';
    }
  },
  computed: {
    //是否显示设置栏
    settings: {
      get() {
        return this.$store.state.settings.showSettings
      }
      ,
      set(val) {
        this.$store.dispatch('settings/changeSetting', {
          key: 'showSettings',
          value: val,
        })
      }
    }
    ,
    //夜间模式
    darkMode: {
      get() {
        return this.$store.state.settings.darkMode
      }
      ,
      set(value) {
        this.$store.dispatch('settings/toggleDarkMode', {value})
      }
      ,
    }
  }
}
</script>

<style>

</style>