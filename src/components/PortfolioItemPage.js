import React from 'react';

const PortfolioItemPage =(props)=>(
    <div>
        <h1>A thing i have done</h1>
        <p>Page for item with the id of {props.match.params.id}.</p>
   </div>
);

export default PortfolioItemPage
