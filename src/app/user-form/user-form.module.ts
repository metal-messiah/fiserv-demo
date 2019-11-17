import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { ResultsComponent } from './results/results.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomMaterialModule } from '../shared/custom-material/custom-material.module';
import { UserFormService } from './user-form.service';
@NgModule({
  declarations: [ResultsComponent, FormComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, CustomMaterialModule],
  providers: [UserFormService]
})
export class UserFormModule {}
