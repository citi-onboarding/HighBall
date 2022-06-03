import styled from 'styled-components';

export const Nav = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 120px;
    padding-right: 120px;
    width: 100%;
    height: 90px;
    background-color: #FFFFFF;
    position: fixed;

`;

export const Logo = styled.p`
    height: 44px;
    width: 177px;
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 44px;
    line-height: 44px;
    letter-spacing: 0.025em;
    color: #6DADE4;

`;

export const Options = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    gap:40px;
`;
export const Link = styled.p`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #232323;
`;

export const Bold = styled.p`
    font-family: 'Inter';
    font-style: normal;
    font-size: 18px;
    line-height: 22px;
    font-weight: 600;
    color: #232323;

`;

export const Button = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 11.42px;
    background-color: #6DADE4;
    border-radius: 32px;
    padding: 12px 24px;
    border:none;
    font-family: 'Inter';
    font-style: normal;
    font-size: 18px;
    line-height: 22px;
    color: #F9F9F9;

    &:hover{
        background-color: #F9F9F9;
        color: #6DADE4
    }
`;
