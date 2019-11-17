import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PathNotFoundComponent } from './shared/path-not-found/path-not-found.component';
import { NotAuthorizedComponent } from './shared/not-authorized/not-authorized.component';
import { FormComponent } from './user-form/form/form.component';
import { ResultsComponent } from './user-form/results/results.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export const routes: Routes = [
  { path: '', component: FormComponent },
  { path: 'results', component: ResultsComponent },
  { path: 'not-authorized', component: NotAuthorizedComponent },
  { path: '**', component: PathNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
