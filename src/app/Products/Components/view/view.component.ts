import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductItem } from '../../Interfaces/ProductItem.interface';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styles: [`
  img{
    width: 100%;
    border-radius:15px;
  }
`]
})
export class ViewComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<ViewComponent> ,
      @Inject(MAT_DIALOG_DATA) public data: ProductItem
  ) { }

  ngOnInit(): void {
  }

  close(){
    this.dialogRef.close();
  }

}
