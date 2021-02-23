import { Route } from 'vue-router';

// export interface RouteType {
//     name: string;
//     path: string;
// }

const HOME: Partial<Route> = { name: 'index', path: '/' };
const ABOUT: Partial<Route> = { name: 'about', path: '/about' };
const POST: Partial<Route> = { name: 'posts-slug', path: '/posts/:slug?', params: { slug: '' } };
const POST_SEARCH: Partial<Route> = { name: 'posts-search', path: '/posts/search' };

export const Routes = {
    HOME,
    ABOUT,
    POST,
    POST_SEARCH,
} as const;
