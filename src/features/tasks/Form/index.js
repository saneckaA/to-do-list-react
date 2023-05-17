import { nanoid } from "@reduxjs/toolkit";
import React, { useState, useRef } from "react";
import { addTask } from "../tasksSlice";
import { useDispatch } from "react-redux";
import { StyledForm, Input, Button } from "./styled";

const Form = () => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const dispatch = useDispatch();
    const inputRef = useRef(null);

    const onFormSubmit = (event) => {
        event.preventDefault();
        const contentTrimmed = newTaskContent.trim();
        if (contentTrimmed === "") {
            return;
        }

        dispatch(addTask({
            content: contentTrimmed,
            done: false,
            id: nanoid(),
        }));

        setNewTaskContent("");
        inputRef.current.focus();
    };

    return (
        <StyledForm onSubmit={onFormSubmit}>
            <Input
                ref={inputRef}
                value={newTaskContent}
                placeholder="Co jest do zrobienia?"
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <Button>Dodaj zadanie</Button>
        </StyledForm>
    );
};

export default Form;