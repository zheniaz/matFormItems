import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'mat-form-datapicker',
  templateUrl: './mat-form-datapicker.component.html',
  styleUrls: ['./mat-form-datapicker.component.css']
})
export class MatFormDatapickerComponent implements OnInit {

    public dateValue: FormControl;
    public startDate = new Date(1990, 0, 1);
    @Input() placeholder?: string;
    @Input() value?: Date;
    @Input() required?: boolean;
    @Input() disabled?: boolean;
    @Input() toolTip?: string;
    @Input() isMinToday?: boolean;

    @Output() OnSelectectDate = new EventEmitter<Date>();

    constructor() { }

    ngOnInit() {
        if(this.isMinToday) {
            this.startDate = this.getTodaysDay();
        }
        this.dateValue = this.value ? new FormControl(this.value) : new FormControl(new Date());
    }

    public onDateChange(event: any) {
        this.OnSelectectDate.emit(event.value);
    }
  
    private getTodaysDay(){
        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth() + 1;
        let yyyy = today.getFullYear();
        return today = new Date(mm,dd,yyyy);
    }
}
