import React from 'react';
import {PropTypes} from 'prop-types';
import {Button} from "../../atoms/button";
import {ButtonTheme, ButtonType} from "../../atoms/button/types";
import {Label} from "../../atoms/label";

export const Form = ({className, children, onSubmit, messageError}) => {
    return (
        <form className={className} onSubmit={onSubmit}>
            <div className="flex flex-wrap w-full space-y-3.5">
                {children}
            </div>
            <div className="flex-auto flex font-medium w-full">
                <Button type={ButtonType.SUBMIT} theme={ButtonTheme.ROUNDED}
                        className="hover:bg-blue-200 hover:text-blue-600 rounded-md flex items-center justify-center bg-blue-100 text-blue-500 w-full py-2">Enviar</Button>
            </div>
            {messageError && <Label>{messageError}</Label>}
        </form>
    );
}
Form.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    onSubmit: PropTypes.func,
    formError: PropTypes.node,
    hit: PropTypes.string,
    messageError: PropTypes.string
}
Form.defaultProps = {
    className: '',
    onSubmit: () => {
    },
    hit: '',
    messageError: ''
}