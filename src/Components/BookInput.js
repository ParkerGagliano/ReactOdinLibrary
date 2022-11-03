export default function BookInput({addBook}) {
    return (
        <div className="container-fluid">
            <div className="row">
                <h5>Add book</h5>
            </div>
            <div className="row">
                <div className="col">
                    <input type="text" className="form-control" placeholder="Title" aria-label="Title" aria-describedby="basic-addon1"/>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col">
                    <input type="text" className="form-control" placeholder="Author" aria-label="Author" aria-describedby="basic-addon1"/>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col">
                    <input type="int" className="form-control" placeholder="Pages" aria-label="Pages" aria-describedby="basic-addon1"/>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-auto">
                    <p>Has the book been read?</p>
                </div>
                <div className="col">
                    <input type="checkbox" aria-label="Pages" aria-describedby="basic-addon1"/>
                </div>
            </div>
            <div className="row mt-2">
                <button onClick={addBook({title: 'newtest', author: 'newtest1'})}></button>
            </div>


        </div>
    )
}