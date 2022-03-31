<template>
  <div id="home" :style="{transform:`translateY(-${navHeight})`}">
    <div :style="{backgroundImage:`url('${Config.server}/api/file/random')`,paddingTop:navHeight}" class="home_face">
      <el-avatar :src="user?user.head_img:site_avatar"/>
      <div class="home_face-info">
        <div v-if="home_text" class="home_face-info-hitokoto">
          <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M470.9888 261.77536l0 98.54976c0 13.3632-10.83392 24.19712-24.19712 24.19712-47.68768 0-73.6256 48.90624-77.21984 145.43872l77.21984 0c13.3632 0 24.19712 10.84416 24.19712 24.19712l0 208.0768c0 13.3632-10.83392 24.19712-24.19712 24.19712L240.90624 786.432c-13.37344 0-24.19712-10.84416-24.19712-24.19712l0-208.0768c0-46.27456 4.6592-88.73984 13.84448-126.22848 9.4208-38.44096 23.87968-72.04864 42.96704-99.90144 19.64032-28.6208 44.20608-51.07712 73.02144-66.72384 29.00992-15.73888 62.74048-23.72608 100.25984-23.72608C460.15488 237.57824 470.9888 248.41216 470.9888 261.77536zM783.09376 384.52224c13.3632 0 24.19712-10.84416 24.19712-24.19712l0-98.54976c0-13.3632-10.83392-24.19712-24.19712-24.19712-37.50912 0-71.23968 7.9872-100.2496 23.72608-28.81536 15.64672-53.39136 38.10304-73.03168 66.72384-19.08736 27.8528-33.54624 61.46048-42.96704 99.91168-9.17504 37.49888-13.83424 79.96416-13.83424 126.21824l0 208.0768c0 13.3632 10.83392 24.19712 24.19712 24.19712l205.8752 0c13.3632 0 24.19712-10.84416 24.19712-24.19712l0-208.0768c0-13.3632-10.83392-24.19712-24.19712-24.19712L706.9696 529.96096C710.51264 433.42848 736.07168 384.52224 783.09376 384.52224z"
                fill="#ffffff"></path>
          </svg>
          <span>{{ home_text }}</span>
          <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M553.0112 762.23488l0-98.54976c0-13.3632 10.84416-24.19712 24.19712-24.19712 47.68768 0 73.6256-48.896 77.21984-145.42848l-77.21984 0c-13.3632 0-24.19712-10.84416-24.19712-24.19712l0-208.0768c0-13.3632 10.84416-24.19712 24.19712-24.19712l205.88544 0c13.3632 0 24.19712 10.84416 24.19712 24.19712l0 208.0768c0 46.27456-4.66944 88.7296-13.83424 126.22848-9.4208 38.44096-23.87968 72.04864-42.97728 99.90144-19.63008 28.6208-44.20608 51.07712-73.0112 66.72384-29.02016 15.73888-62.75072 23.72608-100.27008 23.72608C563.84512 786.432 553.0112 775.58784 553.0112 762.23488zM240.90624 639.47776c-13.3632 0-24.19712 10.84416-24.19712 24.19712l0 98.54976c0 13.3632 10.83392 24.19712 24.19712 24.19712 37.49888 0 71.24992-7.9872 100.2496-23.72608 28.81536-15.64672 53.39136-38.0928 73.02144-66.72384 19.0976-27.8528 33.55648-61.46048 42.97728-99.92192 9.17504-37.49888 13.83424-79.95392 13.83424-126.208l0-208.0768c0-13.3632-10.84416-24.19712-24.19712-24.19712L240.90624 237.568c-13.3632 0-24.19712 10.84416-24.19712 24.19712l0 208.0768c0 13.3632 10.83392 24.19712 24.19712 24.19712l76.1344 0C313.48736 590.58176 287.91808 639.47776 240.90624 639.47776z"
                fill="#ffffff"></path>
          </svg>
        </div>
        <div class="others_link">
          <div v-for="others_link of others_links" class="others_link-item">
            <a v-if="others_link.url" :href="others_link.url" target="_blank">
              <span v-html="others_link.svg"></span>
            </a>
            <span v-else @click="copyLink(others_link.title,others_link.text)">
              <span v-html="others_link.svg"></span>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="home_content">
      <h1 class="sec-title"><i>
        <Dessert/>
      </i>START: DASH!!
      </h1>
      <el-skeleton :count="3" :loading="!(dash&&dash.length>0)" animated class="dash">
        <template #template>
          <el-skeleton-item style="width: 100%;height: 100%" variant="image"/>
        </template>
        <template #default>
          <div class="dash">
            <div v-for="dash_item of dash"
                 :style="{backgroundImage:`url(${dash_item.img_src||(Config.server+'/api/file/random?id='+dash_item.id)})`}"
                 class="dash_item">
              <div class="dash_item-title">{{ dash_item.title }}</div>
              <div class="dash_item-desc" v-html="dash_item.description"></div>
            </div>
          </div>
        </template>
      </el-skeleton>
      <h1 class="sec-title"><i>
        <Guide/>
      </i>Discovery
      </h1>
      <el-skeleton :count="3" :loading="!(posts&&posts.length>0)" animated>
        <template #template>
          <div class="post_layout">
            <el-skeleton-item class="post_thumb" variant="image"/>
            <div class="post_content">
              <el-skeleton-item variant="p"/>
              <el-skeleton-item variant="h1"/>
              <el-skeleton-item variant="p"/>
              <div class="post_content-expand">
                <el-skeleton-item variant="text"/>
                <el-skeleton-item variant="text"/>
                <el-skeleton-item variant="text"/>
                <el-skeleton-item variant="circle"/>
              </div>
            </div>
          </div>
        </template>
        <template #default>
          <div class="post_area">
            <article v-for="post of posts" class="post">
              <router-link :to="'/article/'+post.id">
                <div class="post_thumb">
                  <el-image :alt="post.title" :src="post.img_src||(Config.server+'/api/file/random?id='+post.id)"
                            fit="cover"
                            lazy/>
                </div>
                <div class="post_content">
                  <span class="post_content-create"><i><Clock/></i> 发布于 {{ post.create_time }}</span>
                  <h2 class="post_content-title truncate-2">{{ post.title }}</h2>
                  <span class="post_content-desc">{{ post.description }}</span>
                  <div class="post_content-expand">
                    <span><i><View/></i><span>{{ post.views || '0' }}热度</span></span>
                    <span><i><ChatLineRound/></i><span>{{ post.expand.comments || '0' }}条评论</span></span>
                    <span v-if="post.expand.sort.length>0"><i><Files/></i><span>{{
                        post.expand.sort[0].name
                      }}</span></span>
                    <el-avatar :src-set="post.expand.author.head_img"/>
                  </div>
                </div>
              </router-link>
            </article>
          </div>
        </template>
      </el-skeleton>

      <el-button v-if="posts&&posts.length>0" v-show="!total||(posts.length<total)" class="more" @click="loadMore">
        More
      </el-button>
    </div>
  </div>
