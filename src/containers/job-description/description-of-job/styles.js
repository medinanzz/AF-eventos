import styled from "styled-components";


export const DivDescriptoin = styled.div`
    width: 100%;
    padding: 1em;
    display: flex;
    flex: 1;
    height: 400px;
    /* height: fit-content; */
    flex-direction: column;
`;

export const Title = styled.h1`
    margin-bottom: .5em;
    text-transform: capitalize;
`;

export const DivTexts = styled.div`
    text-align: center;
    width: 100%;
    padding: 1em 0 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media screen and (width >= 610px) {
        width: 80%;
        margin: 0 auto;
    }

    p {
        font-size: 1.2em;
        width: 90%;
        text-align: center;
        /* text-align: justify; */

    }
`;