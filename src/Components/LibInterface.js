import BookInput from './BookInput';
import BookDisplay from './BookDisplay';
import AddBookButton from './AddBookButton';
import DisplayBook from './DisplayBook';
import { useState } from 'react';
export default function LibInterface({books}) {
   
    const [BookList, setBookList] = useState(books);
    const [textTitle, setTextTitle] = useState('');

    
    
    return (
        <div className="container-fluid">
           <div className="row">
                <div className="col-4">
                    <BookInput Title = {textTitle} titleChange = {setTextTitle}/>
                    <AddBookButton setBooks={setBookList} BookList={BookList}></AddBookButton>
                </div>
                <div className="col-8">
                    <BookDisplay books={BookList} />
                </div>
            </div> 
            <DisplayBook book={{title: 'joe', author: 'biden'}} title = {textTitle}></DisplayBook>
        </div>
    )
}