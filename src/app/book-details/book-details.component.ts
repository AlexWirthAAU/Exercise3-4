import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LibraryService } from '../library.service';
import { Book } from '../model/book';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  isbn: string;
  book: any;
  
  constructor(private route: ActivatedRoute, public library: LibraryService) {
    this.isbn = this.route.snapshot.paramMap.get('isbn');
    this.book = this.library.getBookByISBN(this.isbn);

  }

  ngOnInit(): void {
  }

}
