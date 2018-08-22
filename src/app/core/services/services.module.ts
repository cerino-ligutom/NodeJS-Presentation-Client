import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiService, PostService } from '@postit/services';

@NgModule({
  imports: [CommonModule],
  declarations: [],
  providers: [ApiService, PostService]
})
export class ServicesModule {}
