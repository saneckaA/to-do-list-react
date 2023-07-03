import React from "react";
import Tasks from "./features/tasks/TasksPage/Tasks"
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Author from "./features/author/AuthorPage";
import Navigation from "./Navigation";
import TaskPage from "./features/tasks/TaskPage";
import { toAuthor, toTask, toTasks } from "./routes";

export default () => (
    <HashRouter>
        <Navigation />
        <Switch>
          <Route path={toTask()}>
            <TaskPage />
          </Route>
            <Route path={toTasks()}>
                <Tasks />
            </Route>
            <Route path={toAuthor()}>
                <Author />
            </Route>
            <Route path="/">
                <Redirect to={toTasks()} />
            </Route>
        </Switch>
    </HashRouter>
);