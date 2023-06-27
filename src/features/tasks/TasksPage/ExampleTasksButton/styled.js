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
    color: ${({theme}) => theme.elementColor};
    margin: 0 0 0 20px;
    transition: color 0.5s;

    @media (max-width: 767px) {
        flex-basis: 100%;
        margin: 10px;
    }

    &:hover {
        color: ${({theme}) => theme.hoverColor};
    }

    &:active {
        color: ${({theme}) => theme.activeColor};
    }

    &:disabled {
        color: ${({theme}) => theme.disabledColor};
    }
`;