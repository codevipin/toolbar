import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertNewComponent } from './insert-new.component';

describe('InsertNewComponent', () => {
  let component: InsertNewComponent;
  let fixture: ComponentFixture<InsertNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
