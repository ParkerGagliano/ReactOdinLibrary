export default function({book, abrev}) {
    return (
        <div className="col-2">
            <button className="btn btn-block w-100">
                <p className="p-0 m-0 block"> {abrev[0]}</p>
            </button>
        </div>
    )

}