import { useState } from 'react'

interface Book {
    book: string;
    cost: number
}

// const book: Book = 

const Counter = () => {
    // const [value, setValue] = useState(1)                //implicit casting hai ye jisme generic define nhi h ya fir string hai ya no.
    const [value, setValue] = useState<number>(1)          //Explicit casting hai ye jisme define kiya gya hai ki number hi ayega
    const [bookValue, setBookValue] = useState<Book>({
        book: "Aman ki book",
        cost: 26
    })

    return (
        <div style={{ marginTop: "100px" }}>
            <div>{value}</div>
            <button onClick={() => setValue(value + 1)}>Increment</button>

            <div>{bookValue.book} ka price hai {bookValue.cost}</div>
            <button onClick={() => setBookValue({ book: "Vikas ki book", cost: 49 })}>Change Price of Book</button>
        </div>
    )
}

export default Counter



// OR
// import { useState } from 'react'

// interface Book {
//     book: string;
//     cost: number
// }

// const book: Book = {
//     book: "Aman Ki book",
//     cost: 20
// }

// const Counter = () => {
//     const [value, setValue] = useState<number>(1)
//     const [bookValue, setBookValue] = useState<Book>({
//         book: "Aman ki book",
//         cost: 26
//     })

//     return (
//         <div style={{ marginTop: "100px" }}>
//             <div>{value}</div>
//             <button onClick={() => setValue(value + 1)}>Increment</button>

//             <div>{bookValue.book}</div>
//             <button onClick={() => setBookValue({ book: "Vikas ki book", cost: 49 })}>Change Price of Book</button>
//         </div>
//     )
// }

// export default Counter
