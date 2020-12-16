import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LibraryService } from '../library.service';
import { Book } from '../model/book';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() book: Book;
  @Output() onMakeRented:  EventEmitter<Book> = new EventEmitter();
  @Output() onMakeReturned:  EventEmitter<Book> = new EventEmitter();

  constructor(public library: LibraryService) { }

  ngOnInit(): void {
  }

  makeRented() {
    this.onMakeRented.emit(this.library.rentBook(this.book));
  }

  makeReturned() {
    this.onMakeReturned.emit(this.library.returnBook(this.book));
  }

}
