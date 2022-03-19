<template>
  <div
      :class="['login',`login_${login_back}`]"
      :style="{backgroundImage:login_back==='randomImage'?`url('${Config.server}/api/file/random')`:''}"
  >
    <div id="login_box">
      <div class="logo"><span>Garren<span data-letters="Garren"></span><span data-letters="Garren"></span></span></div>
      <div class="form_item">
        <input placeholder="账号" type="text"/>
        <div class="indicator"/>
        <el-icon class="text-white text-2xl">
          <user/>
        </el-icon>
      </div>
      <div :class="passwordIptShow?'active':''" class="form_item password" @click="e=>inputPwd(e)">
        <input ref="pwd" :type="passwordShow?'text':'password'" class="password-input" maxlength="9" type="password"
               @focusout="passwordIptShow=false"/>
        <div :class="[passwordShow?'active':'']" class="check" @click="showPassword">
          <svg>
            <use xlink:href="#check"/>
          </svg>
        </div>
        <div class="lock">
          <svg>
            <path
                d="M 162 29 C 160.343 29 159 27.657 159 26 L 159 14 C 159 12.343 160.343 11 162 11 L 176 11 C 177.657 11 179 12.343 179 14 L 179 26 C 179 27.657 177.657 29 176 29 L -48.887 29.104 M 162.5 11 L 162.5 4 C 162.5 2.343 163.843 1 165.5 1 L 172.5 1 C 174.157 1 175.5 2.343 175.5 4 L 175.5 11"/>
          </svg>
        </div>
        <div class="indicator"></div>
      </div>
    </div>
    <svg style="display: none;" xmlns="http://www.w3.org/2000/svg">
      <symbol id="check" viewBox="0 0 20 15" xmlns="http://www.w3.org/2000/svg">
        <polyline points="1 8.53 6.33 14 19 1"/>
      </symbol>
    </svg>
  </div>
</template>

<script setup>
import {ref} from "vue";
import Config from "/garren.config"
import {User} from "@element-plus/icons-vue"

const pwd = ref(null)

// const login_back = 'randomImage';
const login_back = 'default'

let login_form = ref({
  account: '',
  password: ''
})

let passwordIptShow = ref(false)
let passwordShow = ref(false)

const login = () => {
  console.log(login_form.value)
}

function inputPwd(e) {
  if (e.offsetX > (180 - 22) && passwordIptShow.value) {
    debugger
    passwordShow.value = !passwordShow.value
    return
  }
  passwordIptShow.value = true
  pwd.value.focus()
}
</script>

<style lang="scss" scoped>
$form_item-width: 180px;
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
    height: 6px;
  }
  10% {
    height: 1px;
  }
  20% {
    height: 6px;
  }
  80% {
    height: 6px;
  }
  90% {
    height: 1px;
  }
  100% {
    height: 6px;
  }
}

@font-face {
  font-family: "Dosis";
  font-style: normal;
  src: url("http://fonts.gstatic.com/s/dosis/v25/HhyJU5sn9vOmLxNkIwRSjTVNWLEJt7Ql2xMCbKsUPqjm.woff") format("woff");
}

#login_box {
  @apply p-5 px-10 box-content backdrop-blur-lg rounded-3xl text-gray-darkest shadow-sm;
  width: $form_item-width;
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

