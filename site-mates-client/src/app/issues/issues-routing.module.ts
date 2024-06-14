import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: 'issues/home', component: HomeComponent },
  { path: 'issues', redirectTo: 'issues/home', pathMatch: 'full' },
  { path: '', redirectTo: 'issues/home', pathMatch: 'full' },
  { path: 'issues/create', component: CreateComponent },
  { path: 'issues/edit/:_id', component: EditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IssuesRoutingModule {}
