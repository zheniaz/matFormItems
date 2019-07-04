import { Component } from '@angular/core';
import { IKeyValue } from './components/mat-form-items/mat-form-dropdown/mat-form-dropdown.component';
import { ConfirmationDialogComponent } from './components/mat-form-items/confirmation-dialog/confirmation-dialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    public value = 'mat-items';
    public placeholder = 'placeholder';
    public dropdownArray: IKeyValue[] = [
        {key: 'steak-0', value: 'Steak'},
        {key: 'pizza-1', value: 'Pizza'},
        {key: 'tacos-2', value: 'Tacos'}
    ];
    public toolTip = 'toolTip';
    public dateValue = new Date();

    constructor(public dialog: MatDialog) {}

    openConfiramtionDialog(): void {
        const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
            width: 'auto',
            height: 'auto',
            data: {
                message: 'Do you confirm the deletion of this data?'}
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                
                // DO SOMETHING
            }
            console.log("result form confirm dialog: ", result);
        });
    }
}
