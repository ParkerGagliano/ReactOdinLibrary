export default function DisplayBook({author, title, pages, read, info}) {
    return (

        <div className="container-fluid mt-4">
            <div className="row border-bottom">
                <div className="col">{info}</div>
            </div>
            <div className="container-fluid bg-secondary rounded">
                <div className="row mt-4">
                    <div className="col mt-3">
                        <h3>{title}</h3>
                    </div>
                </div>
                <div className="row p-4 m-5"></div>
                <div className="row mt-4">
                    <div className="col">
                        <h5>{author}</h5>
                    </div>
                </div>
                <div className="row ">
                    <div className="col">
                        <p>{pages}</p>
                    </div>
                    <div className="col">
                        { read ? <p className="text-right">Read</p> :  <p>Not Read</p>}
                    </div>
                </div>
               
            </div>
        </div>
    )
}