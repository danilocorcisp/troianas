import React, { Component } from "react";
import "./Carrousel.css";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Parte from "../Parte/Parte.js";

export class BootstrapCarousel extends Component {
    render() {
        return (
            <div className="carrossel__main " id="sobre">
                <div className="container-fluid carrossel__container carousel-fade">
                    <Carousel>
                        <Carousel.Item
                            style={{ height: "500px", width: "100%" }}
                        >
                            <h2 className="car__title">
                                Um processo totalmente diferente de criação
                            </h2>
                            <p className="descritivo">
                                As escolas tradicionais de flamenco dão suas
                                aulas regulares enquanto
                                <br /> ocupam um tempo se preparando na
                                construção de um espetáculo de fim de ano.
                                <br /> Mas não somos tradicionais, não é mesmo?
                                <br />
                                Por isso criamos um processo criativo em que a
                                construção do espetáculo acontecerá
                                <br /> durante todo o ano, como uma companhia
                                profissional.
                                <br /> Será um jeito completamente diferente de
                                aprender e viver o flamenco,
                                <br /> tendo aulas especiais, ensaiando durante
                                7 meses para um belíssimo
                                <br /> espetáculo final da obra de Jean-Paul
                                Sartre.
                            </p>
                            <h2 className="car__title">
                                Quem pode participar?
                            </h2>
                            <p className="descritivo">
                                Qualquer pessoa que já tenha pelo menos 2 anos
                                <br />
                                de experiência em flamenco pode fazer parte da
                                imersão.
                                <br /> Temos o limite de 32 alunos para esse
                                ciclo.
                            </p>
                        </Carousel.Item>

                        <Carousel.Item
                            style={{ height: "500px", width: "100%" }}
                        >
                            <h2 className="car__title">
                                Quando começa o ciclo 2021?
                            </h2>
                            <p className="descritivo">
                                O início do projeto-espetáculo em flamenco é dia
                                22 de março de 2021.
                                <br /> Nesta primeira reunião, entregaremos o
                                kit de boas vindas e os professores responsáveis
                                <br />
                                explicarão como as aulas vão funcionar e tirarão
                                as dúvidas que surgirem.
                                <br />
                                Neste primeiro encontro, também será feita uma
                                leitura
                                <br /> dramática da peça As Troianas, começando
                                o processo.
                            </p>
                            <h2 className="car__title">
                                Qual é o calendário para construção do
                                espetáculo?
                            </h2>
                            <p className="descritivo">
                                O projeto-espetáculo As Troianas acontecerá em
                                duas partes,
                                <br /> com uma pausa de 30 dias para as férias
                                em julho.
                            </p>
                        </Carousel.Item>

                        <Carousel.Item
                            style={{ height: "500px", width: "100%" }}
                        >
                            <h2 className="car__title">
                                Quantas aulas os alunos que participarem do
                                projeto terão?
                            </h2>
                            <p className="descritivo">
                                Todas as turmas que participarem terão entre
                                1h30 e 1h45
                                <br /> de aulas 2x por semana e mais aulas
                                extras de Teatro e Música e Ritmos,
                                <br /> além dos ensaios. Veja como serão
                                montadas as turmas:
                                <br />
                                <table className="calendar">
                                    <tbody>
                                        <tr>
                                            <td className="align-baseline aulas">
                                                <Button variant="light">
                                                    Turma 1
                                                </Button>
                                            </td>
                                            <td className="align-baseline ">
                                                <b className="turma">
                                                    Básico /Intermediário
                                                </b>
                                                (1h30/2x por semana)
                                                <br />
                                                Segundas e quartas, das 10h às
                                                11h30 com o professor Rafael
                                                Marum
                                                <br /> ou Terças e quintas, das
                                                19h30 às 21h com a professora
                                                Isabela Pabst
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="align-baseline aulas">
                                                <Button variant="light">
                                                    Turma 2
                                                </Button>
                                            </td>
                                            <td className="align-baseline ">
                                                <b className="turma">
                                                    Intermediário/ Avançado
                                                </b>
                                                (1h45/2x por semana)
                                                <br />
                                                Segundas e quartas, das 19h15 às
                                                21h com a professora Carolina
                                                Zanforlin
                                            </td>
                                            <br />
                                        </tr>
                                        <tr>
                                            <td className="align-baseline aulas">
                                                <Button variant="light align-self-top">
                                                    Turma 3
                                                </Button>
                                            </td>
                                            <td className="align-baseline ">
                                                <b className="turma">
                                                    Complementos
                                                </b>
                                                (1h45/2x por semana)
                                                <br />
                                                Terças e quintas, das 10h às
                                                11h45 com a professora Carolina
                                                Zanforlin
                                                <br />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="align-baseline aulas">
                                                <Button variant="light">
                                                    Turma 4
                                                </Button>
                                            </td>
                                            <td className="align-baseline">
                                                <b className="turma">
                                                    Avançado/Profissionais
                                                </b>
                                                (2h/2x por semana)
                                                <br />
                                                Terças e sextas das 12 às 14h
                                                com a professora Carolina
                                                Zanforlin
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </p>
                        </Carousel.Item>
                        <Carousel.Item
                            style={{ height: "500px", width: "100%" }}
                        >
                            <h2 className="car__title">Aulas extras</h2>
                            <p className="descritivo">
                                Além das aulas do espetáculo, quem participar do
                                projeto
                                <br /> terá aulas de Música e Ritmos e também de
                                Teatro.
                                <br /> Elas vão acontecer em sábados
                                pré-determinados no calendário. Serão:
                                <br />
                                <br />
                                <table className="calendar">
                                    <thead>
                                        <tr>
                                            <th>
                                                Música e Ritmos (3h em 4
                                                sábados)
                                            </th>
                                            <th>Teatro (3h em 6 sábados)</th>
                                        </tr>
                                    </thead>
                                    <tr>
                                        <td>10 de abril - 11 às 14h</td>
                                        <td>1 de maio - 11 às 14h</td>
                                    </tr>
                                    <tr>
                                        <td>19 de junho - 11 às 14h</td>
                                        <td>12 de junho - 11 às 14h</td>
                                    </tr>
                                    <tr>
                                        <td>18 de setembro - 11 às 14h</td>
                                        <td>11 de setembro - 11 às 14h</td>
                                    </tr>
                                    <tr>
                                        <td>30 de outubro - 11 às 14h</td>
                                        <td>02 de outubro - 11 às 14h</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>16 de outubro - 11 às 14h</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>06 de novembro - 11 às 14h</td>
                                    </tr>
                                </table>
                                <br />
                                <b className="turma">Extras:</b> Haverá aulas
                                com guitarrista a cada 15 dias. E mais 4 aulas
                                com guitarrista e cantor.
                                <br />
                                <b className="turma">Ensaios:</b> serão 4
                                ensaios com todo o elenco
                            </p>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className="container-fluid mobile__carousel">
                    <div className="row justify-content-center flex-column">
                        <div className="col">
                            <h2 className="car__title">
                                Um processo totalmente diferente de criação
                            </h2>
                            <p className="descritivo">
                                As escolas tradicionais de flamenco dão suas
                                aulas regulares enquanto ocupam um tempo se
                                preparando na construção de um espetáculo de fim
                                de ano. Mas não somos tradicionais, não é mesmo?
                                <br />
                                Por isso criamos um processo criativo em que a
                                construção do espetáculo acontecerá durante todo
                                o ano, como uma companhia profissional. Será um
                                jeito completamente diferente de aprender e
                                viver o flamenco, tendo aulas especiais,
                                ensaiando durante 7 meses para um belíssimo
                                espetáculo final da obra de Jean-Paul Sartre.
                            </p>
                        </div>
                        <div className="col">
                            <h2 className="car__title">
                                Quem pode participar?
                            </h2>
                            <p className="descritivo">
                                Qualquer pessoa que já tenha pelo menos 2 anos
                                de experiência em flamenco pode fazer parte da
                                imersão. Temos o limite de 32 alunos para esse
                                ciclo.
                            </p>
                            <p></p>
                        </div>

                        <div className="col">
                            <img
                                style={{
                                    width: "150px",
                                }}
                                src={"./img/arm.png"}
                                className="rounded img-thumbnail mx-auto d-block"
                                alt="..."
                            ></img>
                            <p></p>
                        </div>

                        <div className="col">
                            <h2 className="car__title">
                                Quando começa o ciclo 2021?
                            </h2>
                            <p className="descritivo">
                                O início do projeto-espetáculo em flamenco é dia
                                22 de março de 2021. Nesta primeira reunião,
                                entregaremos o kit de boas vindas e os
                                professores responsáveis explicarão como as
                                aulas vão funcionar e tirarão as dúvidas que
                                surgirem. Neste primeiro encontro, também será
                                feita uma leitura dramática da peça As Troianas,
                                começando o processo.
                            </p>
                            <h2 className="car__title">
                                Qual é o calendário para construção do
                                espetáculo?
                            </h2>
                            <p className="descritivo parte__mobile">
                                <Parte />
                            </p>
                        </div>
                        <div className="col">
                            <h2 className="car__title">
                                Quantas aulas os alunos que participarem do
                                projeto terão?
                            </h2>
                            <p className="descritivo">
                                Todas as turmas que participarem terão entre
                                1h30 e 1h45
                                <br /> de aulas 2x por semana e mais aulas
                                extras de Teatro e Música e Ritmos,
                                <br /> além dos ensaios. Veja como serão
                                montadas as turmas:
                                <br />
                                <br />
                            </p>
                            <div className="col">
                                <h1 className="turma__mobile">
                                    <span>Turma 1</span>
                                </h1>
                                <p className="turma_descricao">
                                    <b className="turma">
                                        Básico /Intermediário
                                        <br />
                                    </b>
                                    (1h30/2x por semana)
                                    <br />
                                    Segundas e quartas, das 10h às 11h30 com o
                                    professor Rafael Marum
                                    <br /> ou Terças e quintas, das 19h30 às 21h
                                    com a professora Isabela Pabst
                                </p>
                            </div>
                            <div className="col">
                                <h1 className="turma__mobile">
                                    <span>Turma 2</span>
                                </h1>
                                <p className="turma_descricao">
                                    <b className="turma">
                                        Intermediário/ Avançado
                                        <br />
                                    </b>
                                    (1h45/2x por semana)
                                    <br />
                                    Segundas e quartas, das 19h15 às 21h com a
                                    professora Carolina Zanforlin
                                </p>
                            </div>
                            <div className="col">
                                <h1 className="turma__mobile">
                                    <span>Turma 3</span>
                                </h1>
                                <p className="turma_descricao">
                                    <b className="turma">Complementos </b>
                                    <br />
                                    (1h45/2x por semana)
                                    <br />
                                    Terças e quintas, das 10h às 11h45 com a
                                    professora Carolina Zanforlin
                                </p>
                            </div>
                            <div className="col">
                                <h1 className="turma__mobile">
                                    <span>Turma 4</span>
                                </h1>
                                <p className="turma_descricao">
                                    <b className="turma">
                                        Avançado/Profissionais
                                        <br />
                                    </b>
                                    (2h/2x por semana)
                                    <br />
                                    Terças e sextas das 12 às 14h com a
                                    professora Carolina Zanforlin
                                </p>
                            </div>
                        </div>

                        <div className="col">
                            <img
                                style={{
                                    width: "150px",
                                }}
                                src={"./img/shoes.png"}
                                className="rounded img-thumbnail mx-auto d-block"
                                alt="..."
                            ></img>
                            <p></p>
                        </div>
                        <div className="col">
                            <h2 className="car__title">Aulas extras</h2>
                            <p className="descritivo">
                                Além das aulas do espetáculo, quem participar do
                                projeto
                                <br /> terá aulas de Música e Ritmos e também de
                                Teatro.
                                <br /> Elas vão acontecer em sábados
                                pré-determinados no calendário. Serão:
                                <br />
                                <br />
                                <div className="col">
                                    <h1 className="title__extras">
                                        Música e Ritmos
                                        <br />
                                        <span>(3h em 4 sábados)</span>
                                    </h1>

                                    <p className="horarios ">
                                        10 de abril - 11 às 14h
                                        <br />
                                        19 de junho - 11 às 14h
                                        <br /> 18 de setembro - 11 às 14h
                                        <br /> 30 de outubro - 11 às 14h
                                    </p>
                                </div>
                                <div className="col">
                                    <h1 className="title__extras">
                                        Teatro
                                        <br />
                                        <span>(3h em 6 sábados)</span>
                                    </h1>
                                    <p className="horarios">
                                        1 de maio - 11 às 14h
                                        <br />
                                        12 de junho - 11 às 14h
                                        <br />
                                        11 de setembro - 11 às 14h
                                        <br />
                                        02 de outubro - 11 às 14h
                                        <br />
                                        16 de outubro - 11 às 14h
                                        <br />
                                        06 de novembro - 11 às 14h
                                        <br />
                                    </p>
                                </div>
                                <br />
                                <b className="turma">Extras:</b> Haverá aulas
                                com guitarrista a cada 15 dias. E mais 4 aulas
                                com guitarrista e cantor.
                                <br />
                                <b className="turma">Ensaios:</b> serão 4
                                ensaios com todo o elenco
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BootstrapCarousel;
