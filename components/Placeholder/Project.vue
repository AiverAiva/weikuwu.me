<template>
    <section id="project" class="flex flex-col flex-grow pt-16 pb-20 justify-center">
        <!-- <section class="min-h-screen text-white px-6 py-20"> -->
        <div class="container mx-auto px-10 md:px-20">
            <!-- Title -->
            <!-- <div class="text-center mb-12">
                <h2 class="text-4xl font-bold">Projects</h2>
                <p class="text-gray-400 mt-1">作品集</p>
            </div> -->
            <div class="flex flex-col md:flex-row gap-5 mb-4 md:gap-10">
                <div>
                    <h1 class="text-4xl font-bold text-center">Projects</h1>
                </div>
            </div>

            <!-- Filter Buttons -->
            <div class="flex justify-center gap-3 mb-10">
                <button v-for="filter in filters" :key="filter" @click="selectedFilter = filter" :class="[
                    'px-5 py-1.5 rounded-full transition-all duration-300',
                    selectedFilter === filter
                        ? 'bg-accent'
                        : 'bg-gray-700/30 text-gray-300 hover:bg-gray-600/50'
                ]">
                    {{ filter }}
                </button>
            </div>

            <!-- Grid -->
            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div v-for="project in filteredProjects" :key="project.title" @click="openModal(project)"
                    class="group relative bg-foreground/70 rounded-2xl overflow-hidden shadow-md hover:shadow-lg cursor-pointer transition-all duration-300 hover:-translate-y-1">
                    <img :src="project.image" :alt="project.title" class="w-full h-48 object-cover" />
                    <div class="p-4">
                        <p class="text-gray-400 text-sm">{{ project.year }}</p>
                        <h3 class="text-lg font-semibold mt-1">{{ project.title }}</h3>
                        <p class="text-gray-300 text-sm mt-1 leading-relaxed line-clamp-2">
                            {{ project.description }}
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal -->
        <transition name="fade">
            <div v-if="showModal"
                class="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-4"
                @click.self="closeModal">
                <div class="bg-[#0c3b4b]/80 rounded-2xl shadow-xl max-w-2xl w-full overflow-hidden">
                    <img :src="activeProject.image" :alt="activeProject.title" class="w-full h-64 object-cover" />
                    <div class="p-6">
                        <p class="text-gray-400 text-sm">{{ activeProject.year }}</p>
                        <h3 class="text-2xl font-semibold mt-1">
                            {{ activeProject.title }}
                        </h3>
                        <p class="text-gray-200 text-base mt-2 leading-relaxed">
                            {{ activeProject.description }}
                        </p>

                        <div class="mt-4 flex gap-3">
                            <a v-if="activeProject.link" :href="activeProject.link" target="_blank"
                                class="px-4 py-2 bg-gray-100 text-black rounded-lg font-medium hover:bg-white transition">
                                🌐 網站
                            </a>
                            <button @click="closeModal"
                                class="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition">
                                關閉
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </section>
</template>

<script setup lang="ts">
import { ref, computed } from "vue"

const filters = ["精選", "全部"]
const selectedFilter = ref("全部")

const projects = ref([
    {
        year: "2025",
        title: "RenameBear",
        description: "可視化批次重新命名工具，具即時預覽和中繼資料擷取功能。",
        image: "https://via.placeholder.com/600x400?text=RenameBear",
        featured: true,
        link: "https://gnehs.net/",
    },
    {
        year: "2025",
        title: "Home Dashboard",
        description: "電子紙主控板，讓電子紙螢幕顯示伺服器資料與天氣資訊。",
        image: "https://via.placeholder.com/600x400?text=Home+Dashboard",
        featured: true,
    },
    {
        year: "2024",
        title: "冰淇淋和外幣 ATM 地圖",
        description: "讓你找到霜淇淋或需要換點日圓時的地圖工具。",
        image: "https://via.placeholder.com/600x400?text=ATM+Map",
        featured: false,
    },
    {
        year: "2024",
        title: "餅餅踏踏",
        description: "基於 Next.js 的步步紀錄排行榜網站。",
        image: "https://via.placeholder.com/600x400?text=Step+Tracker",
        featured: false,
    },
])

const showModal = ref(false)
const activeProject = ref<any>({})

const filteredProjects = computed(() =>
    selectedFilter.value === "精選"
        ? projects.value.filter((p) => p.featured)
        : projects.value
)

function openModal(project: any) {
    activeProject.value = project
    showModal.value = true
}
function closeModal() {
    showModal.value = false
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
