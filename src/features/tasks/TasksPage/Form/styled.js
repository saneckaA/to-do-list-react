import styled from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 20px;
  
    @media (max-width: 767px) {
        grid-template-columns: 1fr;
    }
`;

export const Button = styled.button`
    border: none;
    background-color: ${({theme}) => theme.elementColor};
    color: ${({theme}) => theme.insideButtonColor};
    padding: 10px;
    transition: 1s;

    &:hover {
        background-color: ${({theme}) => theme.hoverColor};
        transform: scale(1.1);
    }

    &:active {
        background-color: ${({theme}) => theme.activeColor};
    }
`;