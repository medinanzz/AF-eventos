import styled from "styled-components";

export const TextInfoJobDiv = styled.div`
    color: rgb(255 255 255 / .5);
    position: fixed;
    width: 100%;
    text-align: center;
    left: 0;
    margin-top: .4em;
    right: 0;
    
    p {
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        margin: auto;
        width: 90%;
        /* white-space: nowrap; */
    }

    p:nth-of-type(1) {
        margin-bottom: .4em;
    }
`;