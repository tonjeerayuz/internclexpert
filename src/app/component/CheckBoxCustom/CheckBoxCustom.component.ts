import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-CheckBoxCustom',
  templateUrl: './CheckBoxCustom.component.html',
  styleUrls: ['./CheckBoxCustom.component.scss']
})
export class CheckBoxCustomComponent implements OnInit {
@Input() value: boolean;
@Input() isHeader: boolean = false;
@Output() onChange = new EventEmitter<boolean>();
  // value: boolean;

  constructor() { }

  ngOnInit() {
  }

  Set(){
    this.value = !this.value;
    if(this.isHeader){
      this.onChange.emit(this.value);
    }
    console.log(this.value);
  }
  

}
