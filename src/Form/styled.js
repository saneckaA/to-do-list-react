import styled from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 20px;
    padding: 20px;
    margin-bottom: 10px;

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
    }
`;

export const Input = styled.input`
    border: 1px solid #ccc;
    padding: 10px; 
`;

export const Button = styled.button`
    border: none;
    background-color: teal;
    color: white;
    padding: 10px;
    transition: 1s;

    &:hover {
        background-color: hsl(180, 100%, 15%);
        transform: scale(1.1);
    }

    &:active {
        background-color: hsl(180, 100%, 35%);
    }
`;