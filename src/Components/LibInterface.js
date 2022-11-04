import BookInput from './BookInput';
import BookDisplay from './BookDisplay';
import AddBookButton from './AddBookButton';
import DisplayBook from './DisplayBook';
import { useState } from 'react';
import Book from './Book';
export default function LibInterface({books}) {
    let temp = document.getElementById('checkbox');
   


    const [BookList, setBookList] = useState(books);
    const [textTitle, setTextTitle] = useState('');
    const [textAuthor, setTextAuthor] = useState('');
    const [intPages, setIntPages] = useState(null);
    const [boolRead, setBoolRead] = useState(null);
    const [displayTitle, setDisplayTitle] = useState('');
    const [displayAuthor, setDisplayAuthor] = useState('');
    const [displayPages, setDisplayPages] = useState(null);
    const [displayRead, setDisplayRead] = useState(null);

    function createAbrev(title, author) {
        let titleAbv = title.split(' ').map(word => word[0]).join('')
        let authorAbv = author.split(' ').map(word => word[0]).join('')
        return [titleAbv, authorAbv]
        
    }

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
        setIntPages('');
        setBoolRead(null);

    }

    function clickBook(book) {
        return function() {
            clearBooks()
            setDisplayTitle(book.title);
            setDisplayAuthor(book.author);
            setDisplayPages(book.pages);
            setDisplayRead(book.read);
        }
        

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
                    <div className="container-fluid">
                        <div className="row">
                            {BookList.map((bookinfo) => { return <div className='col-1'><button onClick={clickBook(bookinfo)} className="btn btn-block w-100"><Book onClick={clickBook} abrev = {createAbrev(bookinfo.title, bookinfo.author)}/></button></div> })}
                        </div>
                    </div>
                </div>
            <div className='row'>
                <div className='col-4'>
                {textTitle || textAuthor  ? <DisplayBook title={textTitle} author={textAuthor} pages={intPages} read={boolRead} info={'Book Preview'}/> : <div className="col-6"></div>}
                    
                    
                </div>
                <div className='col-2'></div>
                <div className='col-4'>
                   {displayTitle ? <DisplayBook title = {displayTitle} author={displayAuthor} pages={displayPages} read={displayRead} info={'Currently Selected Book'}></DisplayBook> : <div></div>} 
                </div>
            
            </div>
            </div> 
        
            
        </div>
    )
}