import styled from "styled-components";

export const ModalContent = styled.div`
    background: #222;
    border-radius: 1em;
    padding: 1.5em;
    margin: 1em auto 3em;
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: center;
    max-width: 800px;
    flex-direction: column;
    width: 90%;

    @media screen and (width >= 610px) {
        flex-direction: row;
    }

    hr {
        width: 100%;
        margin: 1em 0;

        @media screen and (width >= 610px) {
            width: 2px;
            margin: 0 1em;
            height: 100%;
        }
    }
`;

export const JobDescriptionDiv = styled.div`
    color: white;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 100%;
    padding: 1em 0 0 0;

    @media screen and (width <= 700px) {
        width: 100%;
        height: 100%;
        align-items: center;
    }
`;

export const Title = styled.h1`
    width: 100%;
    font-size: 2em;
    text-align: center;
    padding: 0 .5em;
`;

export const Ul = styled.ul`
    list-style: none;
    display: flex;
    padding-top: 0;
    justify-content: start;
    align-items: center;
    gap: .5em;
    flex-wrap: wrap;
    
    @media screen and (width >= 610px) {
        height: 100%;
        flex-wrap: nowrap;
        flex-direction: column;
        align-items: start;
    }

    &.ul1 {
        padding: 0;
        padding-left: 1em;
    }

    &.ul1 li {
        width: 127px;
    }

    &.ul2 {
        align-items: center;
        height: 100%;
        padding-left: 2em;
    }
    
    &.ul2 li {
        width: 300px;
        white-space: wrap;
        p {
            width: 80%;
        }
    }
`;
export const Li = styled.li`
    display: flex;
    align-items: center;
    justify-content: start;
    gap: .4em;
`;
