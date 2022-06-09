import styled from 'styled-components';
import { BackgroundContact } from '../../assets';


export const Container = styled.form `
    display: flex;
    width: 100%;
    background-image: url(${BackgroundContact});
    background-size:1811.17px 501.91px;
    margin: 0;
`

export const MiniContainer = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 1126px;
    margin: auto;
`
export const ImageCup = styled.div `
    order: 2;
    width: 40%;
    position: absolute;
    right: 0px;
    margin-right: -100px;
`

export const Texts = styled.div `
    display: flex;
    flex-direction: column;
    width: 60%;
`

export const Text1 = styled.div `
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 600;
    font-size: 44px;
    line-height: 70px;
    letter-spacing: 0.025em;
    color: #609ED4;
    margin-top: 75px;
    margin-bottom: 16px;
`
export const Text2 = styled.input `
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 12px 24px;
    gap: 10px;
    background: #FFFFFF;
    border-radius: 16px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #232323;
    opacity: 0.7;
    margin-bottom: 16px;
    border: none;
`



export const Text3 = styled.textarea `
    padding: 14px 24px 12px;
    gap: 10px;
    height: 86px;
    background: #FFFFFF;
    border-radius: 16px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #232323;
    opacity: 0.7;
    border: none;
`


export const Click = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;

    button {
        width: 171px;
        height: 46px;
        background: #6DADE4;
        color: #F9F9F9;
        border-radius: 32px;
        border: none;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        margin-top: 37px;
        align-items: center;
        margin-bottom: 30px;
    }
`


