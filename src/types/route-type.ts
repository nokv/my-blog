import { Route } from 'vue-router';

// export interface RouteType {
//     name: string;
//     path: string;
// }

export const HOME: Partial<Route> = { name: 'home', path: '/' };
export const ABOUT: Partial<Route> = { name: 'about', path: '/about' };
export const POST: Partial<Route> = { name: 'posts-slug', path: '/posts/:slug?', params: { slug: '' } };

export const Routes = {
    HOME,
    ABOUT,
    POST,
} as const;
