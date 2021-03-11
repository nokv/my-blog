<template>
    <article class="post-card">
        <time class="post-card__date" :datetime="date">
            {{ formatDate(date) }}
        </time>
        <nuxt-link :to="getPostPath()" class="post-card__link">
            <h2 class="post-card__title">
                {{ title }}
            </h2>
        </nuxt-link>
    </article>
</template>

<script lang="ts">
import Vue from 'vue';
import { Routes } from '~/types/route-type';
import { getRouteWithParams } from '~/services/routes';
import { formatDate } from '~/utils/date/formatDate';

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
            return formatDate(date);
        },
        getPostPath() {
            return getRouteWithParams<typeof Routes.POST>('POST', {
                slug: this.slug,
            });
        },
    },
});
</script>

<style lang="scss" scoped>
@import '~/assets/styles/components/common/_post-card';
</style>
