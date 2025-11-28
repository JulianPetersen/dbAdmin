import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cash-details',
  templateUrl: './cash-details.component.html',
  styleUrl: './cash-details.component.scss'
})
export class CashDetailsComponent {

   @Input() cashSelected: any;

  formatDateTime(dateStr: string) {
    if (!dateStr) return '';
    const d = new Date(dateStr);
    return d.toLocaleString('es-AR', { timeZone: 'America/Argentina/Buenos_Aires' });
  }

  formatDate(dateStr: string) {
    if (!dateStr) return '';
    const d = new Date(dateStr);
    return d.toLocaleDateString('es-AR', { timeZone: 'America/Argentina/Buenos_Aires' });
  }
}
