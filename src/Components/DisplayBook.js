export default function DisplayBook({author, title, pages, read, info}) {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col">{info}</div>
            </div>
            <div className="row">
                <div className="col">
                    <h5>{title}</h5>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h5>{author}</h5>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h5>{pages}</h5>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    { read ? <h3>Read</h3> :  <h3>Not Read</h3>}
                </div>
            </div>
        </div>
    )
}