import React, {useState} from 'react';
import {PropTypes} from 'prop-types';
import {ErrorMessage} from "./types";
import {UseForm} from "../../../../../helpers/UseForm";
import {TextInput} from "../../../../atoms/text-input";
import {Form} from "../../../../organisms/form";
import {Title} from "../../../../atoms/title";

export const TaskForm = React.memo(({onSubmit}) => {

    const [messageError, setMessageError] = useState();
    const [formValue, handlerInputChange] = UseForm({
        task: ''
    });

    const {task} = formValue;

    const validationForm = () => {
        if (task.trim().length === 0) {
            setMessageError(ErrorMessage.TASK)
            return false;
        }
        setMessageError();
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validationForm()) {
            onSubmit(formValue);
        }
    };

    return (
        <Form onSubmit={handleSubmit} messageError={messageError} className="w-full flex-wrap flex-auto flex space-y-3">
            <Title className="text-gray-600 text-xl font-semibold">Add Task</Title>
            <TextInput onChange={handlerInputChange} name="task" value={task}
                       className="px-2 py-2 border-2 border-gray-400 appearance-none focus:ring-0 rounded-lg w-full"></TextInput>
        </Form>
    );
});
TaskForm.propTypes = {
    onSubmit: PropTypes.func
}
TaskForm.defaultProps = {
    onSubmit: () => {
    }
}