import React from "react";

export const Hero = () => {

    return (



        <div className="p-5 text-start bg-image rounded-3" style={{
            background: "url('https://www.bbva.com/wp-content/uploads/2023/07/alga-color-marron-sargazo-apertura.jpg') no-repeat",
            backgroundSize: "cover",
            height: "75vh"
        }}>
            <div className="mask h-100" >
                <div className="d-flex flex-column justify-content-center align-items-start h-100 w-100">
                    <div className="text-white">
                        <h1 className="mb-3 fs-1">BIOBUILD</h1>
                        <h4 className="mb-3">Construyendo mejor, construyendo verde.</h4>
                        <a data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-light btn-lg" href="#!" role="button">Conócenos</a>
                    </div>
                </div>
            </div>
        </div>



    )
}

