import React from "react";
import Accordion from 'react-bootstrap/Accordion'

const TraspasosPage = (props) => {
    return (
        <div className="container">
            <main className="holder">
                <h2>Mercados de pases</h2>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>2022</Accordion.Header>
                        <Accordion.Body>
                            <div className="jugadores">
                                <div className="jugador2022">
                                    <img src="images/traspasos/2022/quintero.png" alt="Quintero" />
                                    <h5>J.F Quintero</h5>
                                    <h6>Libre</h6>
                                    <p>Juanfer Quintero llega en condición de jugador libre, con el pase en su poder</p>
                                </div>
                                <div className="jugador2022">
                                    <img src="images/traspasos/2022/barco.png" alt="Barco" />
                                    <h5>E. Barco</h5>
                                    <h6>Prestamo</h6>
                                    <p>Esequiel Barco llega a River con un préstamo por 2 temporadas y una opcion de compra
                                        de
                                        7M de dolares por el 50% del pase. Esta puede ser ejecutada tanto en diciembre de
                                        2022
                                        como en 2023</p>
                                </div>
                                <div className="jugador2022">
                                    <img src="images/traspasos/2022/gomez.png" alt="Gomez" />
                                    <h5>E. Gomez</h5>
                                    <h6>Compra</h6>
                                    <p>Elias Gomez llega a River a cambio de 1.5M de dolares por el 70% del pase. Firma
                                        hasta
                                        diciembre de 2025</p>
                                </div>
                                <div className="jugador2022">
                                    <img src="images/traspasos/2022/gonzalezpirez.png" alt="Gonzalez Pirez" />
                                    <h5>G. Pirez</h5>
                                    <h6>Préstamo</h6>
                                    <p>Gonzalez Pirez retorna al club a cambio con un préstamo por 1.8M de dolares y con una
                                        opción de compra de 200m dolares</p>
                                </div>
                                <div className="jugador2022">
                                    <img src="images/traspasos/2022/herrera.png" alt="Herrera" />
                                    <h5>A. Herrera</h5>
                                    <h6>Compra</h6>
                                    <p>Andrés Herrera llega al club a cambio de 2.5M de dolares netos para San Lorenzo, en
                                        un
                                        solo pago, a cambio del 70% del pase del jugador</p>
                                </div>
                                <div className="jugador2022">
                                    <img src="images/traspasos/2022/mammana.png" alt="Mammana" />
                                    <h5>Mammana</h5>
                                    <h6>Libre</h6>
                                    <p>Emanuel Mammana llega en condición de jugador libre, luego de su desvinculación del
                                        Zenit
                                        de Rusia, firmando a préstamo hasta diciembre de 2022, con opción a extender por un
                                        año
                                        más</p>
                                </div>
                                <div className="jugador2022">
                                    <img src="images/traspasos/2022/pochetino.png" alt="Pochetino" />
                                    <h5>Pochettino</h5>
                                    <h6>Prestamo</h6>
                                    <p>Tomas Pochettino llega al club mediante un prestamo sin cargo, proveniente del Austin
                                        FC
                                        de la MLS, con una opción de compra de 5.5M de dolares en junio y de 6M en diciembre
                                    </p>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>2021</Accordion.Header>
                        <Accordion.Body>
                            <div className="jugadores">
                                <div className="jugador2021">
                                    <img src="images/traspasos/2021/maidana.png" alt="maidana" />
                                    <h5>Maidana</h5>
                                    <h6>Libre</h6>
                                    <p>Maidana retorna al club en condición de libre luego de su paso por el futbol
                                        mexicano, en el Toluca</p>
                                </div>
                                <div className="jugador2021">
                                    <img src="images/traspasos/2021/palavecino.png" alt="palavecino" />
                                    <h5>Palavecino</h5>
                                    <h6>Compra</h6>
                                    <p>Palavecino llega al club a cambio de 1.8M de dolares por el 35% del pase, más otros
                                        1.7M por otro 30% al cumplir 30 partidos</p>
                                </div>
                                <div className="jugador2021">
                                    <img src="images/traspasos/2021/martinez.png" alt="Martinez" />
                                    <h5>Martinez</h5>
                                    <h6>Prestamo</h6>
                                    <p>Luego de que Gallardo no lo tenga en cuenta y lo venda a Defensa y Justicia, el
                                        defensor retorna al club en condición de prestamo sin opción</p>
                                </div>
                                <div className="jugador2021">
                                    <img src="images/traspasos/2021/vigo.png" alt="vigo" />
                                    <h5>Vigo</h5>
                                    <h6>Compra</h6>
                                    <p>Vigo llega al club a cambio de 2M de dolares por el 50% del pase además de la cesión
                                        de Cristian Ferreira a Colón</p>
                                </div>
                                <div className="jugador2021">
                                    <img src="images/traspasos/2021/fontana.png" alt="fontana" />
                                    <h5>Fontana</h5>
                                    <h6>Compra</h6>
                                    <p>Fontana llega al club a cambio de 1.75M de dolares por el 75% del pase proveniente de
                                        Banfield</p>
                                </div>
                                <div className="jugador2021">
                                    <img src="images/traspasos/2021/paradela.png" alt="paradela" />
                                    <h5>Paradela</h5>
                                    <h6>Compra</h6>
                                    <p>Paradela llegó al club a cambio de 1.7M de dolares por el 80% del pase, proveniente
                                        de Gimnasia</p>
                                </div>
                                <div className="jugador2021">
                                    <img src="images/traspasos/2021/romero.png" alt="romero" />
                                    <h5>Romero</h5>
                                    <h6>Compra</h6>
                                    <p>Romero llega a River en una operacion de entre 2.5 y 3M de dolares, proveniente de
                                        Defensa y Justicia</p>
                                </div>
                                <div className="jugador2021">
                                    <img src="images/traspasos/2021/enzofernandez.png" alt="fernandez" />
                                    <h5>Fernandez</h5>
                                    <h6>Fin de prestamo</h6>
                                    <p>Gallardo solicitó a los dirigentes finalizar el préstamo de Enzo Fernandez con
                                        Defensa y Justicia, retornando este al club</p>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>2020</Accordion.Header>
                        <Accordion.Body>
                            No hubo incorporaciones en el 2020
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>2019</Accordion.Header>
                        <Accordion.Body>
                            <div className="jugadores">
                                <div className="jugador2019">
                                    <img src="images/traspasos/2019/diaz.png" alt="diaz" />
                                    <h5>Diaz</h5>
                                    <h6>Compra</h6>
                                    <p>Paulo Diaz llegó al club a cambio de 3.7M de dolares por el 70% del pase, proveniente
                                        del Al Ahlil de Emiratos Arabes</p>
                                </div>
                                <div className="jugador2019">
                                    <img src="images/traspasos/2019/rojas.png" alt="rojas" />
                                    <h5>Rojas</h5>
                                    <h6>Compra</h6>
                                    <p>Robert Rojas llegó de Guaraní a cambio de 1.25M de dolares por el 50% del pase</p>
                                </div>
                                <div className="jugador2019">
                                    <img src="images/traspasos/2019/suarez.png" alt="suarez" />
                                    <h5>Suarez</h5>
                                    <h6>Compra</h6>
                                    <p>Matías Suarez llega a River a cambio de 2.85M de dolares. Proveniente de Belgrano de
                                        Córdoba</p>
                                </div>
                                <div className="jugador2019">
                                    <img src="images/traspasos/2019/carrascal.png" alt="carrascal" />
                                    <h5>Carrascal</h5>
                                    <h6>Prestamo</h6>
                                    <p>Jorge Carrascal llega al club a cambio de un prestamo por 500m euros, con una opción
                                        de compra por 2.5M de euros. Llega proveniente de Karpaty de Ucrania</p>
                                </div>
                                <div className="jugador2019">
                                    <img src="images/traspasos/2019/angileri.png" alt="angileri" />
                                    <h5>Angileri</h5>
                                    <h6>Prestamo</h6>
                                    <p>Angileri llega al club proveniente de Godoy Cruz por medio de un prestamo sin cargo,
                                        con una opcion de compra obligatoria de 2.23M de dolares</p>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>2018</Accordion.Header>
                        <Accordion.Body>
                            <div className="jugadores">
                                <div className="jugador2018">
                                    <img src="images/traspasos/2018/armani.png" alt="armani" />
                                    <h5>Armani</h5>
                                    <h6>Compra</h6>
                                    <p>El arquero proveniente de Atletico Nacional llega al club a cambio de la clausula de
                                        salida de 4M de dolares</p>
                                </div>
                                <div className="jugador2018">
                                    <img src="images/traspasos/2018/pratto.png" alt="pratto" />
                                    <h5>Pratto</h5>
                                    <h6>Compra</h6>
                                    <p>Lucas Pratto se convirtió en la incorporación más cara de la historia del club. Llegó
                                        a cambio de 11.5M de euros, proveniente de San Pablo. Además, al River ganar la
                                        libertadores, se debió pagar un bonus de 1M de euros</p>
                                </div>
                                <div className="jugador2018">
                                    <img src="images/traspasos/2018/quintero2018.png" alt="quintero2018" />
                                    <h5>J.F Quintero</h5>
                                    <h6>Prestamo</h6>
                                    <p>Juanfer llegó por primera vez al club a cambio de un prestamo de 300m euros más una
                                        cláusula de 3.5M de euros por el 50% del pase</p>
                                </div>
                                <div className="jugador2018">
                                    <img src="images/traspasos/2018/zuculini.png" alt="zuculini" />
                                    <h5>Zuculini</h5>
                                    <h6>Compra</h6>
                                    <p>Zuculini llegó al club a cambio de 3.25M de euros por el 50% del pase, proveniente
                                        directamente del Hellas Verona, dueño de un 40% del pase que compró River, y el otro
                                        10% pertenecía a Manchester City</p>
                                </div>
                            </div>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
            </main >
        </div >
    );
}

