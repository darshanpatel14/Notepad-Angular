import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NotepadService } from '../../service/notepad.service';

@Component({
  selector: 'app-notepad-list',
  templateUrl: './notepad-list.component.html',
  styleUrls: ['./notepad-list.component.scss']
})
export class NotepadListComponent implements OnInit, OnDestroy {
  listNotes: any = [];
  selected: number = 0;
  editedNote: string = '';
  subscription: Subscription = new Subscription
  constructor(private notepadService: NotepadService) {
    this.listNotes = this.notepadService.listNotes
  }

  ngOnInit(): void {
    this.subscription = this.notepadService.editNote
      .subscribe((index: number) => {
        this.selected = this.notepadService.isEdited
      })
  }

  onAddNote() {
    const newNote = {
      content: this.editedNote,
      title: '',
      id: this.listNotes.length,
      date: new Date()
    }
    this.notepadService.addNote(newNote);
  }
  onRemoveNote() {
    this.notepadService.onRemoveNote(this.notepadService.isEdited)

  }
  onEditNote(i: number) {
    this.notepadService.onEdit(i);
    this.notepadService.editNote.next(i)
  }
  ngOnDestroy() {
    this.subscription.unsubscribe
  }

}
