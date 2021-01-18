import React from "react";
import "./Espetaculo.css";
import Card from "react-bootstrap/Card";

export default function Espetaculo() {
    return (
        <div className="container-fluid">
            <div className="row" id="espetaculo">
                <div className="col foto1">
                    <img
                        src={"../img/fotos_div02.png"}
                        className="rounded float-start img-fluid"
                        alt="..."
                    ></img>
                    {/* <img
                        style={{
                            height: "251px",
                            width: "455px",
                            padding: "20px",
                        }}
                        src={"../img/pngs_miolo/img02.png"}
                        className="rounded float-end img-fluid"
                        alt="..."
                    ></img>
                    <img
                        style={{
                            height: "251px",
                            width: "455px",
                            padding: "20px",
                        }}
                        src={"../img/pngs_miolo/img01.png"}
                        className="rounded float-end img-fluid"
                        alt="..."
                    ></img>

                    <img
                        style={{
                            height: "251px",
                            width: "455px",
                            padding: "20px",
                        }}
                        src={"../img/pngs_miolo/Layer 8@2x.png"}
                        className="rounded float-end img-fluid"
                        alt="..."
                    ></img> */}
                </div>
                <div className="row">
                    <div className="col title flex-column">
                        <h1>ESPETÁCULO</h1>
                    </div>
                </div>
                <div
                    className="row chamada justify-content-center"
                    id="tablado"
                >
                    <div className="col txt flex-column">
                        <p>
                            O espetáculo acontecerá na última semana de novembro
                            de 2021 - data e local a serem decididos. Por conta
                            da Covid-19, a apresentação poderá ser em espaço
                            externo, ao ar livre.
                        </p>
                        <p>
                            A taxa de espetáculo está inclusa no valor (teatro e
                            músicos). O valor do figurino não está incluído e
                            deverá ser cobrado à parte.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col title flex-column">
                        <h1>TABLADO</h1>
                    </div>
                </div>
                <div className="row chamada justify-content-center">
                    <div className="col txt flex-column">
                        <p>
                            Para quem não quiser parar durante o mês de julho,
                            ofereceremos um processo diferente e complementar ao
                            do espetáculo.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col data flex-column">
                        <h1>Datas</h1>
                    </div>
                </div>
                <div className="col col__datas">
                    <Card className="datas">
                        <Card.Body>
                            <Card.Text>De 12 a 31 de julho de 2021</Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <div className="row chamada justify-content-center">
                    <div className="col txt flex-column">
                        <p>
                            Às segundas e quartas-feiras das 19h30 às 21h - para
                            todos os níveis que tenham ao menos de 2 anos de
                            vivência em flamenco
                            <br /> ou <br />
                            Às terças e quintas-feiras das 12 às 13h30 - para
                            todos os níveis que tenham ao menos de 2 anos de
                            vivência em flamenco
                        </p>
                    </div>
                </div>
                <div
                    className="row chamada justify-content-center"
                    id="apresentacao"
                >
                    <div className="col txt flex-column">
                        <img
                            style={{
                                height: "54px",
                                width: "43px",
                            }}
                            src={"../img/pngs_miolo/Layer 16@2x.png"}
                            className="rounded float-center img-fluid"
                            alt="..."
                        ></img>
                    </div>
                </div>
                <div className="row">
                    <div className="col title flex-column">
                        <h1>APRESENTAÇÃO</h1>
                    </div>
                </div>
                <div className="row chamada justify-content-center">
                    <div className="col txt flex-column">
                        <p>
                            A apresentação do processo de tablado ocorrerá no
                            próprio estúdio no
                            <b className="negrito">dia 31 de julho de 2021.</b>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
