import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import '../styles/components/pages/NoticiasPage.css';
import axios from 'axios';
import NoticiaItem from "../components/noticias/NoticiaItem";

const NoticiasPage = (props) => {
    const [loading, setLoading] = useState(false);
    const [noticias, setNoticias] = useState([]);

    useEffect(() => {
        const cargarNoticias = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/noticias');
            setNoticias(response.data);
            setLoading(false);
        };

        cargarNoticias();
    }, []);

    return (
        <section className="holder">
            <h2>Noticias</h2>
            {loading ? (
                <p>Cargando...</p>
            ) : (
                noticias.map(item => <NoticiaItem key={item.id}
                    title={item.titulo} subtitle={item.subtitulo}
                    imagen={item.imagen} body={item.cuerpo} />)
            )}
        </section>
    );
}

export default NoticiasPage;





{/* <div className="container">
            <main className="holder">
                <h2>Noticias</h2>
                <div className="noticias">
                    <img src="images/noticias/alvarezarg.jpg" alt="julian gol con argentina" width="280" height="226" />
                    <div className="info">
                        <h4>Debut de titular con gol para la araña</h4>
                        <p>
                            En su primera titularidad con la selección mayor, Álvarez convirtió el unico gol del seleccionado
                            nacional en  el empate 1-1 ante Ecuador en Guayaquil.
                        </p>
                        <Button href="#" variant="outline-danger">Leer mas...</Button>{' '}
                    </div>
                </div>
                <div className="noticias">
                    <img src="images/noticias/diazymartinez.jpg" alt="diaz y martinez" width="280" height="226" />
                    <div className="info">
                        <h4>Vuelve la dupla central</h4>
                        <p>De cara al partido del sábado ante Defensa y Justicia, la dupla central titular compuesta por Paulo
                            Diaz y David Martinez se perfila como titular. Con Diaz de vuelta en el club luego de su
                            participación en la selección chilena y Martinez recuperado de la lesión, ambos están disponibles
                            para Marcelo
                        </p>
                        <Button href="#" variant="outline-danger">Leer mas...</Button>{' '}
                    </div>
                </div>
                <div className="noticias">
                    <img src="images/noticias/ramirazo.jpg" alt="ramirazo" width="280" height="226" />
                    <div className="info">
                        <h4>8° aniversario del 'Ramirazo'</h4>
                        <p>Un 30/03/2014 se disputaba el recordado superclásico en la bombonera que ganaría el, por aquel
                            entonces equipo de Ramón, por 2-1 con un cabezazo que pasaría a la historia, no solo porque fue
                            decisivo para el partido, sino también para cortar una sequía de 10 años sin victorias en la
                            Bombonera
                        </p>
                        <Button href="#" variant="outline-danger">Leer mas...</Button>{' '}
                    </div>
                </div>

            </main>
        </div> */}