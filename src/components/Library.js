import React from 'react';
import Card from './Card';
import './Library.css';


const Library = ({books}) => {

    if (books === undefined || books.length === 0) 
        return <h1>No Books Found</h1>;
    else {
        return (
            <div className="library">
                 {books.map((book, i) => {
                     
                     let randomPrice = Math.floor(Math.random() * 53) + 18;
                     let discountPrice = Math.floor(Math.random() * randomPrice) + 9;
                     let status = (Math.floor(Math.random() * 2) === 1) ? 'Available': 'Sold Out';
    
                    return <Card 
                            key={book.id} 
                            id={book.id} 
                            cover={
                                (book.volumeInfo.imageLinks !== undefined) ?book.volumeInfo.imageLinks.smallThumbnail.replace('&edge=curl','')
                                : 'https://freefrontend.com/assets/img/html-funny-404-pages/SVG-Animation-404-Page.png'
                            } 
                            name={
                                book.volumeInfo.title
                            } 
                            author={
                                (book.volumeInfo.authors !== undefined) ? 
                                book.volumeInfo.authors 
                                : 'Unknown Author'
                            } 
                            desc={
                                (book.volumeInfo.description !== undefined) ? 
                                book.volumeInfo.authors 
                                : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nobis labore fuga, enim, nulla vel amet assumenda expedita, consequuntur ipsum delectus? Excepturi, eum! Minima voluptates dicta beatae aliquid, consectetur omnis?'} 
                            status={status} 
                            pbd={randomPrice} 
                            pad={discountPrice}/>
                } )}
            </div>
        );
    }
    
}

export default Library;

