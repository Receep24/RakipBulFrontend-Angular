import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminIlanComponent } from './admin-ilan.component';

describe('AdminIlanComponent', () => {
  let component: AdminIlanComponent;
  let fixture: ComponentFixture<AdminIlanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminIlanComponent]
    });
    fixture = TestBed.createComponent(AdminIlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
