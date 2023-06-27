import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const List = styled.ul`
    margin: 0;
    padding: 0;

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
   ${({ done }) => done && css`
    text-decoration: line-through;
   `}
`;

export const StyledLink = styled(Link)`
text-decoration: none;
color: ${({ theme }) => theme.elementColor};

   &:hover {
    color: ${({ theme }) => theme.hoverColor}
  }

   &:active {
   color: ${({ theme }) => theme.activeColor};
  }
`;

export const Button = styled.button`
    border: none;
    color: ${({ theme }) => theme.insideButtonColor};
    width: 30px;
    height: 30px;
    padding: 0;
    transition: 0.7s;

    ${({ toggleDone }) => toggleDone && css`
       background: ${({ theme }) => theme.doneButtonColor};

       &:hover {
        background: ${({ theme }) => theme.doneButtonHover};
       }

       &:active {
        background: ${({ theme }) => theme.doneButtonActive};
       }
    `}

    ${({ remove }) => remove && css`
       background: ${({ theme }) => theme.removeButtonColor};

       &:hover {
        background: ${({ theme }) => theme.removeButtonHover};
    }

       &:active {
        background: ${({ theme }) => theme.removeButtonActive};
    }
    `}
`;