import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashRegisterClosedComponent } from './cash-register-closed.component';

describe('CashRegisterClosedComponent', () => {
  let component: CashRegisterClosedComponent;
  let fixture: ComponentFixture<CashRegisterClosedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CashRegisterClosedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CashRegisterClosedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
