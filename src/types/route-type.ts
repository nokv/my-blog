// import { Route } from 'vue-router';

const HOME = { name: 'index', path: '/' };
const ABOUT = { name: 'about', path: '/about' };
const POST = {
    name: 'posts-slug',
    path: '/posts/:slug?',
    params: { slug: '' },
};
const POST_SEARCH = { name: 'posts-search', path: '/posts/search' };

export const Routes = {
    HOME,
    ABOUT,
    POST,
    POST_SEARCH,
} as const;
