import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Demo = () => {
	

	return (
		<div className="container-fluid">
			<div className="p-5 text-start bg-image rounded-3" style={{
            background: "url('https://agenciatierraviva.com.ar/wp-content/uploads/2021/06/nota_bioconstruccion_05-1024x683.jpg') no-repeat",
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

			<div className="container mt-5 text-center">

				<p className="mb-3">El proyecto se alinea perfectamente con la necesidad de construir de manera sostenible, abordando uno de los principales desafíos ambientales de nuestro tiempo: la contaminación causada por la construcción el sector de la construcción contribuye a 23% de la contaminación atmosférica, 40% de la contaminación del agua potable, y 50% de residuos en los vertederos. Al utilizar tecnologías innovadoras y materiales ecológicos, nuestra empresa busca ofrecer soluciones concretas para reducir la huella ambiental del sector.
				En primer lugar, nuestra iniciativa de limpieza de playas no solo busca restaurar la belleza natural de estos entornos, sino también mitigar la contaminación que generan los desechos costeros. Al recoger y reciclar estos materiales, evitamos que terminen en nuestros océanos y, en su lugar, los transformamos en recursos valiosos para la construcción.
				La fabricación de materiales de construcción al utilizar algas marinas y bacterias en la producción de estos materiales, estamos innovando en la forma en que se construyen las estructuras, ofreciendo una alternativa que no solo es más duradera y resistente, sino también más respetuosa con el medio ambiente.
				El proyecto no solo busca mejorar la salud del planeta y sus habitantes, sino también ofrecer soluciones innovadoras y rentables para el sector de la construcción. Al integrar la limpieza de playas, la fabricación de materiales sostenibles y la construcción ecológica, estamos sentando las bases para un futuro más limpio, más verde y más sostenible para todos.</p>
				

			</div>
			
		</div>
	);
};
