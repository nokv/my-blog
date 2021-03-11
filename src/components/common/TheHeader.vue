<template>
    <header class="header">
        <div class="header__inner">
            <aside class="header__aside">
                <h1 class="header__title">
                    <nuxt-link :to="Routes.HOME" class="header__title-link">
                        Naok Takahashi blog
                    </nuxt-link>
                </h1>
            </aside>
            <nav class="header__nav">
                <ul class="header__link-list">
                    <li class="header__link-item">
                        <nuxt-link :to="Routes.HOME" class="header__link">
                            posts
                        </nuxt-link>
                    </li>
                    <li class="header__link-item">
                        <nuxt-link :to="Routes.ABOUT" class="header__link">
                            about
                        </nuxt-link>
                    </li>
                    <!-- <li class="header__link-item">
                        <nuxt-link :to="Routes.POST_SEARCH" class="header__link">search</nuxt-link>
                    </li> -->
                </ul>
            </nav>
        </div>
    </header>
</template>

<script lang="ts">
import Vue from 'vue';
import { Routes } from '~/types/route-type';

export default Vue.extend({
    data() {
        return {
            Routes,
        };
    },
});
</script>

<style lang="scss" scoped>
@import '~/assets/styles/components/common/_header';
</style>
