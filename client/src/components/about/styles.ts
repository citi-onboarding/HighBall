import styled from 'styled-components';

export const Container = styled.div `
    display: flex;
    flex-direction: row;
    margin-left: 120px;
    margin-right: 28px;
    align-items:center;
    justify-content: space-between;
    margin: auto;
    width: 1126px;
    margin-top: 180px;

    h1 {
        font-family: 'Baloo 2';
        font-style: normal;
        font-weight: 700;
        font-size: 68px;
        line-height: 70px;
        letter-spacing: 0.025em;  
        color: #232323;
        margin-bottom: 0px;
    }

    p {
        width: 477px;
        height: 44px;
    
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #232323;
        margin-top: 24px;
    }
    
`


export const Image = styled.div `
    flex-direction: row;
    width: 665px;
    height: 456px;
`