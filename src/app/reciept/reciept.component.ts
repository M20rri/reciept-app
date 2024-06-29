import { Component } from '@angular/core';
import { RecieptListComponent } from './reciept-list/reciept-list.component';
import { RecieptDetailComponent } from './reciept-detail/reciept-detail.component';

@Component({
  selector: 'app-reciept',
  standalone: true,
  templateUrl: './reciept.component.html',
  styleUrl: './reciept.component.css',
  imports: [RecieptListComponent, RecieptDetailComponent],
})
export class RecieptComponent {
  constructor() {}
}
