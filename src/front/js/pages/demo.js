import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Demo = () => {
	

	return (
		<div className="container-fluid">
			 <div className="p-5 text-start bg-image rounded-3" style={{
            background: "url('https://madproyect.com/wp-content/uploads/2022/10/bio-construccion-mallorca-MadProyect.jpg') no-repeat",
            backgroundSize: "cover",
            height: "100vh"
        }}>
            <div className="mask h-100" >
                <div className="d-flex justify-content-center align-items-center h-100 w-100">
                    <div className="text-white text-center">
                        <h1 className="mb-3">NUESTRA PROPUESTA</h1>
                        <h4 className="mb-3">Ayudamos a las empresas a cumplir sus objetivos de sostenibilidad mejorando su posicionamiento en el mercado. Promoviendo la preservación del medio ambiente al reciclar deshechos y transformándolos en materiales de construcción sostenibles. </h4>   
                    </div>
                </div>

	
            </div>
			
        </div>
			
		</div>
	);
};
