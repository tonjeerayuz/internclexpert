import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomerInfoComponent } from './component/customer-info/customer-info.component';
import { ProgressBarComponent } from './component/progress-bar/progress-bar.component';
import { MaterialModule } from './material/material.module';
import { DialogComponent, DialogContent } from './component/dialog/dialog.component';
import { DatatableComponent } from './component/datatable/datatable.component';
import { CheckBoxCustomComponent } from './component/CheckBoxCustom/CheckBoxCustom.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerInfoComponent,
    ProgressBarComponent,
    DialogComponent,
    DialogContent,
    DatatableComponent,
    CheckBoxCustomComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
