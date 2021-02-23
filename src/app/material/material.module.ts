import { NgModule } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
const MaterialComponents = [
  MatProgressBarModule,
  MatTabsModule, 
  MatDialogModule,
  MatTableModule,
  MatCheckboxModule,
  MatButtonModule,
  
];

@NgModule({
  exports: [MaterialComponents]
})
export class MaterialModule { } 
