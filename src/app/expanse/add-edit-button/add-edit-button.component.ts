import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-add-edit-button',
  templateUrl: './add-edit-button.component.html',
  styleUrls: ['./add-edit-button.component.scss']
})
export class AddEditButtonComponent implements OnInit {
  public id!: string;
  constructor() { }


  ngOnInit(): void {
  }

  agInit(params: ICellRendererParams): void {
    this.id = this.getValueToDisplay(params);
  }

  refresh(params: ICellRendererParams) {
    this.id = this.getValueToDisplay(params);
    return true;
  }

  getValueToDisplay(params: ICellRendererParams) {
    // console.log('ppp',params);
    return params.data ? params.data.id : params.data.id;
  }
}
