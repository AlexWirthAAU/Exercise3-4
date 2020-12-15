// the model for the book, correponding in partial subset of attributes from the JSON file

export class Book {
	title: string;
	authors?: string[];
	rented?: boolean = false;
	isbn: string;
}
