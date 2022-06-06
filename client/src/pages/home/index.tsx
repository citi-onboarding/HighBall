import React from "react";
import { HomeContainer } from './styles';


export const Home = () => {
    return (
        <HomeContainer>
            <h1>ReactJS Boilerplate</h1>
            <p>
                Made with
                {' '}
                <strong>&lt; &#x0002F; &gt;</strong>
                {' '}
                and
                {' '}
                <strong>&#10085;</strong>
                {' '}
                by CITi
            </p>
        </HomeContainer>
    );
}