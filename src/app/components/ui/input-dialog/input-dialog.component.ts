import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-input-dialog',
  templateUrl: './input-dialog.component.html',
  styleUrl: './input-dialog.component.scss'
})
export class InputDialogComponent {
  inputValue: string = '';

  constructor(
    private dialogRef: MatDialogRef<InputDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { title: string; message: string; placeholder: string }
  ) { }

  onConfirm() {
    this.dialogRef.close(this.inputValue);
  }

  onCancel() {
    this.dialogRef.close(null);
  }
}
