import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PathNotFoundComponent } from './path-not-found/path-not-found.component';
import { CustomMaterialModule } from './custom-material/custom-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

@NgModule({
  imports: [CommonModule, CustomMaterialModule, FormsModule, ReactiveFormsModule],
  declarations: [PathNotFoundComponent, NotAuthorizedComponent, ConfirmDialogComponent],
  exports: [PathNotFoundComponent, NotAuthorizedComponent, ConfirmDialogComponent],
  entryComponents: [ConfirmDialogComponent]
})
export class SharedModule {}
