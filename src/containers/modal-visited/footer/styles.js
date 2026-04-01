import styled from "styled-components";

export const FooterDiv = styled.footer`
    background-color: #333333b1;
    backdrop-filter: blur(5px);
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    padding: 1em;
    width: 100%;
`;

export const Ul = styled.ul`
    list-style: none;
    width: 100%;

    li {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: .5em;
    }

    & a {
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

    @media screen and (width <= 600px) {
        transition: none;
    }
`;