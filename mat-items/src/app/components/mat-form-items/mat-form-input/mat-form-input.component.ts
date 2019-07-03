import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mat-form-input',
  templateUrl: './mat-form-input.component.html',
  styleUrls: ['./mat-form-input.component.css']
})
export class MatFormInputComponent implements OnInit {

    @Input() value?: string;
    @Input() placeholder: string;
    @Input() disabled?: boolean;
    @Input() required?: boolean;
    @Input() toolTip?: string;

    @Output() output = new EventEmitter<string>();

    constructor() { }

    ngOnInit() {
        this.value = this.value === null || this.value === undefined ? '' : this.value;
        this.placeholder = this.placeholder || '';
    }

    public onChange(input: string) {
        this.output.emit(input);
    }

}
