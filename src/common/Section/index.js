import { Sections, Header, Title, Body } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
    <Sections>
        <Header>
            <Title>{title}</Title>
            {extraHeaderContent}
        </Header>
        <Body>
            {body}
        </Body>
    </Sections>
);

export default Section;