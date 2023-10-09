import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateLetterDialogComponent } from './generate-letter-dialog.component';

describe('GenerateLetterDialogComponent', () => {
  let component: GenerateLetterDialogComponent;
  let fixture: ComponentFixture<GenerateLetterDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenerateLetterDialogComponent]
    });
    fixture = TestBed.createComponent(GenerateLetterDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
