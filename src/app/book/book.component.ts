import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
  }

  makeRented() {
    this.book.rented = !this.book.rented;
    this.onMakeRented.emit(this.book);
  }

  makeReturned() {
    this.book.rented = !this.book.rented;
    this.onMakeReturned.emit(this.book);
  }

}
