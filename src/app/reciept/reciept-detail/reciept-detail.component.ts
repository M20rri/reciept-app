import { Component, Input } from '@angular/core';
import { IReciept } from '../reciept.model';

@Component({
  selector: 'app-reciept-detail',
  standalone: true,
  imports: [],
  templateUrl: './reciept-detail.component.html',
  styleUrl: './reciept-detail.component.css',
})
export class RecieptDetailComponent {
  @Input('currentReciept') reciept: IReciept;
}
