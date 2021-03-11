import { IContentDocument } from '@nuxt/content/types/content';
export interface PostType extends IContentDocument {
    readonly title: string;
    readonly date: string;
    readonly description: string;
}
