import Book from "./Book"

export default function BookList({books}) {
    function createAbrev(title, author) {
        let titleAbv = title.split(' ').map(word => word[0]).join('')
        let authorAbv = author.split(' ').map(word => word[0]).join('')
        return [titleAbv, authorAbv]
    
    }

   
    return (
        <div className="container-fluid">
            <div className="row">
                {books.map((bookinfo) => { return <Book book={bookinfo} abrev = {createAbrev(bookinfo.title, bookinfo.author)} />})}
            </div>
        </div>
            
        )
                
}