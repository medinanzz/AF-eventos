import styled from "styled-components";

export const WrapperDiv = styled.div`
    background-color: #1c1c1c;
    min-height: 100dvh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: relative;
`;

export const ButtonH1 = styled.button`
    background-color: transparent;
    text-transform: uppercase;
    color: white;
    transition: all .3s;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .4em;
    font-size: 2em;
    font-weight: bold;
    cursor: pointer;
    letter-spacing: 1.2px;

    &:hover { text-shadow: 0 0 10px rgb(255 255 255 / .5); }

    @media screen and (width <= 600px) {
        transition: none;
    }

    & .line {
        display: flex;
        justify-content: center;
        width: 2px;
        height: 30px;
        transition: .3s;
        align-items: center;
        border-radius: 1em;
        background-color: #C0C0C0;
    }

    &:hover > .line {
        box-shadow: 0 0 10px #C0C0C0; 
    }
`;

export const MainContent = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;