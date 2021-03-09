<template>
    <div class="p-about">
        <AppHeadingH1>About</AppHeadingH1>
        <section class="about-me">
            <p>I am a front-end developer based in Tokyo, Japan.</p>
        </section>
        <section class="sns">
            <AppHeadingH2>SNS</AppHeadingH2>
            <ul class="sns__list">
                <li class="sns__item">
                    <p class="sns__name">GitHub:</p>
                    <a class="sns__link" href="http://github.com/nokv" target="_blank" rel="noopener noreferrer"
                        >@nokv</a
                    >
                </li>
            </ul>
        </section>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import AppHeadingH1 from '~/components/common/AppHeadingH1.vue';
import AppHeadingH2 from '~/components/common/AppHeadingH2.vue';

export default Vue.extend({
    components: {
        AppHeadingH1,
        AppHeadingH2,
    },
    data(): {} {
        return {};
    },
    head() {
        return {
            titleTemplate: 'ABOUT',
        };
    },
});
</script>

<style lang="scss" scoped>
@import '~assets/styles/pages/about';
</style>
