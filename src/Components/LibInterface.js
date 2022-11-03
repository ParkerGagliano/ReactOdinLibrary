import BookInput from './BookInput';
import BookDisplay from './BookDisplay';
import AddBookButton from './AddBookButton';
import DisplayBook from './DisplayBook';
import { useState } from 'react';
export default function LibInterface({books}) {
    let temp = document.getElementById('checkbox');
   
    const [BookList, setBookList] = useState(books);
    const [textTitle, setTextTitle] = useState('');
    const [textAuthor, setTextAuthor] = useState('');
    const [intPages, setIntPages] = useState(null);
    const [boolRead, setBoolRead] = useState(null);

    function addBook() {
        setBookList([...BookList, {title: textTitle, author: textAuthor, pages: intPages, read: boolRead}]);
        clearBooks()
    }

    function toggle(value){
        if (value === null) {
            return true
        }
        else {
            temp.checked = !temp.checked;
            return null
        }
      }

    function clearBooks() {
        setTextTitle('');
        setTextAuthor('');
        setIntPages(null);
        setBoolRead(null);
        temp.checked = false;
    }
    
    return (
        <div className="container-fluid">
           <div className="row">
                <div className="col-4">
                    <BookInput toggle = {toggle}title = {textTitle} titleChange = {setTextTitle} author={textAuthor} pages={intPages} read={boolRead}authorChange = {setTextAuthor}
                     pageChange = {setIntPages} readChange = {setBoolRead}/>
                    <AddBookButton setBooks={addBook} BookList={BookList}></AddBookButton>
                </div>
                <div className="col-8">
                    <BookDisplay books={BookList} />
                </div>
            </div> 
            <DisplayBook title = {textTitle} author={textAuthor} pages={intPages} read={boolRead}></DisplayBook>
        </div>
    )
}