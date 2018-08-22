import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPostModalFormComponent } from './edit-post-modal-form.component';

describe('EditPostModalFormComponent', () => {
  let component: EditPostModalFormComponent;
  let fixture: ComponentFixture<EditPostModalFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPostModalFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPostModalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
