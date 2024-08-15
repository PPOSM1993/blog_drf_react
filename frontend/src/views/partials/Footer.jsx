import React from "react";

function Footer() {
    return (
        <footer>
            <div className="row bg-light py-5 mx-0 card card-header  flex-row align-items-center text-center text-md-start">
                <div className="col-md-5 mb-3 mb-md-0">
                    <div className="text-dark-hover text-dark">
                        2019 - 2024{" "}
                        <a href="" className="text-reset btn-link ms-2 me-2 text-dark" target="_blank">
                            Pedro Osorio - Software Developer
                        </a>
                        | All rights reserved
                    </div>
                </div>
                <div className="col-md-3 mb-3 mb-md-0">
                    <img src="/logo.png" style={{ width: "200px" }} alt="footer logo" />
                </div>
                <div className="col-md-4">
                    <ul className="nav text-primary-hover justify-content-center justify-content-md-end">
                        <li className="nav-item">
                            <a className="nav-link text-dark px-2 fs-5" href="https://facebook.com/desphixs">
                                <i className="fab fa-facebook-square" />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark px-2 fs-5" href="https://twitter.com/desphixs">
                                <i className="fab fa-twitter-square" />
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link text-dark px-2 fs-5" href="https://youtube.com/@desphixs">
                                <i className="fab fa-youtube-square" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;