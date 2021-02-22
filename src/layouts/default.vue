<template>
    <div class="l-default">
        <TheHeader />

        <main class="main">
            <Nuxt />
        </main>

        <TheFooter />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import TheHeader from '~/components/common/TheHeader.vue';
import TheFooter from '~/components/common/TheFooter.vue';

export default Vue.extend({
    components: {
        TheHeader,
        TheFooter,
    },
});
</script>

<style lang="scss" scoped>
@import '~/assets/styles/layout/_default';
</style>
