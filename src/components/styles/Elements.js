import styled from 'styled-components';

export const Tag = styled.span`
    display: inline-block;
    color: #fff;
    background: ${(props) => props.color};
    margin-bottom: 10px;
    padding: 5px 10px;
    border-radius: 50px;
    font-size: 0.7em;
`;

export const H1 = styled.h1`
    color: #fff;
`;

export const P = styled.p`
    width: 280px;
    font-size: 13px;
    line-height: 1.4;
    color: #aaa;
    margin: 20px 0;
`;

export const Image = styled.img`
    position: absolute;
    top: 30px;
    right: -20px;
    z-index: 0;
`;
