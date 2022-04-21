import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Note } from "../types/note.model";

@Injectable({
  providedIn: 'root'
})

export class NotepadService {
  updateNotes = new Subject<Note[]>();
  editNote = new Subject<number>();
  isEdited: number = 0;
  listNotes: Note[] = [];



  addNote(note: Note) {
    this.listNotes.push(note)
    this.isEdited = this.listNotes.lastIndexOf(note)
    this.updateNotes.next(this.listNotes)
    this.editNote.next(this.listNotes.lastIndexOf(note))
  }
  onRemoveNote(i: number) {
    this.listNotes.splice(i, 1)
    this.editNote.next(0)
    this.listNotes.slice()
  }
  onEdit(index: number) {
    this.isEdited = index
    this.editNote.next(index)
  }
  onUpdateNote(index: number, newNote: any) {
    this.listNotes[index] = newNote
    this.updateNotes.next(this.listNotes)
    this.listNotes.slice()
  }

}
