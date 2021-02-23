<template>
    <div class="p-index">
        <section class="p-posts">
            <ThePosts :posts="posts" />
        </section>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ThePosts from '~/components/common/ThePosts.vue';
import { PostType } from '~/types/posts';

export default Vue.extend({
    components: {
        ThePosts,
    },
    async asyncData({ $content }) {
        const query = $content('posts').sortBy('date', 'desc');
        const posts = await query.fetch();
        return { posts };
    },
    data(): {
        posts: PostType[];
    } {
        return {
            posts: null,
        };
    },
    head() {
        return {
            titleTemplate: '',
        };
    },
    mounted() {
        this.init();
    },
    methods: {
        init() {
            this.splitPosts();
        },
        splitPosts() {},
    },
});
</script>

<style lang="scss" scoped>
@import '~assets/styles/pages/index';
</style>
