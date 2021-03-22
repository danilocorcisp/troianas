import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ModalReact from "../Modal/Modal.js";
import "./Parte.css";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

export default function Parte() {
    const [isOpen, setIsOpen] = React.useState(false);

    const showModal = () => {
        setIsOpen(true);
    };

    const hideModal = () => {
        setIsOpen(false);
    };

    return (
        <div id="datas">
            <CardGroup className="align-items-center cards__parte">
                <Card>
                    <Card.Body className="parte">
                        <Card.Title>Parte 1</Card.Title>
                        <Card.Text>De 22/03 a 26/06/2021</Card.Text>
                    </Card.Body>
                </Card>
                <Card className="parte2">
                    <Card.Body>
                        <Card.Title>Parte 2</Card.Title>
                        <Card.Text>De 02/08 a 26/11/2021</Card.Text>
                    </Card.Body>
                </Card>
                <Card className=" call_action h-100">
                    <Card.Body>
                        <Card.Text>
                            <Button
                                className="retangulo .btn__parte"
                                onClick={showModal}
                            >
                                FAÇA PARTE
                            </Button>
                            <Modal show={isOpen} onHide={hideModal}>
                                <ModalReact />
                            </Modal>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
            <div className="flex-row align-items-center p1">
                <Card className="p1">
                    <Card.Body className="p1">
                        <Card.Text>
                            <b className="faltas">Faltas:</b> Cada aluno poderá
                            ter apenas 1 falta por mês. O projeto não é como as
                            aulas regulares, é a construção conjunta de um
                            espetáculo artístico, que demanda comprometimento
                            por parte dos participantes. É uma oportunidade
                            única de construir um espetáculo do zero.
                            <br />
                            <br />
                            Caso as faltas sejam justificadas por médico ou
                            declaração formal, podem ser abonadas.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}
