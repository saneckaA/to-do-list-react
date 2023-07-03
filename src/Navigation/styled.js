import styled from "styled-components";
import { NavLink } from "react-router-dom";

const activeClassName = "link-active";

export const Nav = styled.nav`
   background-color: ${({ theme }) => theme.elementColor};
   margin-top: -25px;
`;

export const List = styled.ul`
   display: flex;
   flex-direction: row;
   color: ${({ theme }) => theme.sectionColor};
   padding-top: 20px;
   padding-bottom: 15px;
   justify-content: center;

`;

export const Item = styled.li`
   list-style: none;
   padding: 10px;
   font-size: 20px;
`;

export const StyledNavLink = styled(NavLink).attrs(() => ({
    activeClassName,
}))`
    color: white;
    text-decoration: none;

    &.${activeClassName} {
        font-weight: bold;
    }
  
   &::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: rgb(249, 249, 249, 0.9);
    transition: width .4s;
    margin-top: 5px;
   }

   &:hover::after {
    width: 100%;
   }







   

    `;
