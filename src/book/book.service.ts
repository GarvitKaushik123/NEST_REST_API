import { Injectable } from "@nestjs/common";
import { Book } from "./data/book.dto";
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class BookService{
    public books : Book[] = [];


    // add book
    addBookService(book: Book) : string{
        book.id = uuidv4();
        this.books.push(book);
        return "book has been successfully added";
    }
    // update book
    updateBookService(book: Book): string{
        let index = this.books.findIndex((currentBook)=>{
            return currentBook.id == book.id;
        })
        this.books[index] = book;
        return "Book has been succesfully updated";
    }
    // delet book
    deleteBookService(bookId: string): string{
        this.books = this.books.filter((book)=>{
            return book.id != bookId;
        });
        return "book deleted sucessfully";
    }
    // find all books
    findAllBooks() : Book[]{
        return this.books;
    }
}