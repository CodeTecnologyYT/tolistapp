import React from 'react';
import {PropTypes} from 'prop-types';
import {ButtonSize, ButtonTheme, ButtonType} from "./types";
import classnames from 'classnames';
import style from './style.css';

export const Button = ({children, size, type, theme, className, onClick, disabled}) => {

    const classProp = classnames(
        style.button,
        style[size],
        style[theme],
        {
            [style.disabled]: disabled
        },
        className,
    );
    return (
        <button type={type} className={classProp} onClick={onClick} disabled={disabled}>{children}</button>
    )
}

Button.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    className: PropTypes.string,
}

Button.defaultProp = {
    type: ButtonType.BUTTON,
    theme: ButtonTheme.DEFAULT,
    size: ButtonSize.MEDIUM,
    onClick: () => {
    },
    disabled: false,
    className: ''
}