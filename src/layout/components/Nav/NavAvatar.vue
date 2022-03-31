<template>
  <div class="h-9 relative group mx-2">
    <el-avatar :src="user?user.head_img:site_avatar" alt=""
               class="h-9 transition-all group-hover:scale-125 shadow"/>
    <div
        class="w-44 bg-white dark:bg-gray-darkest absolute right-0 invisible group-hover:visible shadow group-hover:animate-bounceInUp">
      <ul>
        <template v-for="item in avatar_list">
          <li v-if="item&&item.show"
              class="w-full py-2 px-2.5 shadow-sm dark:text-gray-100 cursor-pointer" @click="item.fun()">
            <router-link v-if="item.path" :to="item.path" class="w-full h-full block">{{ item.text }}</router-link>
            <span v-else class="text-inherit">{{ item.text }}</span>
          </li>
        </template>
      </ul>
      <div class="flex max-w-full flex-nowrap items-center justify-between px-3 py-1.5">
        <button aria-label="auto" aria-live="polite" class="relative sun-and-moon-box" @click="handleSetDarkMode">
          <svg aria-hidden="true" class="sun-and-moon rounded-full" height="24" viewBox="0 0 24 24"
               width="24">
            <circle class="sun text-yellow-300 shadow-sm shadow-amber-300 dark:text-gray-100" cx="12" cy="12"
                    fill="currentColor"
                    mask="url(#moon-mask)"
                    r="6"/>
            <g class="sun-beams text-yellow-300 dark:text-gray-100" stroke="currentColor">
              <line x1="12" x2="12" y1="1" y2="3"/>
              <line x1="12" x2="12" y1="21" y2="23"/>
              <line x1="4.22" x2="5.64" y1="4.22" y2="5.64"/>
              <line x1="18.36" x2="19.78" y1="18.36" y2="19.78"/>
              <line x1="1" x2="3" y1="12" y2="12"/>
              <line x1="21" x2="23" y1="12" y2="12"/>
              <line x1="4.22" x2="5.64" y1="19.78" y2="18.36"/>
              <line x1="18.36" x2="19.78" y1="5.64" y2="4.22"/>
            </g>
            <mask id="moon-mask" class="moon text-gray-darkest dark:text-gray-100">
              <rect fill="white" height="100%" width="100%" x="0" y="0"/>
              <circle cx="24" cy="10" fill="black" r="6"/>
            </mask>
          </svg>
        </button>
        <el-popover :effect="darkMode?'dark':'light'" :width="200" placement="bottom">
          <template #reference>
            <i class="el-icon el-tooltip__trigger text-gray-darkest dark:text-gray-100" style="font-size: 20px;">
              <svg data-v-1e752d22="" height="1.2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"
                   width="1.2em">
                <path
                    d="m18.5 10l4.4 11h-2.155l-1.201-3h-4.09l-1.199 3h-2.154L16.5 10h2zM10 2v2h6v2h-1.968a18.222 18.222 0 0 1-3.62 6.301a14.864 14.864 0 0 0 2.336 1.707l-.751 1.878A17.015 17.015 0 0 1 9 13.725a16.676 16.676 0 0 1-6.201 3.548l-.536-1.929a14.7 14.7 0 0 0 5.327-3.042A18.078 18.078 0 0 1 4.767 8h2.24A16.032 16.032 0 0 0 9 10.877a16.165 16.165 0 0 0 2.91-4.876L2 6V4h6V2h2zm7.5 10.885L16.253 16h2.492L17.5 12.885z"></path>
              </svg>
            </i>
          </template>
          <ul>
            <li v-for="(item,lang) of language_list"
                :class="language===lang?'text-gray-400 cursor-not-allowed':'hover:bg-gray-100 dark:text-gray-100 hover:dark:text-gray-darkest'"
                class="w-full py-2 px-2.5 shadow-sm cursor-pointer"
                @click="handleSetLanguage(lang)"
            >{{ item.language }}
            </li>
          </ul>
        </el-popover>
      </div>
    </div>
  </div>
</template>

<script setup>
import store from "@/store";
import {computed, inject} from "vue";
import {ElNotification} from "element-plus";
import {i18n} from "@/language";

const $t = inject('$t'),
    site_avatar = store.state.settings.site_avatar,
    user = store.state.app.user,
    language_list = i18n.global.messages
let language = store.state.settings.lang,
    darkMode = computed(() => store.state.settings.darkMode)

/**
 * 切换语言
 * @param lang
 */
const handleSetLanguage = (lang) => {
  store.dispatch('settings/changeLanguage', lang)
      .then(() => {
        ElNotification({
          title: '语言更换成功',
          type: 'success'
        })
        location.reload()
      })
}
/**
 * 切换夜间模式
 */
const handleSetDarkMode = () => {
  store.dispatch('settings/toggleDarkMode', {
    value: !darkMode.value
  })
}
/**
 * 退出登录
 */
const logout = () => {
  store.dispatch("app/logout")
      .then(() => {
        location.reload()
      })
}

//头像弹出菜单
const avatar_list = [
  {
    text: $t('login.login'),
    path: '/login',
    show: !user,
  }, {
    text: $t('login.register'),
    path: '/register',
    show: !user,
  }, {
    text: $t('avatar_menu.self_material'),
    path: '',
    show: !!user,
  }, {
    text: $t('avatar_menu.admin_manage'),
    path: '',
    show: !!user,
  }, {
    text: $t('login.logout'),
    fun: logout,
    show: !!user,
  }
]
</script>

<style lang="scss" scoped>
.sun-and-moon-box {
  width: 24px;
  height: 24px;
}

.sun-and-moon {
  cursor: pointer;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
  outline-offset: 5px;

  & > svg {
    inline-size: 100%;
    block-size: 100%;
    stroke-linecap: round;
  }

  & > * {
    transform-origin: center center;;
  }

  & > .sun {
    transition: transform .5s cubic-bezier(.5, 1.25, .75, 1.25);
  }

  & > .sun-beams {
    transition: transform .5s cubic-bezier(.5, 1.5, .75, 1.25),
    opacity .5s cubic-bezier(.25, 0, .3, 1);

    & > line {
      color: inherit;
    }
  }

  & > .moon > circle {
    transition-delay: .25s;
    transition-duration: .5s;
  }
}

.dark .sun-and-moon {
  & > .sun {
    transform: scale(1.5);
    transition-timing-function: cubic-bezier(.25, 0, .3, 1);
    transition-duration: .25s;
  }

  & > .sun-beams {
    opacity: 0;
    transition-duration: .15s
  }

  & > .moon > circle {
    transform: translateX(-7px);
    transition: transform .25s cubic-bezier(0, 0, 0, 1);

    @supports (cx: 1) {
      transform: translateX(0);
      cx: 17;
      transition: cx .25s cubic-bezier(0, 0, 0, 1);
    }
  }
}
</style>