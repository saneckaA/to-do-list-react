import styled from "styled-components";

export const Sections = styled.section`
    background: white;
    box-shadow: 3px 3px 3px #ccc;
`;

export const Header = styled.header`
    border-bottom: 1px solid #ccc;
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-between;
    padding-right: 20px;
    align-items: center;

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
    }
`;

export const Title = styled.h2`
    font-size: 20px;
    border-bottom: none;
    padding-top: 2px;
    padding-bottom: 2px;
    margin-left: 15px;
`;

export const Body = styled.div`
    margin: auto;
`;

