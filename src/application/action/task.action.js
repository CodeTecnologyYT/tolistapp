import {actionTypes} from "../types/task.types";

const addTask = (task) => {
    return {
        type: actionTypes.add,
        payload: task
    }
}
const deleteTask = (idTask) => {
    return {
        type: actionTypes.delete,
        payload: idTask
    }
}


export {
    addTask,
    deleteTask
}