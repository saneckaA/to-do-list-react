import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import { Description } from "./styled";

function Author() {
  return (
    <Container>
      <Header
        title="O autorze"
      />
      <Section
        title="Aleksandra Sanecka"
        body={<Description>Nazywam się Aleksandra Sanecka. Ukończyłam Politechnikę Rzeszowską na wydziale Chemicznym.
          Studiowałam Biotechnologię w Diagnostyce Laboratoryjnej. Wolne chwile lubię
          poświęcać na malarstwo cyfrowe, naukę języków czy od niedawna również na naukę
          programowania. </Description> }
      />
    </Container>
  );
}

export default Author;
