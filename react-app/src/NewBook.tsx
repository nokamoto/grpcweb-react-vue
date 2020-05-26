import React, { useState, useEffect, useRef } from 'react';
import { Book as BookPB, CreateBookRequest } from './library/api/library_pb';
import { LibraryClient } from "./library/api/LibraryServiceClientPb";

const useIsMount = () => {
    const isMountRef = useRef(true);
    useEffect(() => {
      isMountRef.current = false;
    }, []);
    return isMountRef.current;
  };

function NewBook() {
    const isMount = useIsMount();

    const [displayName, setDisplayName] = useState('display name');
    const [book, setBook] = useState(new BookPB());
    const [created, setCreated] = useState('');

    useEffect(() => {
        if (isMount) {
        } else {
            const client = new LibraryClient("http://localhost:8080", {}, {});

            const req = new CreateBookRequest();
            req.setBook(book);
    
            client.createBook(req, {}, (err, res) => {
                if (err || res === null) {
                    console.log(err);
                    setCreated('[' + err.code + '] ' + err.message + ' (' + req.getBook()?.getDisplayName() + ')');
                } else {
                    setCreated(res.getDisplayName() + ' created.');
                }
            })
        }
    }, [book]);

    return (
        <div>
            <input type="text" value={displayName} onChange={event => setDisplayName(event.target.value)}></input>
            <button onClick={() => {
                const b = new BookPB();
                b.setDisplayName(displayName);
                setBook(b);
            }}>create</button>
            <p>{created}</p>
        </div>
    );
}

export default NewBook;
