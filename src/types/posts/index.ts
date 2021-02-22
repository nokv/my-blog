import { IContentDocument } from '@nuxt/content/types/content';

export interface PostMeta {
    title: string;
    date: string;
}

export type PostType = IContentDocument & PostMeta;
