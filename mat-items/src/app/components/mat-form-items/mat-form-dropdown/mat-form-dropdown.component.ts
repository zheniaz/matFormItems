import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export interface IKeyValue {
    key: string;
    value: string;
}
@Component({
    selector: 'mat-form-dropdown',
    templateUrl: './mat-form-dropdown.component.html',
    styleUrls: ['./mat-form-dropdown.component.css']
})
export class MatFormDropdownComponent implements OnInit {

    @Input() InputArray?: IKeyValue[];
    @Input() SelectedValue?: string;
    @Input() label: string;
    @Input() disabled?: boolean;
    @Input() required?: boolean;
    @Input() toolTip?: string;
  
    @Output() OutputHandler = new EventEmitter<string>();

    constructor() { }

    ngOnInit() {
    }

    public onChangeHandler(value: any) {
        this.OutputHandler.emit(value.value);
    }
}
