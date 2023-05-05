import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { AccountdetailApi } from 'src/app/model/account.model';

@Component({
  selector: 'app-child-add-income',
  templateUrl: './child-add-income.component.html',
  styleUrls: ['./child-add-income.component.scss']
})
export class ChildAddIncomeComponent implements OnInit {

  @Input() clientName:any;
  @Input()
  form: any;
  @Input()incomeData!: FormArray;
  @Input()accounts: AccountdetailApi[]=[];
  @Input()index:any;
  // @Input() incomeData:any;
  @Output() newItemEvent = new EventEmitter<string>();
  @Output() deleteItemEvent = new EventEmitter<string>();
  // @Output() newItemEvent = new EventEmitter<string>();
  constructor( private fb:FormBuilder,) { }

  ngOnInit(): void {
    console.log('kdk',this.clientName);
    console.log('dkkd',this.form);
    // console.log('nfch',this.incomeData);
  }

  numberOnly(event:any){
    this.newItemEvent.emit(event);
  }

  deleterow(i:any){
    console.log('feds',i)
    this.deleteItemEvent.emit(i);
    // console.log(this.incomeData.value[0]);
  }

  ngOnChanges(changes:any) {
    console.log('kvk',changes);
  }

}
