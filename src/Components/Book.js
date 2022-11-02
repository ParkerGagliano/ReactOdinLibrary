export default function({book, abrev}) {
    console.log(abrev)
    return (
        abrev[0].split('').map((letter) => {return <p className="row">{letter}</p>})
    )

}