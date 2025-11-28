import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-calendar-selector',
  templateUrl: './calendar-selector.component.html',
  styleUrl: './calendar-selector.component.scss'
})
export class CalendarSelectorComponent {

    selectedDate: Date;

  @Output() fechaSeleccionada = new EventEmitter<Date>();

  buscar() {
    this.fechaSeleccionada.emit(this.selectedDate);
  }

}
