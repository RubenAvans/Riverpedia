import React from "react";

const PartidosPage = (props) => {
    return (
        <div className="container">
            <main className="holder">

                <div className="partidos">
                    <h2>Proximos Partidos</h2>
                    <table className="table table-striped table-hover table-borderless">
                        <thead>
                            <tr>
                                <th scope="col">Competición</th>
                                <th scope="col">Instancia</th>
                                <th scope="col">Rival</th>
                                <th scope="col">Fecha</th>
                                <th scope="col">Estadio</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row"> <img src="images/partidos/lpf.png" alt="liga profesional de futbol" />Copa de la
                                    liga</th>
                                <td>Fecha 3</td>
                                <td> <img src="images/partidos/newells.png" alt="escudo newells" /></td>
                                <td>20/02/2022</td>
                                <td>Marcelo Bielsa</td>
                            </tr>
                            <tr>
                                <th scope="row"> <img src="images/partidos/lpf.png" alt="liga profesional de futbol" />Copa de la
                                    liga</th>
                                <td>Fecha 4</td>
                                <td> <img src="images/partidos/racing.png" alt="racing" /></td>
                                <td>27/02/2022</td>
                                <td>Monumental</td>
                            </tr>
                            <tr>
                                <th scope="row"><img src="images/partidos/lpf.png" alt="liga profesional de futbol" />Copa de la liga
                                </th>
                                <td>Fecha 5</td>
                                <td><img src="images/partidos/sanlorenzo.png" alt="san lorenzzo" /></td>
                                <td>05/03/2022</td>
                                <td>Nuevo Gasómetro</td>
                            </tr>
                            <tr>
                                <th scope="row"><img src="images/partidos/lpf.png" alt="liga profesional de futbol" />Copa de la liga
                                </th>
                                <td>Fecha 6</td>
                                <td><img src="images/partidos/gelp.png" alt="gelp" /></td>
                                <td>13/03/2022</td>
                                <td>Monumental</td>
                            </tr>
                            <tr>
                                <th scope="row"><img src="images/partidos/lpf.png" alt="liga profesional de futbol" />Copa de la liga
                                </th>
                                <td>Fecha 7</td>
                                <td><img src="images/partidos/boca.png" alt="boca" /></td>
                                <td>20/03/2022</td>
                                <td>Monumental</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="posiciones">
                    <h2>Tabla de posiciones</h2>
                    <table className="table table-striped table-hover table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">Posición</th>
                                <th scope="col">Equipo</th>
                                <th scope="col">PJ</th>
                                <th scope="col">DG</th>
                                <th scope="col">PTS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="table-success">
                                <th>1</th>
                                <td><img src="images/partidos/argjr.png" alt="arg jrs" /></td>
                                <td>2</td>
                                <td>+4</td>
                                <td>6</td>
                            </tr>
                            <tr className="table-success">
                                <th>2</th>
                                <td><img src="images/partidos/sarmiento.png" alt="sarmiento" /></td>
                                <td>2</td>
                                <td>+1</td>
                                <td>4</td>
                            </tr>
                            <tr className="table-success">
                                <th>3</th>
                                <td><img src="images/partidos/gelp.png" alt="gelp" /></td>
                                <td>2</td>
                                <td>+1</td>
                                <td >4</td>
                            </tr>
                            <tr className="table-success">
                                <th>4</th>
                                <td><img src="images/partidos/river.png" alt="river" /></td>
                                <td>2</td>
                                <td>+2</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <th>5</th>
                                <td><img src="images/partidos/platense.png" alt="platense" /></td>
                                <td>1</td>
                                <td>+1</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <th>6</th>
                                <td><img src="images/partidos/union.png" alt="union" /></td>
                                <td>1</td>
                                <td>+1</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <th>7</th>
                                <td><img src="images/partidos/newells.png" alt="newells" /></td>
                                <td>2</td>
                                <td>-2</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <th>8</th>
                                <td><img src="images/partidos/banfield.png" alt="banfield" /></td>
                                <td>2</td>
                                <td>0</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <th>9</th>
                                <td><img src="images/partidos/racing.png" alt="racing" /></td>
                                <td>2</td>
                                <td>0</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <th>10</th>
                                <td><img src="images/partidos/dyj.png" alt="defensa y justicia" /></td>
                                <td>2</td>
                                <td>-1</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <th>11</th>
                                <td><img src="images/partidos/sanlorenzo.png" alt="san lorenzo" /></td>
                                <td>2</td>
                                <td>-1</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <th>12</th>
                                <td><img src="images/partidos/atltucuman.png" alt="atl tucuman" /></td>
                                <td>1</td>
                                <td>-1</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <th>13</th>
                                <td><img src="images/partidos/talleres.png" alt="talleres" /></td>
                                <td>1</td>
                                <td>-1</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <th>14</th>
                                <td><img src="images/partidos/patronato.png" alt="patronato" /></td>
                                <td>2</td>
                                <td>-4</td>
                                <td>0</td>
                            </tr>
                        </tbody>

                    </table>
                </div>

            </main>
        </div>
    );
}

export default PartidosPage;