import { Injectable } from '@angular/core';
import { Book } from './model/book';
import globalBookList from 'c:/Code/WebTech 8/assignment8/ex3and4/src/assets/book_library.json';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  private bookList: Book[];

  constructor() { 
    this.bookList = globalBookList;
  }

  getBookList(): Book[] {
    return this.bookList;
  }

  addBook(book: Book) {
    this.bookList.push(book);
  }

  rentBook(book: Book): Book {
    book.rented = true;
    return book;
  }

  returnBook(book: Book): Book  {
    book.rented = false;
    return book;
  }

  filterBooksByTitle(title: string): Book[] {
    return this.bookList.filter(x => x && x.title && x.title.toLocaleLowerCase().includes(title.toLocaleLowerCase()))
  }

  getBookByISBN(isbn: string): Book {
    let myBook: Book = null;
    this.bookList.forEach(book => {
      if (book.isbn === isbn) {
        myBook = book;
      }
    })

    return myBook;
  }
}
