import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { NotepadListComponent } from "./component/notepad-list/notepad-list.component";
import { EditNotepadComponent } from "./component/notepad/edit-notepad/edit-notepad.component";
import { NotepadComponent } from "./component/notepad/notepad.component";
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { NotepadService } from "./service/notepad.service";
import { BrowserModule } from "@angular/platform-browser";

const routes = [{
  path: '', component: DashboardComponent,
}, {
  path: 'notepad', component: NotepadComponent,
  children: [
    { path: ':id', component: EditNotepadComponent }]
}]

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes), ReactiveFormsModule, HttpClientModule, BrowserAnimationsModule, // required animations module
    BrowserModule],
  declarations: [NotepadComponent,
    NotepadListComponent,
    EditNotepadComponent,
    DashboardComponent,],
  providers: [NotepadService]
})
export class DashboardModule { }