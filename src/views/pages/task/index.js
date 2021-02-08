import React, {useReducer,useCallback} from 'react';
import {PropTypes} from 'prop-types';
import {TaskForm} from "./components/task-form";
import {TaskList} from "./components/task-list";
import {taskReducer} from "../../../application/reducer/task.reducer";
import {addTask, deleteTask} from "../../../application/action/task.action";

export const TaskPage = () => {

    const [tasks,dispatch] = useReducer(taskReducer,[]);

    const onSubmitHandler = useCallback(({task}) => {
        dispatch(addTask(task));
    },[]);
    const onDeleteTask = useCallback((ideTask) =>{
        dispatch(deleteTask(ideTask));
    },[]);

    return (
        <main className="flex space-x-3">
            <section className="w-1/2 flex">
                <TaskForm onSubmit={onSubmitHandler}/>
            </section>
            <section className="w-1/2 flex">
                <TaskList tasks={tasks} onDeleteTask={onDeleteTask}/>
            </section>
        </main>
    );
}
TaskPage.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
}
TaskPage.defaultProps = {
    className: ''
}