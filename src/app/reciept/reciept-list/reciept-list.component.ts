import { Component, Input } from '@angular/core';
import { RecieptItemComponent } from './reciept-item/reciept-item.component';
import { IReciept } from '../reciept.model';

@Component({
  selector: 'app-reciept-list',
  standalone: true,
  templateUrl: './reciept-list.component.html',
  styleUrl: './reciept-list.component.css',
  imports: [RecieptItemComponent],
})
export class RecieptListComponent {
  public reciepts: Array<IReciept> = [
    {
      id: 1,
      name: 'Sample Item 1',
      description: 'This is the description for Sample Item 1.',
      imageUrl: 'https://fakeimg.pl/300x200/?text=Sample1',
    },
    {
      id: 2,
      name: 'Sample Item 2',
      description: 'This is the description for Sample Item 2.',
      imageUrl: 'https://fakeimg.pl/300x200/?text=Sample2',
    },
    {
      id: 3,
      name: 'Sample Item 3',
      description: 'This is the description for Sample Item 3.',
      imageUrl: 'https://fakeimg.pl/300x200/?text=Sample3',
    },
    {
      id: 4,
      name: 'Sample Item 4',
      description: 'This is the description for Sample Item 4.',
      imageUrl: 'https://fakeimg.pl/300x200/?text=Sample4',
    },
    {
      id: 5,
      name: 'Sample Item 5',
      description: 'This is the description for Sample Item 5.',
      imageUrl: 'https://fakeimg.pl/300x200/?text=Sample5',
    },
  ];
}
