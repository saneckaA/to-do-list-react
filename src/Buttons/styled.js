import styled from "styled-components";

export const ButtonsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;

    @media (max-width: 767px) {
        margin-bottom: 20px;
    }
`;

export const Button = styled.button`
    background: transparent;
    border: none;
    color: teal;
    margin: 0 0 0 20px;
    transition: color 0.5s;

    @media (max-width: 767px) {
        flex-basis: 100%;
        margin: 10px;
    }

    &:hover {
        color: hsl(180, 100%, 15%);
    }

    &:active {
        color: hsl(180, 100%, 35%);
    }

    &:disabled {
        color: #ccc;
    }
`;