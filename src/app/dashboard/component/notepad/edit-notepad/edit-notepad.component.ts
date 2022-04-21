import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Note } from 'src/app/dashboard/types/note.model';
import { NotepadService } from 'src/app/dashboard/service/notepad.service';

@Component({
  selector: 'app-edit-notepad',
  templateUrl: './edit-notepad.component.html',
  styleUrls: ['./edit-notepad.component.scss']
})
export class EditNotepadComponent implements OnInit {
  listNotes: Note[] = [];
  isEdited: number = 0;
  title: any = '';
  noteisEdited: any = '';
  subscription: Subscription = new Subscription;

  constructor(
    private notepadService: NotepadService) {
  }

  ngOnInit(): void {
    this.listNotes = this.notepadService.listNotes
    this.subscription = this.notepadService.editNote
      .subscribe((index: number) => {
        this.isEdited = index
        this.noteisEdited = this.listNotes[this.isEdited].content
        this.listNotes = this.notepadService.listNotes
        this.title = this.listNotes[this.isEdited].title
      })
  }

  onKeyUp(index: number) {
    const updateNote = {
      title: this.title,
      content: this.noteisEdited
    }
    this.notepadService.onUpdateNote(index, updateNote)
  }

  onAddNote() {
    const newNote: Note = {
      content: '',
      title: '',
      id: this.listNotes.length,
      date: new Date()
    }
    this.notepadService.addNote(newNote)
  }
}
