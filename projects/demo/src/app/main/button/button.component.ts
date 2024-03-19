import { Component, EventEmitter, Output } from '@angular/core';
import { gentelmans } from '../pointer.service';
import { Gentelman } from '../pointer';

@Component({
  selector: 'isdi-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Output() selectAllEvent: EventEmitter<void> = new EventEmitter();
  gentelmans: Gentelman[] = [];
  selectedGente: Gentelman[] = [];
  selected() {
    return (this.selectedGente = this.gentelmans.filter(
      (gentelmans: any) => gentelmans.selected
    ));
  }
  constructor() {
    this.gentelmans = this.selected();
  }
  /*   selectAll() {
    this.selectAllEvent.emit(this.selectAll);
      selectAll() {
    this.gentelmans.forEach((gentelmans) => {
      gentelmans.selected = true;
    })
  }   */
}
