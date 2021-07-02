import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Montserrat', sans-serif;
    background: #262626;
    width: 100%;
    height: 100vh;
`;

export const CardContainer = styled.div`
    position: relative;
    background: #1e1e1e;
    height: 350px;
    width: 550px;
    overflow: hidden;
    display: flex;
    align-items: center;
`;

export const ContentContainer = styled.div`
    width: 215px;
    position: absolute;
    left: 20px;
    z-index: 3;
`;

export const ButtonContainer = styled.div`
    width: fit-content;
    height: fit-content;
    margin-top: 10px;
    & a {
        display: inline-block;
        overflow: hidden;
        position: relative;
        font-size: 11px;
        color: #aaa;
        text-decoration: none;
        padding: 10px 15px;
        border: 1px solid #333;
        font-weight: bold;
        &:after {
            content: '';
            position: absolute;
            top: 0;
            right: -10px;
            width: 0%;
            background: #262626;
            height: 100%;
            z-index: -1;
            transition: width 0.3s ease-in-out;
            transform: skew(-25deg);
            transform-origin: right;
        }
        &:hover {
            color: #fff;
            transition: all 0.5s ease;
            &:after {
                width: 150%;
                left: -10px;
                transform-origin: left;
            }
        }
        &:nth-of-type(1) {
            border-radius: 50px 0 0 50px;
            border-right: none;
        }
        &:nth-of-type(2) {
            border-radius: 0px 50px 50px 0;
        }
    }
`;
