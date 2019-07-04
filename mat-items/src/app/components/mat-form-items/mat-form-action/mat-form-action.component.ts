import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mat-form-action',
  templateUrl: './mat-form-action.component.html',
  styleUrls: ['./mat-form-action.component.css']
})
export class MatFormActionComponent implements OnInit {

    // Confirm  section
    @Input() IsConfirmButton?: boolean;
    public ConfirmButtonText: string = "Confirm";
    @Input() IsDisabledConfirmButton?: boolean;
    @Input() ConfirmToolTip?: string;
    @Output() ConfirmAction? = new EventEmitter<boolean>();

    // Close  Section
    @Input() IsCloseButton?: boolean;
    @Input() IsDisabledCloseButton?: boolean;
    public CloseButtonText?: string = "Close";
    @Input() CloseToolTip?: string;
    @Output() CloseAction? = new EventEmitter<boolean>();

    // Action  Section
    @Input() IsActionButton?: boolean;
    @Input() IsDisabledActionButton?: boolean;
    @Input() ActionButtonText?: string;
    @Input() ActionToolTip?: string;
    @Output() MatFormAction? = new EventEmitter<boolean>();

    // Yes/No  Section
    @Input() IsYesButton?: boolean;
    @Input() IsDisabledYesButton?: boolean;
    public YesButtonText?: string = "Yes";
    @Input() YesToolTip?: string;
    @Output() YesAction? = new EventEmitter<boolean>();

    @Input() IsNoButton?: boolean;
    @Input() IsDisabledNoButton?: boolean;
    public NoButtonText?: string = "No";
    @Input() NoToolTip?: string;
    @Output() NoAction? = new EventEmitter<boolean>();

    // Submit  Section
    @Input() IsSubmitButton?: boolean;
    @Input() IsDisabledSubmitButton?: boolean;
    @Input() SubmitButtonText?: string;
    @Input() SubmitToolTip?: string;
    @Output() SubmitAction? = new EventEmitter<boolean>();



    constructor() { }

    ngOnInit() {
        this.ConfirmButtonText = this.ConfirmButtonText || 'Confirm';
        this.CloseButtonText = this.CloseButtonText || 'Close';
        this.ActionButtonText = this.ActionButtonText || 'Action';
        this.SubmitButtonText = this.SubmitButtonText || 'Submit';
    }

    public onConfirm() {
        this.ConfirmAction.emit();
    }

    public onClose() {
        this.CloseAction.emit();
    }

    public onAction() {
        this.MatFormAction.emit();
    }

    public onYesAction() {
        this.YesAction.emit();
    }

    public onNoAction() {
        this.NoAction.emit();
    }

    public onSubmit() {
        this.SubmitAction.emit();
    }
}
