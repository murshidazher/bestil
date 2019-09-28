import React from 'react';
import './SearchBox.css';

const SearchBox = ({searchfield, searchChange}) => {
    
    return (

        <div className="input-group input-group--with-icon icon-left">

            <input aria-label="Search Books" className="search form-control maxw-8 clr--red" type="search" placeholder="Enter a book name" onChange={searchChange} />

            <svg className="search-icon">

            </svg>
                    
        </div>
        
    );
}

export default SearchBox;