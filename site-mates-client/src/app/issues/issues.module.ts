import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IssuesRoutingModule } from './issues-routing.module';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent, CreateComponent, EditComponent],
  imports: [CommonModule, IssuesRoutingModule, FormsModule],
})
export class IssuesModule {}
