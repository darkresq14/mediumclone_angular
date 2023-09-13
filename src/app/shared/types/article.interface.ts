export interface ArticleInterface {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
  createdAt: string;
  updatedAt: string;
  favorited: boolean;
  favoritesCount: number;
  // TODO: add author interface
  // author: {
  //   username: 'Anah Benešová';
  //   bio: null;
  //   image: 'https://api.realworld.io/images/demo-avatar.png';
  //   following: false;
  // };
}
