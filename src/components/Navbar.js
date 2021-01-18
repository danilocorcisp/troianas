import React from "react";
import "./Navbar.css";
import { Navbar, Nav } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ModalReact from "./Modal/Modal";

const NavbarReact = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const showModal = () => {
        setIsOpen(true);
    };

    const hideModal = () => {
        setIsOpen(false);
    };

    var linkClicked = document.getElementsByClassName("nav-link");
    var numClass = linkClicked.length;

    for (var i = 0; i < numClass; i++) {
        linkClicked[i].addEventListener(
            "click",
            function () {
                var onTheMoment = document.getElementsByClassName("active");
                onTheMoment[0].className = onTheMoment[0].className.replace(
                    " active",
                    ""
                );
                this.className += " active";
            },
            false
        );
    }

    return (
        <>
            <div className="foto3">
                <img
                    src={"../img/pngs_header_elementos/flor_fixa_header@2x.png"}
                    className="foto3"
                    alt="..."
                ></img>
            </div>
            <Navbar fixed="top" collapseOnSelect expand="lg">
                {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">INÍCIO</Nav.Link>
                        <Nav.Link href="#sobre">SOBRE</Nav.Link>
                        <Nav.Link href="#datas">DATAS</Nav.Link>
                        <Nav.Link href="#espetaculo">ESPETÁCULO</Nav.Link>
                        <Nav.Link href="#tablado">TABLADO</Nav.Link>
                        <Nav.Link href="#apresentacao">APRESENTAÇÃO</Nav.Link>
                        <Nav.Link href="#planos">PLANOS</Nav.Link>
                        <Nav.Link href="#aulas">AULAS REGULARES</Nav.Link>
                    </Nav>
                    <Nav className="modal__email">
                        <Button className="faca" onClick={showModal}>
                            FAÇA PARTE
                        </Button>
                        <Modal show={isOpen} onHide={hideModal}>
                            <ModalReact />
                        </Modal>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default NavbarReact;
