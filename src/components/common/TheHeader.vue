<template>
    <header class="header">
        <div class="header__inner">
            <aside class="header__aside">
                <h1 class="header__title">
                    <nuxt-link to="/" class="header__title-link">Naok Takahashi blog</nuxt-link>
                </h1>
            </aside>
            <nav class="header__nav">
                <ul class="header__link-list">
                    <li class="header__link-item">
                        <nuxt-link to="/" class="header__link">top</nuxt-link>
                    </li>
                    <li class="header__link-item">
                        <nuxt-link to="/about/" class="header__link">about</nuxt-link>
                    </li>
                    <li class="header__link-item">
                        <nuxt-link to="/posts/search/" class="header__link">search</nuxt-link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({});
</script>

<style lang="scss" scoped>
@import '~/assets/styles/components/common/_header';
</style>
