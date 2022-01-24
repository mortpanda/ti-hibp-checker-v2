import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnContentNotificationComponent } from './en-content-notification.component';

describe('EnContentNotificationComponent', () => {
  let component: EnContentNotificationComponent;
  let fixture: ComponentFixture<EnContentNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnContentNotificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnContentNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
