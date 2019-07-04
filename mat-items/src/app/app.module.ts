import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MatFormInputComponent } from './components/mat-form-items/mat-form-input/mat-form-input.component';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSortModule} from '@angular/material/sort';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatSelectModule} from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule,  MatRippleModule, MatDialogModule, MatTooltipModule, MatDatepickerModule, MatButtonModule, MatNativeDateModule, MatPaginatorModule, MatCardModule, MatButtonToggleModule, MatCheckboxModule, MatChipsModule, MatStepperModule, MatDividerModule, MatGridListModule, MatListModule, MatMenuModule, MatProgressBarModule, MatProgressSpinnerModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatTableModule, MatTabsModule, MatTreeModule } from '@angular/material';
import {MatRadioModule} from '@angular/material/radio';
import { PortalModule } from '@angular/cdk/portal';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatFormTextareaComponent } from './components/mat-form-items/mat-form-textarea/mat-form-textarea.component';
import { MatFormDropdownComponent } from './components/mat-form-items/mat-form-dropdown/mat-form-dropdown.component';
import { MatFormDatapickerComponent } from './components/mat-form-items/mat-form-datapicker/mat-form-datapicker.component';
import { MatFormActionComponent } from './components/mat-form-items/mat-form-action/mat-form-action.component';

@NgModule({
    declarations: [
        AppComponent,
        MatFormInputComponent,
        MatFormTextareaComponent,
        MatFormTextareaComponent,
        MatFormDropdownComponent,
        MatFormDatapickerComponent,
        MatFormActionComponent,
    ],
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        BrowserAnimationsModule,
        MatBottomSheetModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatStepperModule,
        MatDatepickerModule,
        MatDialogModule,
        MatDividerModule,
        MatExpansionModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatSortModule,
        MatTableModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
        MatTreeModule,
        PortalModule,
        ScrollingModule,
        FlexLayoutModule,
        ReactiveFormsModule,
        
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
