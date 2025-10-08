
export type SlugParams = {
  params: Promise<{
    slug: string
  }>;
};
export type IdParams = {
    params: Promise<{
        id: string
    }>
}

export interface Category {
  path: string;
  name: string;
  icon?: string;
  children?: Category[];
}
