<template>
  <div class="
        w-screen
        h-screen
        fixed
        top-0
        left-0
        z-10
        bg-warm-gray-100 bg-opacity-50
        dark:bg-dark-900 dark:bg-opacity-50
        flex
        justify-center
        items-center
      ">
    <!-- @click.self="$router.back()" -->
    <!-- backdrop-filter backdrop-blur-sm -->
    <div class="
          w-full
          max-w-screen-lg
          overflow-y-auto
          bg-white
          dark:bg-dark-400
          p-6
          mx-4
          rounded-xl
          shadow-lg
        " style="max-height: calc(100vh - 210px)">
      <ButtonBack />

      <img v-if="doc.thumbnail" :src="doc.thumbnail" alt="Thumbnail" class="w-full h-40 object-cover rounded-lg mb-8" />
      <img v-else src="/img/placeholder.jpg?url" alt="Placeholder" class="w-full h-60 object-cover rounded-lg mb-8" />

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
          <p class="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-100">
            {{ doc.description }}
          </p>
          <div class="mt-6 flex border-t border-gray-900/5 pt-6" />
          <div class="h-2px my-3 bg-warm-gray-100 dark:bg-dark-200 w-full"></div>

          <ContentRendererMarkdown :value="doc" class="prose" :components="components"/>
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
// import 'prismjs/themes/prism.css'; 
// import Prism from 'prismjs';
// import 'prismjs/components/prism-javascript';
import { PostGithubRepo } from '#components';

const { params } = useRoute();
const { data: doc } = await useAsyncData('document', () => queryContent(`/post/${params.slug}`).findOne());
// onMounted(() => {
//   Prism.highlightAll(); // Highlights all code blocks on mount
// });

const components = {
  'PostGithubRepo': PostGithubRepo
}
</script>



