import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloristComponent } from './florist.component';

describe('FloristComponent', () => {
  let component: FloristComponent;
  let fixture: ComponentFixture<FloristComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FloristComponent]
    });
    fixture = TestBed.createComponent(FloristComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