</template>

<script setup>
import {inject, onBeforeMount, ref} from "vue";
import {getArticles} from "@/api/article";
import Config from "/garren.config"
import {ChatLineRound, Clock, Dessert, Files, Guide, View} from "@element-plus/icons-vue"
import NProgress from "nprogress";
import store from "@/store";
import {getRandomWords} from "@/api/file";
import {copyText, parseLinks} from "@/utils/base";
import {getOptions} from "@/api/options";
import {ElNotification} from "element-plus";

const $t = inject('$t'),
    navHeight = store.state.app.navHeight,
    dash = ref([]),
    site_avatar = store.state.settings.site_avatar,
    user = store.state.app.user,
    others_links = ref(null)

let page = 0,
    total = ref(null),
    posts = ref([]),
    home_text = ref(null)

/**
 * 加载热门文章
 */
const loadHot = () => {
  getArticles({
    limit: 3,
    page: 1,
    order: 'views desc'
  })
      .then(res => dash.value = res.data)
}

/**
 * 加载更多文章
 */
const loadMore = () => {
  NProgress.start()
  page++
  getArticles({
    limit: 5,
    page
  })
      .then(res => {
        posts.value.push(...res.data)
        total.value = res.count
      })
      .finally(() => NProgress.done())
}

/**
 * 获取首页文字
 */
const getText = () => {
  if (store.state.settings.home_text === true) getRandomWords().then(res => {
    home_text.value = res
  })
  if (typeof store.state.settings.home_text === 'string') home_text.value = store.state.settings.home_text
}

/**
 * 获取配置
 */
const getConfigs = () => {
  getOptions()
      .then(res => {
        //防止第一次加载时不显示，所以直接使用请求结果
        //请求失败时再使用Cookie数据
        others_links.value = parseLinks(res.webmaster.opt)
        store.dispatch("settings/changeSetting", {key: 'site_title', value: res.site.opt.title})
        store.dispatch("settings/changeSetting", {key: 'site_fav', value: res.site.opt.favicon})
        store.dispatch("settings/changeSetting", {key: 'site_desc', value: res.site.opt.description})
        store.dispatch("settings/changeSetting", {key: 'site_avatar', value: res.site.opt.image})
        store.dispatch("settings/changeSetting", {key: 'record_info', value: res.site.opt.copy})
        store.dispatch("settings/changeSetting", {key: 'site_keywords', value: res.site.opt.keywords})
        store.dispatch("settings/changeSetting", {key: 'webmaster', value: JSON.stringify(res.webmaster.opt)})
      })
      .catch(() => {
        others_links.value = parseLinks(store.state.settings.webmaster)
      })
}

/**
 * 拷贝第三方账号
 *
 * @param name{String}  第三方平台名称
 * @param text{String}  第三方平台账号
 */
const copyLink = (name, text) => {
  copyText(text)
      .then(() => {
        ElNotification({
          type: 'success',
          title: `${name}已复制`,
          message: '快来找博主玩吧'
        })
      })
      .catch(() => {
        ElNotification({
          type: 'error',
          title: `${name}复制失败`
        })
      })
}

