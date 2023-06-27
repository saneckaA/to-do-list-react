import { useDispatch, useSelector } from "react-redux";
import { fetchExampleTasks } from "../../tasksSlice";
import { ButtonsContainer, Button } from "./styled";
import { selectLoading } from "../../tasksSlice";

const ExampleTasksButton = () => {
    const dispatch = useDispatch();
    const loading = useSelector(selectLoading);

    return (
        <ButtonsContainer>
            <Button disabled={loading} onClick={() =>dispatch(fetchExampleTasks())}>
                { loading ? "Ładowanie..." : "Pobierz przykładowe zadania" }
            </Button>
        </ButtonsContainer>
    );
};

export default ExampleTasksButton;