export interface IArticleResponse {
  count: number;
  next: string;
  previous: string | null;
  results: IArticle[];
}

export interface IArticle {
  id: number;
  title: string;
  url: string;
  image_url: string;
  news_site: string;
  summary: string;
  published_at: string;
  updated_at: string;
  featured: boolean;
  launches: [
    {
      launch_id: string;
      provider: string;
    }
  ];
  events: [
    {
      event_id: number;
      provider: string;
    }
  ];
  isFavorite: boolean;
}
