<template>
  <div
      :class="['login',`login_${login_back}`]"
      :style="{backgroundImage:login_back==='randomImage'?`url('${Config.server}/api/file/random')`:''}"
  >
    <div id="login_box" class="glasses">
      <div class="logo"><span>{{ Config.name }}<span :data-letters="Config.name"></span><span
          :data-letters="Config.name"></span></span></div>
      <div class="form_item">
        <el-icon>
          <user/>
        </el-icon>
        <input ref="account" v-model="login_form.account" :placeholder="$t('login.account_placeholder')" type="text"
               @keyup.enter="pwd.focus()"/>
        <div class="indicator"/>
      </div>
      <div class="form_item">
        <el-icon>
          <lock/>
        </el-icon>
        <input ref="pwd" v-model="login_form.password" :placeholder="$t('login.password_placeholder')"
               :type="passwordShow?'text':'password'"
               class="pwd" @focusin="passwordFocus=true"
               @focusout="passwordFocus=false"/>
        <div class="indicator"/>
        <div :class="['show_pwd',passwordShow?'active':'']" @click="passwordShow = !passwordShow"/>
      </div>
      <div class="form_item">
        <span class="link"><router-link to="/forget">{{ $t('login.forget') }}</router-link></span>
        <span class="link"><router-link to="/register">{{ $t('login.register') }}</router-link></span>
      </div>
      <div class="form_item">
        <el-button class="login_btn" @click="login">{{ $t('login.login') }}</el-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import {inject, onBeforeMount, ref} from "vue";
import Config from "/garren.config"
import {Lock, User} from "@element-plus/icons-vue"
import {ElNotification} from "element-plus";
import store from "@/store";
import NProgress from "nprogress";
import router from "@/router";

const $t = inject('$t'),
    login_back = Config.login_background,
    account = ref(null),
    pwd = ref(null)

let login_form = ref({
      account: '',
      password: ''
    }),
    passwordShow = ref(false),
    passwordFocus = ref(false)

//进入页面直接输入用户名可自动填入到账号输入框
//已经输入用户名密码在任意位置按enter键登录
onBeforeMount(() => {
  window.addEventListener("keydown", e => {
    // if (!(e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || e.key === 'Enter') && login_form.value.account.length < 1 && !passwordFocus.value) account.value.focus()
    if (e.key === 'Enter' && login_form.value.account.length > 0 && login_form.value.password.length > 0) login()
  })
})

const login = () => {
  NProgress.start()
  if (!login_form.value.account) {
    ElNotification({
      message: $t('login.ipt_account'),
      type: "error"
    })
    NProgress.done()
    return
  }
  if (!login_form.value.password) {
    ElNotification({
      message: $t('login.ipt_password'),
      type: "error"
    })
    NProgress.done()
    return
  }
  store.dispatch("app/login", login_form.value)
      .then(() => {
        ElNotification({
          message: $t('login.success'),
          type: "success"
        })
        router.push({path: '/'})
      })
      .catch(() => {
        ElNotification({
          message: $t('login.fail'),
          type: "error"
        })
      })
      .finally(() => {
        NProgress.done()
      });
}
</script>

<style lang="scss" scoped>
@keyframes movement {
  0%, 100% {
    background-size: 130vmax 130vmax,
    80vmax 80vmax,
    90vmax 90vmax,
    110vmax 110vmax,
    90vmax 90vmax;
    background-position: -80vmax -80vmax,
    60vmax -30vmax,
    10vmax 10vmax,
    -30vmax -10vmax,
    50vmax 50vmax;
  }
  25% {
    background-size: 100vmax 100vmax,
    90vmax 90vmax,
    100vmax 100vmax,
    90vmax 90vmax,
    60vmax 60vmax;
    background-position: -60vmax -90vmax,
    50vmax -40vmax,
    0vmax -20vmax,
    -40vmax -20vmax,
    40vmax 60vmax;
  }
  50% {
    background-size: 80vmax 80vmax,
    110vmax 110vmax,
    80vmax 80vmax,
    60vmax 60vmax,
    80vmax 80vmax;
    background-position: -50vmax -70vmax,
    40vmax -30vmax,
    10vmax 0vmax,
    20vmax 10vmax,
    30vmax 70vmax;
  }
  75% {
    background-size: 90vmax 90vmax,
    90vmax 90vmax,
    100vmax 100vmax,
    90vmax 90vmax,
    70vmax 70vmax;
    background-position: -50vmax -40vmax,
    50vmax -30vmax,
    20vmax 0vmax,
    -10vmax 10vmax,
    40vmax 60vmax;
  }
}

