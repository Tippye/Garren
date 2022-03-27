<template>
  <div id="home">
    <h1 class="sec-title"><i>
      <Dessert/>
    </i>START: DASH!!
    </h1>
    <div class="dash">
      <div v-for="dash_item of dash"
           :style="{backgroundImage:`url(${dash_item.img_src||(Config.server+'/api/file/random?id='+dash_item.id)})`}"
           class="dash_item">
        <div class="dash_item-title">{{ dash_item.title }}</div>
        <div class="dash_item-desc" v-html="dash_item.description"></div>
      </div>
    </div>
    <h1 class="sec-title"><i>
      <Guide/>
    </i>Discovery
    </h1>
    <div class="post_area">
      <article v-for="post of posts" class="post">
        <router-link :to="'/article/'+post.id">
          <div class="post_thumb">
            <el-image :alt="post.title" :src="post.img_src||(Config.server+'/api/file/random?id='+post.id)" fit="cover"
                      lazy/>
          </div>
          <div class="post_content">
            <span class="post_content-create"><i><Clock/></i> 发布于 {{ post.create_time }}</span>
            <h2 class="post_content-title truncate-2">{{ post.title }}</h2>
            <span class="post_content-desc">{{ post.description }}</span>
            <div class="post_content-expand">
              <span><i><View/></i><span>{{ post.views || '0' }}热度</span></span>
              <span><i><ChatLineRound/></i><span>{{ post.expand.comments || '0' }}条评论</span></span>
              <span v-if="post.expand.sort.length>0"><i><Files/></i><span>{{ post.expand.sort[0].name }}</span></span>
              <el-avatar :src-set="post.expand.author.head_img"/>
            </div>
          </div>
        </router-link>
      </article>
    </div>
    <el-button v-show="!total||(posts.length<total)" class="more" @click="loadMore">More</el-button>
  </div>
</template>

<script setup>
import {inject, onBeforeMount, ref} from "vue";
import {getArticles} from "@/api/article";
import Config from "/garren.config"
import {ChatLineRound, Clock, Dessert, Files, Guide, View} from "@element-plus/icons-vue"
import NProgress from "nprogress";

const $t = inject('$t'),
    dash = ref([])

let page = 0,
    total = ref(null),
    posts = ref([])

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

onBeforeMount(() => {
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

#home {
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

.post {
  @apply w-full h-60 dark:text-white shadow-xl my-5 rounded-3xl overflow-hidden bg-white dark:bg-gray-darkest dark:bg-opacity-60 dark:backdrop-brightness-150;
  -webkit-transform: rotate(0deg);

  & > a {
    @apply flex h-full;
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
    @apply h-full flex-1 overflow-hidden;
    -webkit-transform: rotate(0deg);

    .el-image {
      @apply w-full h-full transition-all;
    }
  }

  &_content {
    @apply flex-1 overflow-hidden box-border p-3 grid;
    grid-template-rows: 1.5rem 4rem auto 40px;

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
      @apply w-full grid gap-2 items-center;
      grid-template-columns: repeat(3, auto) 40px;

      & > * {
        @apply hover:scale-105 transition;
      }
    }
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