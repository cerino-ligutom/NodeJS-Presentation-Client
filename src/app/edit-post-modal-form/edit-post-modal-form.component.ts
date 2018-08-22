import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '@postit/services';
import { Post } from '@postit/models';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-post-modal-form',
  templateUrl: './edit-post-modal-form.component.html',
  styleUrls: ['./edit-post-modal-form.component.scss']
})
export class EditPostModalFormComponent implements OnInit {
  @Input()
  post: Post;
  message = '';

  constructor(
    private postService: PostService,
    private activeModal: NgbActiveModal
  ) {}

  ngOnInit() {
    this.message = this.post.message;
  }

  submitPost() {
    // Note: If edit fails, not handled for this demo.
    this.post.message = this.message;
    this.postService.editPost(this.post).then(() => this.activeModal.close());
  }

  dismiss() {
    this.activeModal.dismiss();
  }
}
