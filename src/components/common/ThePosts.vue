<template>
    <section v-if="posts.length" class="posts">
        <PostCard
            v-for="(post, index) in posts"
            :key="index"
            :title="post.title"
            :date="post.date"
            :slug="post.slug"
        />
    </section>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import PostCard from '~/components/common/PostCard.vue';
import { PostType } from '~/types/posts';

export default Vue.extend({
    components: {
        PostCard,
    },
    props: {
        posts: {
            type: Array as PropType<PostType[]>,
            required: true,
            default: [],
        },
    },
});
</script>

<style lang="scss" scoped>
@import '~assets/styles/components/common/_posts';
</style>
