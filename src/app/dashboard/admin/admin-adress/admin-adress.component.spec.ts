import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAdressComponent } from './admin-adress.component';

describe('AdminAdressComponent', () => {
  let component: AdminAdressComponent;
  let fixture: ComponentFixture<AdminAdressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminAdressComponent]
    });
    fixture = TestBed.createComponent(AdminAdressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