export default TraspasosPage;


//                     <Accordion.Item eventKey="1">
//                         <Accordion.Header>Accordion Item #2</Accordion.Header>
//                         <Accordion.Body>
//                             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//                             tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
//                             veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
//                             commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
//                             velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
//                             cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
//                             est laborum.
//                         </Accordion.Body>
//                     </Accordion.Item>


{/* <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                2022
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                            data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <div className="jugadores">
                                    <div className="jugador2022">
                                        <img src="images/traspasos/2022/quintero.png" alt="Quintero"/>
                                            <h5>J.F Quintero</h5>
                                            <h6>Libre</h6>
                                            <p>Juanfer Quintero llega en condición de jugador libre, con el pase en su poder</p>
                                    </div>
                                    <div className="jugador2022">
                                        <img src="images/traspasos/2022/barco.png" alt="Barco"/>
                                            <h5>E. Barco</h5>
                                            <h6>Prestamo</h6>
                                            <p>Esequiel Barco llega a River con un préstamo por 2 temporadas y una opcion de compra
                                                de
                                                7M de dolares por el 50% del pase. Esta puede ser ejecutada tanto en diciembre de
                                                2022
                                                como en 2023</p>
                                    </div>
                                    <div className="jugador2022">
                                        <img src="images/traspasos/2022/gomez.png" alt="Gomez"/>
                                            <h5>E. Gomez</h5>
                                            <h6>Compra</h6>
                                            <p>Elias Gomez llega a River a cambio de 1.5M de dolares por el 70% del pase. Firma
                                                hasta
                                                diciembre de 2025</p>
                                    </div>
                                    <div className="jugador2022">
                                        <img src="images/traspasos/2022/gonzalez pirez.png" alt="Gonzalez Pirez"/>
                                            <h5>G. Pirez</h5>
                                            <h6>Préstamo</h6>
                                            <p>Gonzalez Pirez retorna al club a cambio con un préstamo por 1.8M de dolares y con una
                                                opción de compra de 200m dolares</p>
                                    </div>
                                    <div className="jugador2022">
                                        <img src="images/traspasos/2022/herrera.png" alt="Herrera"/>
                                            <h5>A. Herrera</h5>
                                            <h6>Compra</h6>
                                            <p>Andrés Herrera llega al club a cambio de 2.5M de dolares netos para San Lorenzo, en
                                                un
                                                solo pago, a cambio del 70% del pase del jugador</p>
                                    </div>
                                    <div className="jugador2022">
                                        <img src="images/traspasos/2022/mammana.png" alt="Mammana"/>
                                            <h5>Mammana</h5>
                                            <h6>Libre</h6>
                                            <p>Emanuel Mammana llega en condición de jugador libre, luego de su desvinculación del
                                                Zenit
                                                de Rusia, firmando a préstamo hasta diciembre de 2022, con opción a extender por un
                                                año
                                                más</p>
                                    </div>
                                    <div className="jugador2022">
                                        <img src="images/traspasos/2022/pochetino.png" alt="Pochetino"/>
                                            <h5>Pochettino</h5>
                                            <h6>Prestamo</h6>
                                            <p>Tomas Pochettino llega al club mediante un prestamo sin cargo, proveniente del Austin
                                                FC
                                                de la MLS, con una opción de compra de 5.5M de dolares en junio y de 6M en diciembre
                                            </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                2021
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                            data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <div className="jugadores">
                                    <div className="jugador2021">
                                        <img src="images/traspasos/2021/maidana.png" alt="maidana"/>
                                            <h5>Maidana</h5>
                                            <h6>Libre</h6>
                                            <p>Maidana retorna al club en condición de libre luego de su paso por el futbol
                                                mexicano, en el Toluca</p>
                                    </div>
                                    <div className="jugador2021">
                                        <img src="images/traspasos/2021/palavecino.png" alt="palavecino"/>
                                            <h5>Palavecino</h5>
                                            <h6>Compra</h6>
                                            <p>Palavecino llega al club a cambio de 1.8M de dolares por el 35% del pase, más otros
                                                1.7M por otro 30% al cumplir 30 partidos</p>
                                    </div>
                                    <div className="jugador2021">
                                        <img src="images/traspasos/2021/martinez.png" alt="Martinez"/>
                                            <h5>Martinez</h5>
                                            <h6>Prestamo</h6>
                                            <p>Luego de que Gallardo no lo tenga en cuenta y lo venda a Defensa y Justicia, el
                                                defensor retorna al club en condición de prestamo sin opción</p>
                                    </div>
                                    <div className="jugador2021">
                                        <img src="images/traspasos/2021/vigo.png" alt="vigo"/>
                                            <h5>Vigo</h5>
                                            <h6>Compra</h6>
                                            <p>Vigo llega al club a cambio de 2M de dolares por el 50% del pase además de la cesión
                                                de Cristian Ferreira a Colón</p>
                                    </div>
                                    <div className="jugador2021">
                                        <img src="images/traspasos/2021/fontana.png" alt="fontana"/>
                                            <h5>Fontana</h5>
                                            <h6>Compra</h6>
                                            <p>Fontana llega al club a cambio de 1.75M de dolares por el 75% del pase proveniente de
                                                Banfield</p>
                                    </div>
                                    <div className="jugador2021">
                                        <img src="images/traspasos/2021/paradela.png" alt="paradela"/>
                                            <h5>Paradela</h5>
                                            <h6>Compra</h6>
                                            <p>Paradela llegó al club a cambio de 1.7M de dolares por el 80% del pase, proveniente
                                                de Gimnasia</p>
                                    </div>
                                    <div className="jugador2021">
                                        <img src="images/traspasos/2021/romero.png" alt="romero"/>
                                            <h5>Romero</h5>
                                            <h6>Compra</h6>
                                            <p>Romero llega a River en una operacion de entre 2.5 y 3M de dolares, proveniente de
                                                Defensa y Justicia</p>
                                    </div>
                                    <div className="jugador2021">
                                        <img src="images/traspasos/2021/fernandez.png" alt="fernandez"/>
                                            <h5>Fernandez</h5>
                                            <h6>Fin de prestamo</h6>
                                            <p>Gallardo solicitó a los dirigentes finalizar el préstamo de Enzo Fernandez con
                                                Defensa y Justicia, retornando este al club</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                2020
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                            data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>No hubo incorporaciones en el 2020</strong>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFour">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                2019
                            </button>
                        </h2>
                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
                            data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <div className="jugadores">
                                    <div className="jugador2019">
                                        <img src="images/traspasos/2019/diaz.png" alt="diaz"/>
                                            <h5>Diaz</h5>
                                            <h6>Compra</h6>
                                            <p>Paulo Diaz llegó al club a cambio de 3.7M de dolares por el 70% del pase, proveniente
                                                del Al Ahlil de Emiratos Arabes</p>
                                    </div>
                                    <div className="jugador2019">
                                        <img src="images/traspasos/2019/rojas.png" alt="rojas"/>
                                            <h5>Rojas</h5>
                                            <h6>Compra</h6>
                                            <p>Robert Rojas llegó de Guaraní a cambio de 1.25M de dolares por el 50% del pase</p>
                                    </div>
                                    <div className="jugador2019">
                                        <img src="images/traspasos/2019/suarez.png" alt="suarez"/>
                                            <h5>Suarez</h5>
                                            <h6>Compra</h6>
                                            <p>Matías Suarez llega a River a cambio de 2.85M de dolares. Proveniente de Belgrano de
                                                Córdoba</p>
                                    </div>
                                    <div className="jugador2019">
                                        <img src="images/traspasos/2019/carrascal.png" alt="carrascal"/>
                                            <h5>Carrascal</h5>
                                            <h6>Prestamo</h6>
                                            <p>Jorge Carrascal llega al club a cambio de un prestamo por 500m euros, con una opción
                                                de compra por 2.5M de euros. Llega proveniente de Karpaty de Ucrania</p>
                                    </div>
                                    <div className="jugador2019">
                                        <img src="images/traspasos/2019/angileri.png" alt="angileri"/>
                                            <h5>Angileri</h5>
                                            <h6>Prestamo</h6>
                                            <p>Angileri llega al club proveniente de Godoy Cruz por medio de un prestamo sin cargo,
                                                con una opcion de compra obligatoria de 2.23M de dolares</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFive">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                2018
                            </button>
                        </h2>
                        <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive"
                            data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <div className="jugadores">
                                    <div className="jugador2018">
                                        <img src="images/traspasos/2018/armani.png" alt="armani"/>
                                            <h5>Armani</h5>
                                            <h6>Compra</h6>
                                            <p>El arquero proveniente de Atletico Nacional llega al club a cambio de la clausula de
                                                salida de 4M de dolares</p>
                                    </div>
                                    <div className="jugador2018">
                                        <img src="images/traspasos/2018/pratto.png" alt="pratto"/>
                                            <h5>Pratto</h5>
                                            <h6>Compra</h6>
                                            <p>Lucas Pratto se convirtió en la incorporación más cara de la historia del club. Llegó
                                                a cambio de 11.5M de euros, proveniente de San Pablo. Además, al River ganar la
                                                libertadores, se debió pagar un bonus de 1M de euros</p>
                                    </div>
                                    <div className="jugador2018">
                                        <img src="images/traspasos/2018/quintero2018.png" alt="quintero2018"/>
                                            <h5>J.F Quintero</h5>
                                            <h6>Prestamo</h6>
                                            <p>Juanfer llegó por primera vez al club a cambio de un prestamo de 300m euros más una
                                                cláusula de 3.5M de euros por el 50% del pase</p>
                                    </div>
                                    <div className="jugador2018">
                                        <img src="images/traspasos/2018/zuculini.png" alt="zuculini"/>
                                            <h5>Zuculini</h5>
                                            <h6>Compra</h6>
                                            <p>Zuculini llegó al club a cambio de 3.25M de euros por el 50% del pase, proveniente
                                                directamente del Hellas Verona, dueño de un 40% del pase que compró River, y el otro
                                                10% pertenecía a Manchester City</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}