import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common/decorators";
import { get } from "http";
import { BookService } from "./book.service";
import { Book } from "./data/book.dto";

@Controller("book")//adds book to url
export class BookController{
    constructor(private bookService: BookService){

    }

    @Get("/findAll")
    getAllBooks(): Book[]{
        return this.bookService.findAllBooks();
    }

    @Put("/update")
    updateBook(@Body() book: Book): string{//nest js task will be to map the body objec to Book object 
        return this.bookService.updateBookService(book);
    }

    @Delete("/delete/:id")
    deleteBook(@Param("id") bookId: string) : string{
        return this.bookService.deleteBookService(bookId);
    }

    @Post("/add")
    addBook(@Body() book: Book): string{
        return this.bookService.addBookService(book);
    }
}