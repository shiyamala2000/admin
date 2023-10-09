import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDocumentProcessComponent } from './add-document-process.component';

describe('AddDocumentProcessComponent', () => {
  let component: AddDocumentProcessComponent;
  let fixture: ComponentFixture<AddDocumentProcessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddDocumentProcessComponent]
    });
    fixture = TestBed.createComponent(AddDocumentProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
