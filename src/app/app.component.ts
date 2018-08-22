import { Component, OnInit } from '@angular/core';
import { Post } from '@postit/models';
import { PostService } from '@postit/services';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditPostModalFormComponent } from './edit-post-modal-form/edit-post-modal-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  message = '';
  isSubmitting = false;

  posts: Post[] = [];

  constructor(
    private postService: PostService,
    private toastr: ToastrService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.postService
      .getAllPosts()
      .then(posts => {
        this.posts = posts;
      })
      .catch(() => {
        this.showErrorToast();
      });
  }

  createPost() {
    this.isSubmitting = true;
    const post: Post = {
      message: this.message
    };

    this.message = '';

    this.postService
      .createPost(post)
      .then(() => {
        this.ngOnInit();
        this.isSubmitting = false;
        this.showSuccessToast('New post added.');
      })
      .catch(() => {
        this.isSubmitting = false;
        this.showErrorToast();
      });
  }

  editPost(post: Post) {
    const modal = this.modalService.open(EditPostModalFormComponent, {
      size: 'lg',
      centered: true
    });
    modal.componentInstance.post = post;
    modal.result
      .then(() => {
        this.showSuccessToast('Post edited');
        this.ngOnInit();
      })
      .catch(() => {});
  }

  deletePost(postId: string) {
    this.postService
      .deletePost(postId)
      .then(() => {
        this.ngOnInit();
        this.showSuccessToast('Post deleted.');
      })
      .catch(() => {
        this.showErrorToast();
      });
  }

  showSuccessToast(message: string = 'Success') {
    this.toastr.success(message, 'Success');
  }

  showErrorToast(message: string = 'Oops. Something went wrong') {
    this.toastr.error(message, 'Error');
  }
}
