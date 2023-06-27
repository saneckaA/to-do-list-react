import styled from "styled-components";
import { NavLink } from "react-router-dom";

const activeClassName = "link-active";

export const Nav = styled.nav`
   background-color: ${({ theme }) => theme.elementColor};
   margin: 0;
   padding: 0;
`;

export const List = styled.ul`
   display: flex;
   flex-direction: row;
   color: ${({ theme }) => theme.sectionColor};
   padding-top: 15px;
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

    &.hover {
        border-bottom: 1px solid;
    }
    `;
