import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../model/book';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {
  booklist: Book[];
  newBook: Book;
  errorMessage: string = null;
  stateMessage: string = null;
  noBookFound: string = null;
  filter: string;
  author: string;
  authorToDelete: string;
  addAuthorError: string = null;

  constructor(public library: LibraryService) { 
    this.booklist = this.library.getBookList();
    this.newBook = {
      title: "",
      isbn: "",
      rented: false,
      authors: [],
    }
    this.filter = "";
    this.author = "";
    this.authorToDelete = "";
  }

  ngOnInit(): void {
  }

  addBook() {
    if((this.booklist.filter(x => x && x.isbn && x.isbn === this.newBook.isbn).length === 0)) {
      this.library.addBook(this.newBook)
      this.newBook = {
        title: "",
        isbn: "",
        rented: false,
        authors: [],
      }
      this.addAuthorError = null;
      this.errorMessage = null;
    } else {
      this.errorMessage = "ISBN bereits vergeben"
    }
  }

  bookRented($event: Book) {
    let title = $event.title;
    this.stateMessage = `Buch mit dem Titel ${title} wurde ausgeliehen`
  }

  bookReturned($event: Book) {
    let title = $event.title;
    this.stateMessage = `Buch mit dem Titel ${title} wurde zurückgegeben`
  }

  filteredList(): Book[] {
    this.noBookFound = null;
    let filteredBooks = this.library.filterBooksByTitle(this.filter);
    if(filteredBooks.length === 0) {
      this.noBookFound = "No books found";
    }
    return filteredBooks;
  }

  addauthor() {
    if (this.author !== "" && this.newBook.authors.filter(x => x && x === this.author).length === 0) {
      this.newBook.authors.push(this.author);
      this.author = "";
      this.addAuthorError = null;
      console.log("Pushed")
    } else {
      this.addAuthorError = "Author allready assigned!"
    }
  }

  deleteauthor() {
    this.newBook.authors = this.newBook.authors.filter(x => x && x !== this.authorToDelete)
    console.log("Deleted")
  }

}
