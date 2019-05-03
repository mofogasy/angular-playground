import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactNewPopupComponent } from './contact-new-popup.component';

describe('ContactNewPopupComponent', () => {
  let component: ContactNewPopupComponent;
  let fixture: ComponentFixture<ContactNewPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactNewPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactNewPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
