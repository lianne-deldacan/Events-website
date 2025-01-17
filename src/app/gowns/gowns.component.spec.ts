import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GownsComponent } from './gowns.component';

describe('GownsComponent', () => {
  let component: GownsComponent;
  let fixture: ComponentFixture<GownsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GownsComponent]
    });
    fixture = TestBed.createComponent(GownsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
