import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEtkinlikComponent } from './admin-etkinlik.component';

describe('AdminEtkinlikComponent', () => {
  let component: AdminEtkinlikComponent;
  let fixture: ComponentFixture<AdminEtkinlikComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminEtkinlikComponent]
    });
    fixture = TestBed.createComponent(AdminEtkinlikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
