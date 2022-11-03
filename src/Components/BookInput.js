export default function BookInput({title, titleChange, author, authorChange, pages, pageChange, read, readChange, toggle }) {
    return (
        <div className="container-fluid">
            <div className="row">
                <h5>Add book</h5>
            </div>
            <div className="row">
                <div className="col">
                    <input onChange={(e)=>{titleChange(e.target.value)}}  type="text" value={title}className="form-control" placeholder="Title" aria-label="Title" aria-describedby="basic-addon1"/>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col">
                    <input type="text" onChange={(e)=>{authorChange(e.target.value)}} value={author} className="form-control" placeholder="Author" aria-label="Author" aria-describedby="basic-addon1"/>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col">
                    <input type="int" value={pages} onChange={(e)=>{pageChange(e.target.value)}} className="form-control" placeholder="Pages" aria-label="Pages" aria-describedby="basic-addon1"/>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-auto">
                    <p>Has the book been read?</p>
                </div>
                <div className="col">
                    <input type="checkbox" id="checkbox" value={read} onChange={(e)=>{readChange(toggle(read))}} aria-label="Pages" aria-describedby="basic-addon1"/>
                </div>
            </div>
        </div>
    )
}