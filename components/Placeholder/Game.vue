<template>
    <ScrollReveal>
        <div id="games" class="flex flex-col justify-center">
            <div class="container mx-auto px-10 md:px-20 pb-6">
                <div class="flex flex-col md:flex-row gap-5 md:gap-10">
                    <div>
                        <h1 class="text-4xl font-bold mb-4">Games</h1>
                    </div>
                </div>
                <div class="grid grid-cols-1 gap-4">
                    <Card title="osu!">
                        <a href="https://osu.ppy.sh/users/14984648">
                            My Profile
                            <!-- <img src="https://osekai.net/profiles/img/banner.svg?id=14984648"> -->
                        </a>
                    </Card>
                </div>
            </div>
        </div>
    </ScrollReveal>
</template>

<script>
import ScrollReveal from '../ScrollReveal.vue'

export default {
    name: 'GamePlaceholder',
}
</script>