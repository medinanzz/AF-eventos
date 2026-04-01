import styled from "styled-components";

export const ClickHereDiv = styled.div`
    color: rgb(255 255 255 / .5);
    position: absolute;
    bottom: 2.8em;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;

    p {
        font-size: 1.3em;
        white-space: nowrap;
    }

    .arrowDown {
        animation: up_down 1s linear infinite;
    }

    @keyframes up_down {
        0%, 100% {transform: translateY(0px)}
        50% {transform: translateY(3px)}
    }

    .p-dk::before {
        content: 'Passe o mouse aqui';
    }

    .p-mb::before {
        content: 'Clique aqui';
    }

    .p-mb, .p-dk {
        display: none;
        left: 50%;
        transform: translateX(-50%);
        position: absolute;
    }
    .p-mb { display: block; }

    @media screen and (width >= 610px) {
        .p-mb { display: none; }
        .p-dk { display: block; }
    }

`;