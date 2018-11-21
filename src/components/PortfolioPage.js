import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioPage = () => (
    <div>
        <h1>My Work</h1>
        <p>Select a portfolio from the following:</p>
        <ol>
        <li>
            <Link to="/portfolio/1"> Portfolio 1</Link>
        </li>
        <li>
            <Link to="/portfolio/2"> Portfolio 2</Link>
        </li>
        </ol>
    </div>
);

export default PortfolioPage;
