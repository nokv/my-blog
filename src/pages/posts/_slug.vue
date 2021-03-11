<template>
    <article class="post">
        <header class="post__header">
            <h1 class="post__title">{{ post.title }}</h1>
            <time class="post__date" :datetime="post.date">{{ formatDate(post.date) }}</time>
        </header>

        <section class="post__body">
            <nuxt-content :document="post" class="markdown-body" />
        </section>
    </article>
</template>

<script lang="ts">
import Vue from 'vue';
import { PostType } from '~/types/posts';

export default Vue.extend({
    async asyncData({ $content, params }) {
        const post = await $content(`posts/${params.slug}`).fetch();

        return { post };
    },
    data(): {
        post: PostType;
    } {
        return {
            post: null,
        };
    },
    head() {
        const title: string = this.post.title;
        const description: string = this.post.description;
        const url = process.env.URL + this.$route.path;

        return {
            title,
            meta: [
                { hid: 'description', name: 'description', content: description },
                { hid: 'og:title', property: 'og:title', content: title },
                { hid: 'og:description', property: 'og:description', content: description },
                { hid: 'og:url', property: 'og:url', content: url },
            ],
            link: [{ hid: 'canonical', rel: 'canonical', href: url }],
        };
    },
    methods: {
        formatDate(date: string): string {
            return new Date(date).toLocaleDateString('en-US', { month: 'long', day: '2-digit', year: 'numeric' });
        },
    },
});
</script>

<style lang="scss">
@import '~assets/styles/components/common/markdown-body';
</style>

<style lang="scss" scoped>
@import '~assets/styles/pages/posts/slug';
</style>
