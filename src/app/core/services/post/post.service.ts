import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Post } from '@postit/models';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private endpoint = 'post';

  constructor(private api: ApiService) {}

  getAllPosts() {
    return this.api.get<Post[]>(this.endpoint);
  }

  createPost(post: Post) {
    return this.api.post<Post>(this.endpoint, post);
  }

  editPost(post: Post) {
    return this.api.put<boolean>(`${this.endpoint}/${post.id}`, post);
  }

  deletePost(postId: string) {
    return this.api.delete<boolean>(`${this.endpoint}/${postId}`);
  }
}
