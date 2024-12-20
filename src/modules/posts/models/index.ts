export type Post = {
  id: string;
  content: string;
  image: string;
  author_id: string;
  topic_id: string;
  is_featured: string;
  comment_count: string;
  liked_count: string;
  type: string;
  createdAt: Date;
  updatedAt: Date;
};
