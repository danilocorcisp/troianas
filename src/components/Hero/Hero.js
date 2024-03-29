import React, { Component } from "react";
import "./Hero.css";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Media from "react-bootstrap/Media";

export class Hero extends Component {
    render() {
        return (
            <div>
                <div class="jumbotron jumbotron-fluid desktop__hero">
                    <div className="container-fluid">
                        <h1 class="display-4 troianas">Troianas</h1>
                        {/* <p class="lead">
                            This is a modified jumbotron that occupies the
                            entire horizontal space of its parent.
                        </p> */}
                        <img
                            src={"./img/header_hero.png"}
                            className="rounded img-fluid"
                            alt="..."
                        ></img>
                    </div>
                </div>

                <div className="container-fluid mobile__hero">
                    <h1 class="display-4 troianas">Troianas</h1>
                    {/* <p class="lead">
                            This is a modified jumbotron that occupies the
                            entire horizontal space of its parent.
                        </p> */}
                    <img
                        src={"./img/mobile_header.png"}
                        className="rounded img-fluid iphone"
                        alt="..."
                    ></img>
                </div>
            </div>
        );
    }
}

export default Hero;
