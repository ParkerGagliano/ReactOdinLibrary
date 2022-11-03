export default function DisplayBook({author, title, pages, read}) {
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
                    {author}
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    <h4>Pages:</h4>
                </div>
                <div className="col">
                    {pages}
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    <h4>Has been read:</h4>
                </div>
                <div className="col">
                    { read ? <h3>Yes</h3> :  <h3>No</h3>}
                </div>
            </div>
        </div>
    )
}