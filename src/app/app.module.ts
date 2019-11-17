import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { UserFormModule } from './user-form/user-form.module';
import { CustomMaterialModule } from './shared/custom-material/custom-material.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, SharedModule, AppRoutingModule, UserFormModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
