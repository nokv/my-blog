<template>
    <article class="post">
        <header class="post__header">
            <h1>{{ post.title }}</h1>
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
        meta: {
            title: string;
        };
    } {
        return {
            post: null,
            meta: {
                title: '',
            },
        };
    },
    head() {
        const title = this.$data.post.title;

        return {
            title,
        };
    },
    methods: {
        formatDate(date: string): string {
            return new Date(date).toLocaleDateString('ja');
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
