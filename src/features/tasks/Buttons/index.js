import { ButtonsContainer, Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { toggleHideDone, setAllDone, selectAreTasksEmpty, selectIsEveryTaskDone, selectHideDone } from "../tasksSlice";

const Buttons = ({ }) => {
    const areTasksEmpty = useSelector(selectAreTasksEmpty);
    const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
    const hideDone = useSelector(selectHideDone);
    const dispatch = useDispatch();
    return (
        <div>
            {!areTasksEmpty && (
                <>
                    <ButtonsContainer className="buttons">
                        <Button onClick={() => dispatch(toggleHideDone())}>
                            {hideDone ? "Pokaż" : "Ukryj"} ukończone
                        </Button>
                        <Button
                            onClick={() => dispatch(setAllDone())}
                            disabled={isEveryTaskDone}>
                            Ukończ wszystkie
                        </Button>
                    </ButtonsContainer>
                </>
            )}
        </div>
    )
};

export default Buttons;
