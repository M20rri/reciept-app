import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecieptListComponent } from './reciept-list.component';

describe('RecieptListComponent', () => {
  let component: RecieptListComponent;
  let fixture: ComponentFixture<RecieptListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecieptListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecieptListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
