import React from 'react';
import '../../styles/components/pages/NoticiasPage.css';
import Button from 'react-bootstrap/Button';

const NoticiaItem = (props) => {
    const { title, subtitle, imagen, body } = props;

    return (
        <div className='noticias'>
            <h2>{title}</h2>
            <h4>{subtitle}</h4>
            <img src={imagen}/>
            <div dangerouslySetInnerHTML={{ __html: body }} className='info' />
            <Button href="#" variant="danger" className='button'>Leer mas...</Button>
            <hr />
        </div>
    );
}

export default NoticiaItem;