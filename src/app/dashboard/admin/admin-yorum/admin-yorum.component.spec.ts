import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminYorumComponent } from './admin-yorum.component';

describe('AdminYorumComponent', () => {
  let component: AdminYorumComponent;
  let fixture: ComponentFixture<AdminYorumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminYorumComponent]
    });
    fixture = TestBed.createComponent(AdminYorumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
