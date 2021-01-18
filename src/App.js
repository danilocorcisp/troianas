import React from "react";
import "./App.css";
import NavbarReact from "./components/Navbar";
import Footer from "./components/footer/Footer";
import BootstrapCarousel from "./components/Carrousel/Carrousel";
import Hero from "./components/Hero/Hero";
import Parte from "./components/Parte/Parte";
import Espetaculo from "./components/Espetaculo/Espetaculo";
import Galeria from "./components/Galeria/Galeria";
import Opcoes from "./components/Opcoes/Opcoes";
import Galeria2 from "./components/Galeria/Galeria2";

function App() {
    return (
        <div className="App">
            <NavbarReact />
            <div className="container">
                <div className="hero" id="inicio">
                    <Hero />
                </div>

                <div>
                    <BootstrapCarousel />
                </div>

                <div className="tabela" id="tabela">
                    <Parte />
                </div>
                <hr className="linha" id="sobre" />
                <div className="espetaculo">
                    <Galeria2 />
                    <Espetaculo />
                </div>
                <div className="galeria">
                    <Galeria />
                </div>
                <div className="opcao" id="opcao">
                    <Opcoes />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default App;
