import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashregisterHistoryComponent } from './cashregister-history.component';

describe('CashregisterHistoryComponent', () => {
  let component: CashregisterHistoryComponent;
  let fixture: ComponentFixture<CashregisterHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CashregisterHistoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CashregisterHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
