import React from "react";
import { HomeContainer } from './styles';
import { LogoCITi } from '../../assets';


export const Home = () => {
    return (
        <div className="nav-bar">
            <p>HighBall</p>

            <div className="nav">
                <p className="beggin">Ínicio</p>
                <p>Propósito</p>
                <p>Catálogo</p>
                <div className="encomenda">
                    <p>Encomenda</p>
                </div>
            </div>
            
        </div>
    );
}