@keyframes wink-animation {
  0% {
    height: 8px;
  }
  10% {
    height: 1px;
  }
  80% {
    height: 8px;
  }
  20% {
    height: 8px;
  }
  90% {
    height: 1px;
  }
  100% {
    height: 8px;
  }
}


#login_box {
  @apply w-72 p-5 px-10 box-content text-gray-darkest animate-bounceInUp;
}

.logo {
  @apply text-center;
  @apply cursor-default;
  & > span {
    @apply text-white text-5xl font-bold overflow-hidden relative inline-block;
    font-family: "Dosis", sans-serif;
    transition: color 0.5s 0.25s;
    line-height: 1;

    &:hover {
      @apply transition-none text-transparent;
    }

    &::before {
      @apply bg-white w-full absolute left-0 top-1/2 ;
      content: '';
      height: 6px;
      margin: -3px 0 0 0;
      transform: translate3d(-100%, 0, 0);
      transition: transform .4s cubic-bezier(.7, 0, .3, 1);
    }

    &:hover::before {
      transform: translate3d(100%, 0, 0);
    }

    & > span {
      @apply absolute h-1/2 w-full left-0 top-0 overflow-hidden;

      &::before {
        @apply text-rose-400 absolute left-0 w-full;
        content: attr(data-letters);
        transition: transform .5s;
      }

      &:first-child::before {
        @apply top-0;
        transform: translate3d(0, 100%, 0);
      }

      &:nth-child(2) {
        @apply top-1/2;

        &::before {
          @apply bottom-0;
          transform: translate3d(0, -100%, 0);
        }
      }
    }

    &:hover > span::before {
      transition-delay: .3s;
      transform: translate3d(0, 0, 0);
      transition-timing-function: cubic-bezier(.2, 1, .3, 1);
    }
  }
}

.form_item {
  @apply flex flex-nowrap my-5 mx-0 relative;

  .el-icon {
    @apply text-white text-2xl mr-2;
  }

  input {
    @apply transition-all outline-none mr-2.5 w-full relative text-white bg-transparent;

    &::placeholder {
      color: rgba(255, 255, 255, .6);
    }
  }

  .pwd {
    margin-right: 30px;
  }

  .show_pwd {
    $box_size: 30px;
    $dot_size: 8px;
    @apply absolute right-0 cursor-pointer;
    width: $box_size;
    height: $box_size;

    &:before, &:after {
      content: "";
      width: $dot_size;
      height: $dot_size;
      background: white;
      position: absolute;
      top: calc((#{$box_size} - #{$dot_size}) / 2);
      border-radius: 50%;
      transition: none;
    }

    &:before {
      right: 4px;
    }

    &:after {
      left: 4px;
    }

    &.active:before, &.active:after {
      @apply bg-rose-300;
      animation: wink-animation .6s linear alternate;
    }
  }

  .indicator {
    @apply transition-all w-1/12 h-0.5 opacity-0 bg-white absolute left-0 -bottom-1.5;
    transition-duration: .55s;
  }

  & > input:focus + .indicator {
    @apply w-full opacity-100;
  }

  .link {
    @apply text-gray-100 text-xs hover:scale-150 hover:underline hover:text-rose-300 leading-7 transition-all text-right ml-3;
    transition-property: transform;

    &:first-child {
      @apply ml-auto;
    }
  }

  .login_btn {
    @apply w-10/12 mx-auto text-white border-2 hover:text-rose-300;
  }
}

//登录背景主题在这
.login {
  @apply min-h-screen flex items-center justify-center;

  &_default {
    background-color: #e493d0;
    background-image: radial-gradient(closest-side, rgba(235, 105, 78, 1), rgba(235, 105, 78, 0)),
    radial-gradient(closest-side, rgb(42, 11, 243), rgba(243, 11, 164, 0)),
    radial-gradient(closest-side, rgba(254, 234, 131, 1), rgba(254, 234, 131, 0)),
    radial-gradient(closest-side, rgba(170, 142, 245, 1), rgba(170, 142, 245, 0)),
    radial-gradient(closest-side, rgb(151, 234, 96), rgba(248, 192, 147, 0));
    background-size: 130vmax 130vmax,
    80vmax 80vmax,
    90vmax 90vmax,
    110vmax 110vmax,
    90vmax 90vmax;
    background-position: -80vmax -80vmax,
    60vmax -30vmax,
    10vmax 10vmax,
    -30vmax -10vmax,
    50vmax 50vmax;
    background-repeat: no-repeat;
    animation: 10s movement linear infinite;

    &::before {
      content: '';
      display: block;
      position: fixed;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
    }
  }

  &_randomImage {
    @apply bg-cover bg-fixed bg-no-repeat bg-center animate-none;
  }
}
</style>