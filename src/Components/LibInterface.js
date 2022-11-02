import BookInput from './BookInput';
import BookList from './BookList';
export default function LibInterface({books}) {
    

    
    return (
        <div className="container-fluid">
           <div className="row">
                <div className="col-4">
                    <BookInput />
                </div>
                <div className="col-8">
                    <BookList books={books} />
                </div>
            </div> 
        </div>
    )
}