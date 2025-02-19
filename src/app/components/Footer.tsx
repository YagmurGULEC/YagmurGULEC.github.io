import React from "react";

export default function Footer() {
    return (
        <footer className="bg-dark py-4 mt-auto">
            <div className="container px-5">
                <div className="row align-items-center justify-content-between flex-column flex-sm-row">

                    <div className="d-flex justify-content-center align-items-center gap-3 flex-wrap">
                        {/* Email */}
                        <a className="fs-2 link-light d-flex align-items-center" href="mailto:yagmurgulec89@gmail.com">
                            <i className="bi bi-envelope me-1"></i>

                        </a>

                        {/* GitHub */}
                        <a className="fs-2 link-light" href="https://github.com/YagmurGULEC" target="_blank">
                            <i className="bi bi-github"></i>
                        </a>

                        {/* LinkedIn */}
                        <a className="fs-2 link-light" href="https://linkedin.com/in/yagmur-gulec/" target="_blank">
                            <i className="bi bi-linkedin"></i>
                        </a>


                        <span className="fw-bold text-light fs-6">yagmurgulec89@gmail.com</span>
                    </div>

                </div>

            </div>
        </footer >
    );
}