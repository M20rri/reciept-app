import { Component, Input, OnInit } from '@angular/core';
import { IReciept } from '../../reciept.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reciept-item',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './reciept-item.component.html',
  styleUrl: './reciept-item.component.css',
})
export class RecieptItemComponent implements OnInit {
  @Input({ alias: 'reciept-item', required: true }) reciept: IReciept;
  constructor() {}
  ngOnInit(): void {
    console.log('reciept', this.reciept);
  }
}
