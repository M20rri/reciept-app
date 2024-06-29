import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecieptDetailComponent } from './reciept-detail.component';

describe('RecieptDetailComponent', () => {
  let component: RecieptDetailComponent;
  let fixture: ComponentFixture<RecieptDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecieptDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecieptDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
