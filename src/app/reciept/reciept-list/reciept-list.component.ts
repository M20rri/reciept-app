import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RecieptItemComponent } from './reciept-item/reciept-item.component';
import { IReciept } from '../reciept.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reciept-list',
  standalone: true,
  templateUrl: './reciept-list.component.html',
  styleUrl: './reciept-list.component.css',
  imports: [RecieptItemComponent, FormsModule, CommonModule],
})
export class RecieptListComponent {
  @Output() recieptInvoker: EventEmitter<IReciept> = new EventEmitter();

  public reciepts: Array<IReciept> = [
    {
      id: 1,
      name: 'Reciept 1',
      description: 'This is the description for Reciept 1.',
      imageUrl: 'https://fakeimg.pl/300x200/?text=Sample1',
    },
    {
      id: 2,
      name: 'Reciept 2',
      description: 'This is the description for Reciept 2.',
      imageUrl: 'https://fakeimg.pl/300x200/?text=Sample2',
    },
    {
      id: 3,
      name: 'Reciept 3',
      description: 'This is the description for Reciept 3.',
      imageUrl: 'https://fakeimg.pl/300x200/?text=Sample3',
    },
    {
      id: 4,
      name: 'Reciept 4',
      description: 'This is the description for Reciept 4.',
      imageUrl: 'https://fakeimg.pl/300x200/?text=Sample4',
    },
    {
      id: 5,
      name: 'Reciept 5',
      description: 'This is the description for Reciept 5.',
      imageUrl: 'https://fakeimg.pl/300x200/?text=Sample5',
    },
  ];

  recieptConsume = (evt: IReciept) => {
    console.log('reciept Consumer', evt);
    this.recieptInvoker.emit(evt);
  };
}
