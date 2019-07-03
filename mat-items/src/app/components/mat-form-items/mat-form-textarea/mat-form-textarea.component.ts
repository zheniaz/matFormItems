import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mat-form-textarea',
  templateUrl: './mat-form-textarea.component.html',
  styleUrls: ['./mat-form-textarea.component.css']
})
export class MatFormTextareaComponent implements OnInit {


    @Input() placeholder: string;
    @Input() value: string;
    @Input() toolTip?: string;
    @Input() disabled?: boolean;
    @Input() required?: boolean;

    @Output() onTextAreaChanges = new EventEmitter<string>();
    
    constructor() { }
  
    ngOnInit() {
        this.toolTip = this.toolTip || '';
    }
  
    public ngOnChange(input: string) {
        this.onTextAreaChanges.emit(input);
    }
}
