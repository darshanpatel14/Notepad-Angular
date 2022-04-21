import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/component/dashboard/dashboard.component';
import { EditNotepadComponent } from './dashboard/component/notepad/edit-notepad/edit-notepad.component';
import { NotepadComponent } from './dashboard/component/notepad/notepad.component';
import { DashboardModule } from './dashboard/dashboard.module';

const routes: Routes = [

  {
    path: '', component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
