import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtkinlikComponent } from './etkinlik.component';

describe('EtkinlikComponent', () => {
  let component: EtkinlikComponent;
  let fixture: ComponentFixture<EtkinlikComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EtkinlikComponent]
    });
    fixture = TestBed.createComponent(EtkinlikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
