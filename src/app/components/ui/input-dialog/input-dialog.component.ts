import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-input-dialog',
  templateUrl: './input-dialog.component.html',
  styleUrls: ['./input-dialog.component.scss']
})
export class InputDialogComponent {
  formData: any = {};

  constructor(
    public dialogRef: MatDialogRef<InputDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { title: string; fields: any[] }
  ) {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(form: NgForm): void {
    // si el formulario es inválido, marcamos todo como touched para que aparezcan los mat-error
    if (form.invalid) {
      form.form.markAllAsTouched();
      return;
    }

    // procesamos / convertimos valores
    const processedData: any = {};
    for (const field of this.data.fields) {
      let value = this.formData[field.key];

      if (field.type === 'number' && value !== undefined && value !== null && value !== '') {
        value = Number(value);
      }

      processedData[field.key] = value;
    }

    this.dialogRef.close(processedData);
  }
}
