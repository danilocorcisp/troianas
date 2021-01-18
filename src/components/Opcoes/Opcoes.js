import React from "react";
import "./Opcoes.css";

export default function Opcoes() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col title flex-column">
                    <h1>OPÇÕES DE PLANOS</h1>
                </div>
            </div>
            <div className="row planos__center">
                <div className="col numeros align-self-top">
                    <span>1</span>
                </div>
                <div className="col align-self-center">
                    <h2 className="title__descricao">
                        Plano As Troianas 1 turma
                    </h2>
                    <p className="descricao">
                        Compreende todo o processo do espetáculo, em uma turma -
                        R$ 5750 em até 10x sem juros de R$ 575
                    </p>
                </div>
            </div>
            <div className="row planos__center">
                <div className="col numeros align-self-top">
                    <span>2</span>
                </div>
                <div className="col align-self-center">
                    <h2 className="title__descricao">
                        Plano As Troianas 2 turmas
                    </h2>
                    <p className="descricao">
                        Compreende todo o processo do espetáculo, em duas turmas
                        - R$ 7.830 em até 10x sem juros de R$ 783
                    </p>
                </div>
            </div>
            <div className="row planos__center">
                <div className="col numeros align-self-top">
                    <span>3</span>
                </div>
                <div className="col align-self-center">
                    <h2 className="title__descricao">
                        Plano As Troianas 1 turma + Aulas regulares
                    </h2>
                    <p className="descricao">
                        Processo do espetáculo (1 turma) + aulas regulares - R$
                        6.960 em até 10x sem juros de R$ 696
                    </p>
                </div>
            </div>
            <div className="row planos__center">
                <div className="col numeros align-self-top">
                    <span>4</span>
                </div>
                <div className="col align-self-center">
                    <h2 className="title__descricao">
                        Plano As Troianas 2 turmas + Aulas regulares
                    </h2>
                    <p className="descricao">
                        Processo do espetáculo (2 turmas) + aulas regulares - R$
                        8.760 em até 10x sem juros de R$ 876
                    </p>
                </div>
            </div>
            <div className="row planos__center">
                <div className="col numeros align-self-top">
                    <span>5</span>
                </div>
                <div className="col align-self-center">
                    <h2 className="title__descricao">
                        Plano As Troianas 1 turma + Tablado
                    </h2>
                    <p className="descricao">
                        Processo do espetáculo (1 turma) + processo especial de
                        tablado - R$ 5.887 em até 10x sem juros de R$ 876
                    </p>
                </div>
            </div>
            <div className="row planos__center">
                <div className="col numeros align-self-top">
                    <span>6</span>
                </div>
                <div className="col align-self-center">
                    <h2 className="title__descricao">
                        Plano As Troianas 2 turmas + Tablado
                    </h2>
                    <p className="descricao">
                        Processo do espetáculo (2 turmas) + processo especial de
                        tablado - R$ 7.965 em até 10x sem juros de R$ 796,50
                    </p>
                </div>
            </div>
            <div className="row planos__center" id="aulas">
                <div className="col title flex-column">
                    <h1>AULAS REGULARES</h1>
                </div>
            </div>
            <div className="row chamada justify-content-center">
                <div className="col txt flex-column">
                    <p>
                        <b className="negrito">Infantil</b>
                        <br />
                        Segundas e quartas, das 9 às 10h com o professor Rafael
                        Marum
                    </p>

                    <p>
                        <b className="negrito">Iniciante</b>
                        <br />
                        Segundas e quartas, das 18 às 19h ou sábados das 9 às
                        10h com o professor Rafael Marum
                    </p>

                    <p>
                        <b className="negrito">Intermediário 1</b>
                        <br />
                        Segundas e quartas, das 12 às 13h ou sábados das 10 às
                        11h com o professor Rafael Marum
                    </p>

                    <p>
                        <b className="negrito">Melhor Idade</b>
                        <br />
                        Segundas e quartas, das 15h30 às 16h30 com o professor
                        Rafael Marum
                    </p>

                    <p>
                        <b className="negrito">Castanholas (Intermediário 1)</b>
                        <br />
                        Terças e quintas, das 18 às 19h com a professora Isabela
                        Pabst
                    </p>
                </div>
            </div>
            {/* <div className="d-flex flex-row">
                <div className="p-2">
                    <div className="parte">CURSO DE VERÃO</div>
                </div>
                <div className="p-2">
                    <div className="parte2">De 18 a 30 de janeiro</div>
                </div>
                <div class="p-2 call_action">
                    <div className="retangulo">
                        <p className="text__faca">QUERO SABER MAIS</p>
                    </div>
                </div>
            </div> */}
        </div>
    );
}
