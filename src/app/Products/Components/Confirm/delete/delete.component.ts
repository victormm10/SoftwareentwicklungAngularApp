import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductItem } from '../../../Interfaces/ProductItem.interface';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styles: [
  ]
})
export class DeleteComponent implements OnInit {

  constructor(
      private dialogRef: MatDialogRef<DeleteComponent> ,
      @Inject(MAT_DIALOG_DATA) public data: ProductItem
  ) { }

  ngOnInit(): void {
  }

  delete(){
    this.dialogRef.close( true );
  }

  cancell(){
    this.dialogRef.close();
  }
}
