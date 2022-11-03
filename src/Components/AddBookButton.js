export default function AddBookButton({setBooks, books}) {
    return (
        <div className="row">
            <div className="col">
                <button className="btn btn-block btn-primary" onClick={() => {
                    setBooks([...books, {title: 'joe', author: 'mama', pages: 239, read: true}])
                }}>Add Book</button>
            </div>
        </div>
    )

}
