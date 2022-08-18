import React from 'react'
import Redes from '../Redes';
import Config from '../../public/config.json'

const Footer = () => {
    return (
        <footer className="text-center text-lg-start bg-light text-muted">
            <section className="d-flex justify-content-center p-2 border-bottom">
                <Redes style={{ fontSize: "30px" }} />
            </section>

            <section className="">
                <div className="container text-center text-md-start mt-5">
                    <div className="row mt-3">
                        <div className="col-md-6 mx-auto mb-4 text-center">
                            <div className="mx-auto" style={{ maxWidth: "260px" }}>
                                <h6 className="text-uppercase fw-bold mb-4">
                                    <i className="fas fa-gem me-3"></i>{Config.name}
                                </h6>
                                <p>{Config.descripcion}</p>
                            </div>
                        </div>

                        <div className="col-md-6 mx-auto mb-md-0 mb-4 text-center">
                            <h6 className="text-uppercase fw-bold mb-4">Contacto</h6>
                            <div>
                                <p className='m-1'><i className="fas fa-home me-3"></i> {Config.address}</p>
                                <p className='m-1'><i className="fas fa-envelope me-3"></i>{Config.mail}</p>
                                {Config.phone.map((number, key) => (<p key={key} className='m-1'><i className="fas fa-phone me-3"></i> {number}</p>))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
                © {new Date().getFullYear()} Copyright:
                <a className="text-reset fw-bold" href={Config.linkCopyright}>{Config.nameCopyright}</a>
            </div>
        </footer>
    )
}

export default Footer