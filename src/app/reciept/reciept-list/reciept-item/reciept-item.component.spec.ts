import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecieptItemComponent } from './reciept-item.component';

describe('RecieptItemComponent', () => {
  let component: RecieptItemComponent;
  let fixture: ComponentFixture<RecieptItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecieptItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecieptItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
