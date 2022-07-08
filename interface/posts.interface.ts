export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string
}

export interface PostsStore {
  posts: Post[]
}
