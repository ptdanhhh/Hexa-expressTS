import { Post } from "../models";

export interface IPostService {
  listPosts(): Promise<Post[]>;
}
