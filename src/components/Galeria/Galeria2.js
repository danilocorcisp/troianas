import React from "react";
import "./Galeria.css";

export default function Galeria2() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col foto2">
                    <img
                        src={"./img/foto_div_01.png"}
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
