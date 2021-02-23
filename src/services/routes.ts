import { Route } from 'vue-router';

export const createRouteWithParams = (Route: Partial<Route>, Params: Route['params']): Partial<Route> => {
    return {
        ...Route,
        params: {
            ...Params,
        },
    };
};
