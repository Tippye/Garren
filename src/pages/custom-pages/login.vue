<template>
  <div
      :class="['login',`login_${login_back}`]"
      :style="{backgroundImage:login_back==='randomImage'?`url('${Config.server}/api/file/random')`:''}"
  >
    <div id="login_box" class="w-96 p-5 backdrop-blur-lg rounded-3xl text-gray-darkest shadow-sm">
      <div class="logo"><span>Garren<span data-letters="Garren"></span><span data-letters="Garren"></span></span></div>
      <el-form :model="login_form">
        <div class="label">账号：</div>
        <el-input v-model="login_form.account" placeholder="账号/邮箱/手机号"/>
        <div class="label">密码：</div>
        <el-input v-model="login_form.password" placeholder="密码" show-password type="password"/>
        <el-button class="my-5 text-rose-300 hover:text-white" type="primary" @click="login">登录</el-button>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";
import Config from "/garren.config"

const login_back = 'randomImage'

let login_form = ref({
  account: '',
  password: ''
})

const login = () => {
  console.log(login_form.value)
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

@font-face {
  font-family: "Dosis";
  font-style: normal;
  src: url("http://fonts.gstatic.com/s/dosis/v25/HhyJU5sn9vOmLxNkIwRSjTVNWLEJt7Ql2xMCbKsUPqjm.woff") format("woff");
}

.logo {
  @apply text-center;
  @apply cursor-default;
  & > span {
    @apply text-5xl;
    @apply text-white;
    font-family: "Dosis", sans-serif;
    font-weight: 800;
    transition: color 0.5s 0.25s;
    overflow: hidden;
    position: relative;
    line-height: 1;
    display: inline-block;

    &:hover {
      transition: none;
      color: transparent;
    }

    &::before {
      @apply bg-white;
      content: '';
      width: 100%;
      height: 6px;
      margin: -3px 0 0 0;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translate3d(-100%, 0, 0);
      transition: transform .4s cubic-bezier(.7, 0, .3, 1);
    }

    &:hover::before {
      transform: translate3d(100%, 0, 0);
    }

    & > span {
      position: absolute;
      height: 50%;
      width: 100%;
      left: 0;
      top: 0;
      overflow: hidden;

      &::before {
        @apply text-rose-400;
        content: attr(data-letters);
        position: absolute;
        left: 0;
        width: 100%;
        transition: transform .5s;
      }

      &:first-child::before {
        top: 0;
        transform: translate3d(0, 100%, 0);
      }

      &:nth-child(2) {
        top: 50%;

        &::before {
          bottom: 0;
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

.login {
  @apply min-h-screen;
  @apply flex;
  @apply items-center;
  @apply justify-center;

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

    #login_box {
      @apply backdrop-blur-3xl;
      background: rgba(255, 255, 255, .1);
      border: 1px solid rgba(255, 255, 255, .2);
      border-right: 1px solid rgba(255, 255, 255, .1);
      border-bottom: 1px solid rgba(255, 255, 255, .1);
    }
  }

  &_randomImage {
    @apply bg-cover;
    @apply bg-fixed;
    @apply bg-no-repeat;
    @apply bg-center;
    @apply animate-none;
  }

  .label {
    @apply mt-3;
    @apply mb-1;
  }
}

#login_box {
  .label {
    @apply text-white;
  }
}
</style>

<style lang="scss">
#login_box {
  .el-input {
    @apply w-full;
    input {
      @apply rounded-xl;
      @apply bg-transparent;
      @apply text-white;
      @apply h-12;
      @apply focus:border-rose-300;
      border: 1px solid rgba(255, 255, 255, .6);


      &::placeholder {
        @apply text-white;
      }
    }
  }

  .el-button {
    span {
      color: inherit;
    }
  }
}
</style>