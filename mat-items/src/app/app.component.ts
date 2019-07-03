import { Component } from '@angular/core';
import { IKeyValue } from './components/mat-form-items/mat-form-dropdown/mat-form-dropdown.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    public value = 'mat-items';
    public placeholder = "placeholder";
    public dropdownArray: IKeyValue[] = [
        {key: 'steak-0', value: 'Steak'},
        {key: 'pizza-1', value: 'Pizza'},
        {key: 'tacos-2', value: 'Tacos'}
    ];
    public toolTip = "toolTip";
    public dateValue = new Date();
}
