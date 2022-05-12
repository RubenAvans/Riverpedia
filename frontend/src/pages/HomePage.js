import React from "react";
import Button from 'react-bootstrap/Button';

const HomePage = (props) => {
    return (
        <div className="container">
            <main className="holder">
                <div className="homeimg">
                    <img src="images/home/libertadores2018.jpg" alt="libertadores 2018" />
                </div>
                <div className="columnas">
                    <div className="river">
                        <h2>River Plate</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo pariatur nisi dolorem perspiciatis, at
                            aliquam,
                            sit consequatur delectus enim ullam et iure quod velit cumque ipsam eveniet fuga nemo illum.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo pariatur nisi dolorem perspiciatis, at
                            aliquam,
                            sit consequatur delectus enim ullam et iure quod velit cumque ipsam eveniet fuga nemo illum.</p>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo pariatur nisi dolorem perspiciatis, at
                            aliquam,
                            sit consequatur delectus enim ullam et iure quod velit cumque ipsam eveniet fuga nemo illum.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo pariatur nisi dolorem perspiciatis, at
                            aliquam,
                            sit consequatur delectus enim ullam et iure quod velit cumque ipsam eveniet fuga nemo illum.</p>
                    </div>
                    <div className="ultimanoticia">
                        <h2>Ultimas Noticias</h2>
                        <div className="fotonoticia">
                            <img src="images/home/alvarezfestejo.jpg" alt="imagen noticia" />
                        </div>
                        <div className="noticia">
                            <span className="titulo">Hat Trick Aracnido</span>
                            <span className="texto">Con triplete de Julian Alvarez, River venció 4-1 a Patronato en su primer
                                partido de local</span>
                            <Button href="#" variant="outline-danger">Leer mas...</Button>{' '}
                        </div>
                    </div>
                </div>

            </main>
        </div>
    );
}

export default HomePage;