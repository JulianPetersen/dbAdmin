import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListedManagmentComponent } from './listed-managment.component';

describe('ListedManagmentComponent', () => {
  let component: ListedManagmentComponent;
  let fixture: ComponentFixture<ListedManagmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListedManagmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListedManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
