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
    margin: 0;
`;

export const Logo = styled.img`
    height: 44px;
    width: 177px;

`;

export const Options = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    gap:40px;
`;
export const Light = styled.p`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #232323
`;

export const Bold = styled.p`
    font-family: 'Inter';
    font-style: normal;
    font-size: 18px;
    line-height: 22px;
    font-weight: 600;
    color: #232323;

`;

export const Package = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 11.42px;
    background-color: #6DADE4;
    border-radius: 32px;
    padding: 12px 24px;
`;

export const White = styled.p`
    font-family: 'Inter';
    font-style: normal;
    font-size: 18px;
    line-height: 22px;
    color: #F9F9F9;
`;