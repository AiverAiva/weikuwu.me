<template>
  <div class="
        w-screen
        h-screen
        fixed
        top-0
        left-0
        z-10
        bg-gray-200 
        bg-opacity-50
        dark:bg-slate-900
        flex
        justify-center
        items-center
        duration-150
      ">
    <!-- @click.self="$router.back()" -->
    <!-- backdrop-filter backdrop-blur-sm -->
    <ThemeSwitcher />
    <div class="
          w-full
          max-w-screen-lg
          overflow-y-auto
          bg-white
          dark:bg-slate-800
          p-6
          mx-4
          rounded-xl
          shadow-lg
          duration-150
        " style="max-height: calc(100vh - 210px)">
      <div
        class="block z-50 duration-150 backdrop-blur-esm rounded-lg hover:drop-shadow-md sticky-section-header top-0 section-colors"
        style="position: sticky;">
        <div
          class="sm:inline-block duration-150 opacity-50 hover:opacity-100 cursor-pointer w-full rounded-lg stuck bg-white dark:bg-slate-800 bg-opacity-75 dark:bg-opacity-75">
          <ButtonBack />
        </div>
      </div>

      <img v-if="doc.thumbnail" :src="doc.thumbnail" alt="Thumbnail" class="w-full h-40 object-cover rounded-lg mb-8" />
      <img v-else src="/img/placeholder.jpg?url" alt="Placeholder" class="w-full h-60 object-cover rounded-lg mb-8" />
      <!-- -mt-12 -->
      <div v-if="doc">
        <div>
          <div class="
                flex
                <sm:flex-col
                justify-between
                <sm:items-baseline
                sm:items-center
                w-full
              ">
            <h2 class="font-semibold text-2xl">
              {{ doc.title }}
            </h2>
            <div v-if="doc.author" class="flex items-center font-mono">
              <span class="text-sm mr-2">by:</span>
              <div v-for="(author, index) in doc.author" :key="index">
                <PostAuthor :author=author />
              </div>
            </div>
          </div>
          <p class="mt-3 text-sm leading-6 text-gray-600">
            {{ doc.description }}
          </p>
          <div class="mt-6 flex border-t border-gray-900/5 dark:border-gray-100/5 pt-6" />
          <!-- <div class="h-2px my-3 bg-gray-100 dark:bg-gray-100 w-full"></div> -->

          <!-- class="max-w-full overflow-x-auto text-gray-700 dark:text-gray-300" -->
          <!-- <ContentSlot :use="$slots.default" unwrap="p" /> -->
          <pre>
            <ContentRendererMarkdown :value="doc" class="prose" :components="components" />
          </pre>
        </div>


        <div v-if="doc.reference">
          <div class="h-2px my-3 bg-warm-gray-100 dark:bg-dark-200 w-full"></div>

          <h5 class="text-sm">Reference:</h5>
          <ul class="text-xs text-warm-gray-400">
            <li v-for="link in doc.reference" :key="link">
              <a :href="link" rel="noreferrer" target="_blank" class="inline-flex items-center">
                <!-- <IconLink class="mr-1"></IconLink> -->
                {{ link }}
              </a>
            </li>
          </ul>
        </div>
        <div class="
              text-warm-gray-400 text-sm
              mt-4
              flex
              items-center
              justify-between
            ">
          <a :href="`https://github.com/AiverAiva/problem-solutions/edit/main/content/problems/${$route.params.slug}.md`"
            rel="noreferrer" target="_blank" class="inline-flex items-center text-warm-gray-400">
            <!-- <IconEdit class="mr-2"></IconEdit>
              <span class=""> Edit this script </span> -->
          </a>
          <span class="font-mono">
            Updated at
            {{
            new Date(doc.date).toLocaleString("en-us", {
            weekday: "short",
            })
            }},
            {{
            new Date(doc.date).toLocaleString("en-us", {
            day: "numeric",
            month: "short",
            year: "numeric",
            })
            }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { PostGithubRepo } from '#components';

const { params } = useRoute();
const { data: doc } = await useAsyncData('document', () => queryContent(`/post/${params.slug}`).findOne());

const components = {
  'post-github-repo': PostGithubRepo
}

onMounted(() => {
  document.body.classList.add('dark');
})
</script>

<style scoped>
.backdrop-blur-esm {
  backdrop-filter: blur(2px);
}

</style>