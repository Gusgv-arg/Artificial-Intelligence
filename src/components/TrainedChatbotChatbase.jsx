import React from "react";
import Button from "react-bootstrap/esm/Button";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function TrainedChatbotChatbase() {
    return (
        <>
            <Link to="/">
                <Button variant="dark" type="button" className="mt-3 mb-3">
                    Home
                </Button>
            </Link>
            <div className="d-flex-col ">
                <h2 className="d-flex justify-content-start m-3 fw-bold">
                    Chatbot de Inteligencia Artificial con Chatbase
                </h2>
                <div className="d-flex-col m-3">
                    <p className="d-flex justify-content-start mt-2 mb-2">
                        Este es un chatbot de inteligencia artificial entrenado con la
                        información de Bistrosoft
                    </p>
                    <p className="d-flex justify-content-start">
                        Se entréno con la pagina https://bistrosoft.com/ y se le
                        agregaron cosas menores de prueba
                    </p>
                </div>
            </div>

            
        </>
    );
}

export default TrainedChatbotChatbase;
