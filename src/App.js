import React, { useState } from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";


const tasks = [
  { id: 1, content: "przejść na reacta", done: true },
  { id: 2, content: "zjesc obiad", done: false },
];



function App() {

  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone)
  };

  return (
    <React.Fragment>
      <Container>
        <Header
          title="Lista zadań" />

        <Section
          title="Dodaj nowe zadanie"
          body={<Form />}
        />

        <Section
          title="Lista zadań"
          body={
            <Tasks tasks={tasks} hideDone={hideDone} />
          }
          extraHeaderContent={
            <Buttons
              tasks={tasks}
              hideDone={hideDone}
              toggleHideDone={toggleHideDone} />
          }
        />
      </Container>
    </React.Fragment>
  );
}

export default App;
