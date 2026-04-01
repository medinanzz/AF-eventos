import styled from "styled-components";



export const DivModal = styled.div`
    height: 100dvh;
    pointer-events: ${props => props.openModal ? 'all' : 'none'};
    transition: all .25s;
    opacity: ${props => props.openModal ? 1 : 0};
    transform: ${props => props.openModal ? 'scale(1)' : 'scale(.7)'};
    background-color: rgb(0 0 0 / .6);
    backdrop-filter: blur(5px);
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding-top: 4em;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    flex-direction: column;
    overflow-x: hidden;
    overflow-y: auto;

    &::-webkit-scrollbar {
        background-color: transparent;
        width: 6px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #333;
        border-radius: 2em;
    }

    p { color: white; width: 90%; }
`;


export const ButtonCloseModal = styled.button`
    background-color: transparent;
    border-radius: 50%;
    height: 42px;
    width: 42px;
    transition: all .3s;
    border: 0;
    cursor: pointer;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 1em;
    right: 1em;
    align-items: center;
    
    &:hover { box-shadow: 0 0 10px rgb(255 255 255 / .3); }

    @media screen and (width <= 600px) {
        transition: none;
    }
`;

export const ButtonOpenModais = styled.button`
    background-color: transparent;
    transition: .3s;
    border: none;
    border-radius: 0.3em;
    position: relative;
    color: white;
    font-size: 1.4em;
    cursor: pointer;

    &::before {
        content: '';
        position: absolute;
        bottom: 0;
        width: 100%;
        border-radius: 1em;
        opacity: 0;
        background-color: #ffffffb9;
        height: 2px;
        left: 0;
        transition: .15s;
    }

    &:hover::before {
        opacity: 1;
    }

    @media screen and (width <= 600px) {
        &::before {
            transition: none;
        }
    }
`;