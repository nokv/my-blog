<template>
    <div class="p-search">
        <div class="input-area">
            <input
                ref="queryInput"
                v-model="query"
                class="input-area__input"
                type="text"
                placeholder="..."
                autocomplete="off"
            />
        </div>
        <section class="result">
            <ThePosts :posts="posts" />
        </section>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ThePosts from '~/components/common/ThePosts.vue';
import { PostType } from '~/types/posts';

interface PageDataType {
    query: string;
    posts: PostType[];
}

export default Vue.extend({
    components: {
        ThePosts,
    },
    data(): PageDataType {
        return {
            query: '',
            posts: [],
        };
    },
    head() {
        const title = 'Search';
        const url = process.env.URL + this.$route.path;

        return {
            title,
            meta: [
                { hid: 'og:title', property: 'og:title', content: title },
                { hid: 'og:url', property: 'og:url', content: url },
            ],
            link: [{ hid: 'canonical', rel: 'canonical', href: url }],
        };
    },
    watch: {
        async query(query) {
            if (!query) {
                this.posts = [];
                return;
            }
            this.posts = await this.$content('posts')
                .only(['title', 'slug', 'date'])
                .sortBy('date', 'desc')
                // .limit(12)
                .search(query)
                .fetch();
        },
    },
    mounted() {
        (this.$refs.queryInput as HTMLElement).focus();
    },
});
</script>

<style lang="scss" scoped>
@import '~assets/styles/pages/posts/search';
</style>
