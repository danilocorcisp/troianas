import React from "react";
import Email from "../Email/Email.js";
import "./Modal.css";
import Modal from "react-bootstrap/Modal";

export default class ModalReact extends React.Component {
    render() {
        return (
            <div>
                <Modal.Dialog>
                    <Modal.Header closeButton></Modal.Header>

                    <Modal.Body closeButton>
                        <p>
                            <Email />
                        </p>
                    </Modal.Body>
                </Modal.Dialog>
            </div>
        );
    }
}
