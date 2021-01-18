import React from "react";
import "./Galeria.css";

export default function Galeria() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col foto2" id="planos">
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
                        src={"../img/pngs_miolo/img04.png"}
                        className="rounded float-start img-fluid"
                        alt="..."
                    ></img> */}
                </div>
            </div>
        </div>
    );
}
