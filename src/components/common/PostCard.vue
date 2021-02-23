<template>
    <article class="post-card">
        <time class="post-card__date" :datetime="date">{{ formatDate(date) }}</time>
        <nuxt-link :to="createPostPath()" class="post-card__link">
            <h2 class="post-card__title">{{ title }}</h2>
        </nuxt-link>
    </article>
</template>

<script lang="ts">
import Vue from 'vue';
import { Routes } from '~/types/route-type';
import { createRouteWithParams } from '~/services/routes';

export default Vue.extend({
    props: {
        title: {
            type: String,
            required: true,
        },
        date: {
            type: String,
            required: true,
        },
        slug: {
            type: String,
            required: true,
        },
    },
    methods: {
        formatDate(date: string): string {
            return new Date(date).toLocaleDateString('ja');
        },
        createPostPath(): typeof Routes.POST {
            return createRouteWithParams(Routes.POST, { slug: this.slug });
        },
    },
});
</script>

<style lang="scss" scoped>
@import '~/assets/styles/components/common/_post-card';
</style>
