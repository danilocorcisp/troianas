import React from "react";
import axios from "axios";

class Email extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            message: "",
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        axios({
            method: "POST",
            url: "https://troianas.siteguy.dev/send",
            data: this.state,
        }).then((response) => {
            if (response.data.status === "success") {
                alert("Message Sent.");
                this.resetForm();
            } else if (response.data.status === "fail") {
                alert("Message failed to send.");
            }
        });
    }

    resetForm() {
        this.setState({ name: "", email: "", message: "" });
    }

    render() {
        return (
            <div className="Email">
                <form
                    id="contact-form"
                    onSubmit={this.handleSubmit.bind(this)}
                    method="POST"
                >
                    <div className="form-group">
                        <label htmlFor="name"></label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Nome"
                            value={this.state.name}
                            onChange={this.onNameChange.bind(this)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1"></label>
                        <input
                            type="email"
                            className="form-control"
                            id="mail"
                            placeholder="Email"
                            aria-describedby="emailHelp"
                            value={this.state.email}
                            onChange={this.onEmailChange.bind(this)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message"></label>
                        <textarea
                            className="form-control"
                            rows="1"
                            id="message"
                            placeholder="Telefone"
                            value={this.state.message}
                            onChange={this.onMessageChange.bind(this)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary btn__modal"
                    >
                        Enviar
                    </button>
                </form>
            </div>
        );
    }

    onNameChange(event) {
        this.setState({ name: event.target.value });
    }

    onEmailChange(event) {
        this.setState({ email: event.target.value });
    }

    onMessageChange(event) {
        this.setState({ message: event.target.value });
    }
}

export default Email;
