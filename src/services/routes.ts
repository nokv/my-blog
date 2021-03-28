import type { Route } from 'vue-router';
import { Routes } from '~/types/route-type';

export const getRouteWithParams = <T extends Partial<Route>>(
    routeName: keyof typeof Routes,
    params: T['params']
): Partial<Route> => {
    const Route = Routes[routeName];

    return {
        ...Route,
        params: {
            ...params,
        },
    };
};
