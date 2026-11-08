import React from 'react'

const Books = () => {
    const books=[{id:1,title:"a",author:"yosi",year:2024,page:250},
        {id:2,title:"b",author:"beni",year:2020,page:350},
        {id:3,title:"c",author:"yoni",year:2015,page:400}]
  return (
    
    <div>
        <table>
             <thead>
                 <tr>
                <th>מזהה</th>
                <th>שם ספר</th>
                <th>שם סופר</th>
                <th>שנת הוצאה</th>
                <th>כמות עמודים</th>
            </tr>
             </thead>
           

            {   books.map((book) => {
                return(
                    <tbody>
                    <tr key={book.id}> 
                    <td>{book.id}</td>
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                    <td>{book.year}</td>
                    <td>{book.page}</td>
                </tr>
                    </tbody>
               
            )
                    
             })}
        </table>   
    </div>
  )
}

export default Books