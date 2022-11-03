export default function AddBookButton({setBooks, BookList}) {
    return (
        <div className="row">
            <div className="col">
                <button className="btn btn-block btn-primary" onClick={() => {
                    setBooks([...BookList, {title: 'joe', author: 'mama', pages: 239, read: true}])
                }}>Add Book</button>
            </div>
        </div>
    )

}
