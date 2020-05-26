import React, { useState, useEffect } from 'react';
import { Book as BookPB, ListBookRequest } from './library/api/library_pb';
import { LibraryClient } from "./library/api/LibraryServiceClientPb";

function Book(book: BookPB) {
  return (<li key={book.getName()}>{book.getDisplayName()}</li>);
}

function Books() {
  const [books, setBooks] = useState(new Array<BookPB>());

  useEffect(() => {
    const client = new LibraryClient("http://localhost:8080", {}, {});

    const req = new ListBookRequest();

    client.listBook(req, {}, (err, res) => {
      if (err || res === null) {
        console.log(err);
        // throw err;
        const dummy = [new BookPB(), new BookPB()];
        dummy[0].setName("books/dummy0");
        dummy[0].setDisplayName("Dummy0");
        dummy[1].setName("books/dummy1");
        dummy[1].setDisplayName("Dummy1");
        setBooks(dummy);
      } else {
        console.log(res);
        setBooks(res.getBooksList());
      }
    });
  }, []);

  return (
    <div>
      <ul>
        {books.map(book => {
          return Book(book);
        })}
      </ul>
    </div>
  );
}

export default Books;
