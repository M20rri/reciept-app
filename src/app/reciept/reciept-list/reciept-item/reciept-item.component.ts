import { Component, Input } from '@angular/core';
import { IReciept } from '../../reciept.model';

@Component({
  selector: 'app-reciept-item',
  standalone: true,
  imports: [],
  templateUrl: './reciept-item.component.html',
  styleUrl: './reciept-item.component.css',
})
export class RecieptItemComponent {
  // @Input({ alias: 'reciept-list', required: true }) reciepts: Array<IReciept>;
  @Input({ alias: 'message', required: true }) message: string;
  constructor() {
    console.log('message => RecieptItemComponent', this.message);
  }
}
