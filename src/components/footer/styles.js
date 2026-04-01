import styled from "styled-components";

export const FooterDiv = styled.footer`
    background-color: #333333b1;
    backdrop-filter: blur(5px);
    position: absolute;
    left: 0;
    bottom: 0;
    display: flex;
    /* height: 50px; */
    justify-content: center;
    align-items: center;
    color: white;
    width: 100%;
    transition: .5s;
    opacity: ${props => props.isOpen ? '1' : '1'};
    /* transform: ${props => props.isOpen ? 'translateY(0)' : 'translateY(0)'}; */
    box-shadow: ${props => props.isOpen ? '0 0 5px rgb(255 255 255 / .5)' : '0 0 0 rgb(255 255 255 / .5)'};
    
    @media screen and (width >= 610px) {
        opacity: ${props => props.isOpen ? '1' : '0'};
    }
`;

export const Ul = styled.ul`
    list-style: none;
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1em;
    padding: 1em;
    /* justify-content: space-between; */

    .a-footer {
        color: #f9f9f9;
        text-decoration: none;
        transition: .1s;
        font-size: 1.2em;
    }
    
    .a-footer:hover {
        text-shadow: 0 0 10px rgb(255 255 255 / .5);
    }

    @media screen and (width <= 600px) {
        transition: none;
    }

    & .li2 a {
        color: white;
        text-align: center;
        text-decoration: none;
        display: block;
        position: relative;

        &::before {
            background-color: white;
            width: 100%;
            height: 2px;
            position: absolute;
            bottom: 0;
            left: 0;
            opacity: 0;
            transition: .3s;
            content: '';
        }

        &:hover::before { opacity: 1; }
    }

    .li2 {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: .5em;
        /* font-size: 1.2em; */
    }

    @media screen and (width >= 610px) {
        flex-direction: row;
        justify-content: space-around;
        /* padding: 1em 2em; */
    }
`;

export const SpanLink = styled.span`
    position: relative;

    &::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        transition: .3s;
        background-color: #fff;
        height: 2px;
        width: 0%;
    }

    ${Ul} .a-footer:hover > &::before {
        width: 100%;
    }

    @media screen and (width <= 600px) {
        &::before {
            transition: none;
        }
    }
`;