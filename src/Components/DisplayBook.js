export default function DisplayBook({book, title}) {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-3">
                    <h4>Title</h4>
                </div>
                <div className="col">
                    {title}
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    <h4>Author:</h4>
                </div>
                <div className="col">
                    {book.author}
                </div>
            </div>
        </div>
    )
}