.form_item {
  display: flex;
  flex-wrap: nowrap;
  margin: 20px 0;
  position: relative;

  input {
    @apply transition-all outline-none;
    background: none;
    margin-right: 10px;
    width: 100%;
    position: relative;
    color: #ffffff;
    opacity: 0;

    &::placeholder {
      color: rgba(255, 255, 255, .6);
    }

    &:focus {
      opacity: 1;
    }
  }

  .indicator {
    @apply transition-all;
    transition-duration: .55s;
    width: 10%;
    opacity: 0;
    height: 2px;
    background: #ffffff;
    position: absolute;
    right: 0;
    bottom: -5px;
  }

  & > input:focus + .indicator {
    width: 100%;
    opacity: 1;
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
}

.password {
  $svg-color: #fff;
  $text-color: #fff;
  $medium-color: #ffa850;
  $height: 30px;
  @apply flex items-center justify-center relative;
  & input {
    @apply absolute appearance-none cursor-pointer m-0 p-0;
    background: none;
    outline: none;
    border: 0;
    width: 0;
    height: $height;
    transition: all .6s ease-out;
    color: $text-color;
    font: 400 14px 'Poppins', sans-serif;
    z-index: 1;
  }

  .check {
    display: none;
    width: $height;
    height: $height;
    padding: 5px 2px 5px 8px;
    box-sizing: border-box;
    position: absolute;
    right: 0;
    z-index: 3;
    cursor: pointer;

    svg {
      fill: none;
      stroke: red;
      stroke-width: 2px;
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke-dashoffset: 26;
      stroke-dasharray: 26;
      transition: stroke-dashoffset .6s ease;
    }
  }

  .lock {
    width: $form_item-width;
    height: $height;
    position: absolute;
    right: 0;

    &::before, &::after {
      content: "";
      position: absolute;
      background: $svg-color;
      pointer-events: none;
    }

    &::before {
      right: 8px;
      bottom: 9px;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      -webkit-transition: bottom .2s ease-out .4s, right .4s ease-out;
      transition: bottom .2s ease-out .4s, right .4s ease-out;
    }

    &::after {
      right: 10px;
      bottom: 5px;
      width: 2px;
      height: 10px;
      border-radius: 2px;
      -webkit-transition: bottom .4s ease-out .4s, border-radius .2s ease-out .4s, width .2s ease-out .4s, right .4s ease-out, height .4s ease .8s;
      transition: bottom .4s ease-out .4s, border-radius .2s ease-out .4s, width .2s ease-out .4s, right .4s ease-out, height .4s ease .8s;
    }

    svg {
      display: block;
      height: 100%;
      width: 100%;
      fill: none;
      stroke: $svg-color;
      stroke-width: 2px;
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke-dashoffset: 263;
      stroke-dasharray: 0 263 71 263;
      -webkit-transition: all .6s ease-out;
      transition: all .6s ease-out;
    }
  }

  &.active {
    input {
      width: 100%;
      padding: 0 $height 0 5px;
      cursor: text;
      box-sizing: border-box;
    }

    .check {
      @apply flex;
      position: absolute;
      z-index: 10;

      &.submit {
        svg {
          stroke-dashoffset: 0;
          stroke-dasharray: 26;
        }

        & ~ .lock {
          &::before, &::after {
            opacity: 0;
            right: 9px;
            -webkit-transition: right .2s ease-out, opacity .2s ease-out;
            transition: right .2s ease-out, opacity .2s ease-out;
          }
        }
      }

      &.active {
        & ~ .lock {
          &::before {
            animation: wink-animation .6s linear alternate;
            background: $medium-color;
          }

          &::after {
            animation: wink-animation .6s linear alternate;
            background: $medium-color;
          }
        }
      }
    }

    .lock {
      &::before {
        right: 3px;
        bottom: 11px;
        transition: bottom .1s ease-out .1s, right .4s ease-out .2s, background .2s ease-out, opacity .2s ease-out;
      }

      &::after {
        right: 15px;
        bottom: 11px;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        transition: height .2s ease-out, bottom .2s ease-out, border-radius .2s ease-out .2s, width .2s ease-out .2s, right .4s ease-out .2s, background .2s ease-out, opacity .2s ease-out;
      }

      svg {
        stroke-dashoffset: 207;
        stroke-dasharray: 0 263 177 263;
      }
    }

    .indicator {
      @apply w-72;
      height: $height;
      position: absolute;
      right: 0;

      &::before {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 0;
        height: 2px;
        border-radius: 5px;
        background: transparent;
        z-index: 3;
        transition: background .6s ease-out, width .6s ease-out;
      }
    }
  }
}
</style>