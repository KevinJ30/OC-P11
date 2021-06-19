import React from 'react';
import { Link } from 'react-router-dom';

class PageNotFound extends React.Component {
    render() { 
        return (
            <div className="page_not_found">
                <h1 className="page_not_found__title">404</h1>
                <p className="page_not_found__text">Oups! La page que vous demandez n'existe pas.</p>
                <Link to="/" className="page_not_found__link">Retourner a la page d'acceuil</Link>
            </div>
        );
    }
}
 
export default PageNotFound;