import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnContentComponent } from './en-content.component';

describe('EnContentComponent', () => {
  let component: EnContentComponent;
  let fixture: ComponentFixture<EnContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
