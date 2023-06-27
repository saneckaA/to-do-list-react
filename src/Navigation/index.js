import React from "react";

import { Item, List, Nav, StyledNavLink } from "./styled";
import { toAuthor, toTasks } from "../routes";

export default () => {
    return (
        <Nav>
            <List>
                <Item>
                    <StyledNavLink activeClassName="active" to={toTasks()}>Zadania</StyledNavLink>
                </Item>
                <Item>
                    <StyledNavLink activeClassName="active" to={toAuthor()}>O autorze</StyledNavLink>
                </Item>
            </List>
        </Nav>
    )
}