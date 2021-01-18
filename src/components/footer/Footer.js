import React from "react";
import "./Footer.css";
import LanguageIcon from "@material-ui/icons/Language";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";

export default function Footer() {
    return (
        <div className="footer__troia">
            <footer className="footer mt-auto py-3">
                <div className="container troia">
                    <div class="d-flex flex-row justify-content-center">
                        <div class="p-2 svg">
                            <a
                                href="https://www.estudiocalo.com.br"
                                rel="noreferrer"
                                target="_blank"
                            >
                                <i className="icon-ok">
                                    <LanguageIcon />
                                </i>
                            </a>
                        </div>
                        <div class="p-2 svg">
                            <a
                                href="https://www.facebook.com/Est%C3%BAdio-CaL%C3%B3-237199230173687/"
                                rel="noreferrer"
                                target="_blank"
                            >
                                <i className="icon-ok">
                                    <FacebookIcon />
                                </i>
                            </a>
                        </div>
                        <div class="p-2 svg">
                            <a
                                href="https://www.instagram.com/estudiocalo/"
                                rel="noreferrer"
                                target="_blank"
                            >
                                <i className="icon-ok">
                                    <InstagramIcon />
                                </i>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
