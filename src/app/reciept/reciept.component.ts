import { Component } from '@angular/core';
import { RecieptListComponent } from './reciept-list/reciept-list.component';
import { RecieptDetailComponent } from './reciept-detail/reciept-detail.component';
import { IReciept } from './reciept.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reciept',
  standalone: true,
  templateUrl: './reciept.component.html',
  styleUrl: './reciept.component.css',
  imports: [RecieptListComponent, RecieptDetailComponent, CommonModule],
})
export class RecieptComponent {
  public item: IReciept;

  constructor() {}
}
