import styled, { css } from "styled-components";

export const List = styled.ul`
    margin: 0;
    padding: 0;
    padding-bottom: 20px;
    padding-top: 20px;
`;

export const Item = styled.li`
    list-style: none;
    font-size: 15px;
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 10px;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid rgb(185, 167, 167);
    margin-left: 20px;
    margin-right: 20px;

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const Content = styled.span`
   ${({done}) => done && css`
    text-decoration: line-through;
   `}
`;

export const Button = styled.button`
    border: none;
    color: white;
    width: 30px;
    height: 30px;
    padding: 0;
    transition: 0.7s;

    ${({ toggleDone }) => toggleDone && css`
       background: green;

       &:hover {
        background: hsl(120, 100%, 15%);
       }

       &:active {
        background: hsl(120, 100%, 35%);
       }
    `}

    ${({remove}) => remove && css`
       background: red;

       &:hover {
        background: hsl(0, 100%, 40%);
    }

       &:active {
        background: hsl(0, 100%, 60%);
    }
    `}
`;