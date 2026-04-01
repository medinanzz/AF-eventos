import styled from "styled-components";

export const DivLinkWhats = styled.div`
    position: absolute;
    /* bottom: 2em; */
    top: 1em;
    left: 1em;
    /* right: 2em; */
`;

export const ALinkWhats = styled.a`
    color: #25D366;
    height: 46px;
    width: 46px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    &:hover {
        box-shadow: 0 0 3px #25d365d8, inset 0 0 3px #25D366d8;
    }

    @media screen and (width >= 610px) {
        transition: .3s;
    }
    
    
    .fa {
        animation: upDown 1.5s ease-in-out infinite;
    }

    @keyframes upDown {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.1); }
    }
`;