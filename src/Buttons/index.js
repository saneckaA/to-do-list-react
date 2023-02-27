import { ButtonsContainer, Button } from "./styled";
const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (

    tasks.length > 0 && (
        <ButtonsContainer className="buttons">
            <Button onClick={toggleHideDone}>
                {hideDone ? "Pokaż" : "Ukryj"} ukończone
            </Button>
            <Button
                onClick={setAllDone}
                disabled={tasks.every(({ done }) => done)}>
                Ukończ wszystkie
            </Button>
        </ButtonsContainer>
    )
);

export default Buttons;
