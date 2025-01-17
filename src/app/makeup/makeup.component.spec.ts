import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeupComponent } from './makeup.component';

describe('MakeupComponent', () => {
  let component: MakeupComponent;
  let fixture: ComponentFixture<MakeupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MakeupComponent]
    });
    fixture = TestBed.createComponent(MakeupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
