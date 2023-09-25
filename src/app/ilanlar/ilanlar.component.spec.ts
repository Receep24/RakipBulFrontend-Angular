import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IlanlarComponent } from './ilanlar.component';

describe('IlanlarComponent', () => {
  let component: IlanlarComponent;
  let fixture: ComponentFixture<IlanlarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IlanlarComponent]
    });
    fixture = TestBed.createComponent(IlanlarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
