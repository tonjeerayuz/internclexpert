import { Component, OnInit,AfterContentInit } from '@angular/core';
declare var $: any;

interface IDatatable{
  Id: string;
  CustomerName:string;
  Created:string;
  EmailAddress:string;
  LastActivity:string;
  Checked:boolean;

}

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css'],
})


export class DatatableComponent implements OnInit {
 datatable: Array<IDatatable> = [];
  constructor() { 
    this.datatable = [
      {Id:'cust-1as823t12iewr1',CustomerName:'Torntanat Cheng',Created:'22/11/20211:00 PM',EmailAddress:'torntanat.cheng@gmail.com',LastActivity:'22/11/20211:00 PM',Checked:false},
      {Id:'cust-1as823t12iewr1',CustomerName:'Torntanat Cheng',Created:'22/11/20211:00 PM',EmailAddress:'torntanat.cheng@gmail.com',LastActivity:'22/11/20211:00 PM',Checked:false},
      {Id:'cust-1as823t12iewr1',CustomerName:'Torntanat Cheng',Created:'22/11/20211:00 PM',EmailAddress:'torntanat.cheng@gmail.com',LastActivity:'22/11/20211:00 PM',Checked:false},
      {Id:'cust-1as823t12iewr1',CustomerName:'Torntanat Cheng',Created:'22/11/20211:00 PM',EmailAddress:'torntanat.cheng@gmail.com',LastActivity:'22/11/20211:00 PM',Checked:false},
      {Id:'cust-1as823t12iewr1',CustomerName:'Torntanat Cheng',Created:'22/11/20211:00 PM',EmailAddress:'torntanat.cheng@gmail.com',LastActivity:'22/11/20211:00 PM',Checked:false}
    ];
  }
  ngAfterViewInit(): void {
    $('#table1').DataTable(
      {searching: false, paging: false, info: false}
    );
  }

  ngOnInit(): void {
  }

  onChangeChedcked($event:any){
    console.log('Datable_checked::',$event);
    if($event){
      this.datatable.forEach((item,index)=>{
        item.Checked=true;
      });
    }else{
      this.datatable.forEach((item,index)=>{
        item.Checked=false;
      });
    }
  }

}
