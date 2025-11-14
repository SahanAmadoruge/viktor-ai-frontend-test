interface ImageFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  size: number;
  path: null;
  url: string;
}

interface Avatar {
  id: number;
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: {
    thumbnail: ImageFormat;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: null;
  created_at: string;
  updated_at: string;
}

interface Author {
  id: number;
  full_name: string;
  created_at: string;
  updated_at: string;
  avatar: Avatar;
}

interface Category {
  id: number;
  name: string;
  featured_blogpost: null;
  slug: string;
  created_at: string;
  updated_at: string;
}

interface Disciplines {
  id: number;
  name: string;
  slug: string;
  published_at: string;
  created_at: string;
  updated_at: string;
}

interface Cover {
  id: number;
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: {
    thumbnail: ImageFormat;
    large: ImageFormat;
    medium: ImageFormat;
    small: ImageFormat;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: null;
  created_at: string;
  updated_at: string;
}

export interface Blog {
  id: number;
  title: string;
  excerpt: string;
  body: string;
  intro: string;
  author: Author;
  slug: string;
  white_paper: null;
  publication_date: string;
  is_long_post: boolean;
  meta_title: string;
  meta_description: string;
  has_free_account_CTA: boolean;
  has_start_now_CTA: boolean;
  published_at: string;
  created_at: string;
  updated_at: string;
  sections: [];
  cta_blocks: [];
  popup: null;
  content: [];
  cover: Cover;
  blogpost_categories: Category[];
  blogpost_disciplines: Disciplines[];
  blogpost_integrations: [];
}
