// Reuseable Compoenet for Seach

import React from 'react';

const inputStyle = {
    margin: '10px 0px 10px 0px',
    width: '98%',
}

function Search ({name,OnChange}) {
    return <input style={inputStyle} placeholder={name} onChange={OnChange}></input> ;
    
}

export default Search