onBeforeMount(() => {
  getConfigs()
  getText()
  loadHot()
  loadMore()
})
</script>

<style lang="scss" scoped>
i {
  @apply dark:text-white;
  * {
    @apply w-5 h-5 inline;
  }
}

.home_face {
  @apply w-screen h-screen bg-no-repeat bg-cover bg-center;

  .el-avatar {
    $size: 30vw;
    $maxSize: 100px;
    @apply mx-auto block transition duration-700 border-4 border-white shadow-lg;
    width: $size;
    height: $size;
    margin-top: calc((90vh - #{$size}) / 2);

    @media(min-width: 500px) {
      width: $maxSize;
      height: $maxSize;
      margin-top: calc((90vh - #{$maxSize}) / 2);
    }

    &:hover {
      transform: rotate(360deg);
    }
  }

  &-info {
    @apply mx-auto mt-5 bg-gray-darkest bg-opacity-60 text-white p-3 rounded-xl text-center hover:bg-opacity-80;
    width: 60vw;

    &-hitokoto {
      @apply text-inherit truncate max-w-full;
      span {
        @apply text-inherit;
      }

      svg {
        @apply w-8 h-8 inline text-white leading-4;
      }
    }

    .others_link {
      @apply w-full flex items-center justify-center;

      &-item {
        @apply mx-2 cursor-pointer hover:scale-105 active:scale-100;
      }
    }
  }
}

.home_content {
  @apply w-10/12 mx-auto container pb-12;
}

.sec-title {
  @apply text-base pt-0.5 mt-2 mb-5 dark:text-white dark:hover:text-rose-300 hover:text-rose-300 transition-all subpixel-antialiased tracking-wide hover:tracking-widest;
  font-family: "Dosis", sans-serif;
}

.dash {
  @apply w-full max-w-4xl h-36 mx-auto grid grid-cols-3 gap-5;
  .dash_item {
    @apply w-full rounded-3xl bg-center bg-no-repeat shadow-sm transition-all relative overflow-hidden shadow-md duration-300;
    background-size: 100%;
    box-shadow: 0 0 4px rgba(0, 0, 0, .4);

    &::before {
      @apply w-full h-full bg-gray-darkest bg-opacity-0 transition block absolute top-0 left-0 rounded-3xl duration-300;
      content: "";
    }

    &-title,
    &-desc {
      @apply block w-full py-3 text-xl text-center absolute bottom-1/2 bg-gray-darkest bg-opacity-70 font-bold text-white truncate -translate-x-full transition duration-300;
    }

    &-desc {
      @apply bottom-4 w-1/2 text-sm;
      background: none;
      margin: 0 25%;
      transform: translateX(200%);
    }

    &:hover {
      background-size: 150%;

      &::before {
        @apply bg-opacity-60 backdrop-blur;
      }

      .dash_item-title,
      .dash_item-desc {
        @apply translate-x-0;
      }
    }
  }
}

.post_layout {
  @apply w-full h-60 my-5 rounded-3xl flex shadow-xl overflow-hidden;
  .post_thumb {
    @apply h-full flex-1;
  }

  .post_content {
    @apply flex-1 p-3 grid;
    grid-template-rows: 1.5rem 4rem auto 40px;

    &-expand {
      @apply w-full grid gap-2 items-center;
      grid-template-columns: repeat(3, auto) 40px;

      .el-skeleton__circle {
        @apply w-full h-full;
      }
    }
  }
}

.post {
  @extend .post_layout;
  @apply dark:text-white bg-white dark:bg-gray-darkest dark:bg-opacity-60 dark:backdrop-brightness-150 transition;
  -webkit-transform: rotate(0deg);

  & > a {
    @apply flex w-full h-full;
  }

  &:nth-child(2n) {
    & > a {
      @apply flex-row-reverse
    }

    .post_content > * {
      @apply text-right;
    }

    .post_content-expand {
      grid-template-columns: 40px repeat(3, auto);

      .el-avatar {
        grid-area: 1;
      }
    }
  }

  &_thumb {
    @apply overflow-hidden;
    -webkit-transform: rotate(0deg);

    .el-image {
      @apply w-full h-full transition-all;
    }
  }

  &_content {
    @apply overflow-hidden box-border;

    * {
      @apply dark:text-white;
    }

    & > span {
      @apply text-gray-400 dark:text-gray-400 hover:text-gray-darkest;
      i {
        @apply text-inherit;
      }
    }

    & > h2 {
      @apply text-2xl font-bold h-16 hover:text-rose-300;
    }

    &-desc {
      @apply break-all;
    }

    &-expand {
      & > * {
        @apply hover:scale-105 transition;
      }
    }
  }

  &:hover {
    @apply scale-105;
  }

  &:hover &_thumb .el-image {
    @apply scale-125 rotate-2;
  }
}

.more {
  @apply rounded-xl w-32;
  margin: 0 calc(50% - 4rem);
}
</style>
<style lang="scss">
.others_link svg {
  @apply inline w-8 h-8;
}
</style>