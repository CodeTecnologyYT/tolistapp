import React from 'react';
import {PropTypes} from 'prop-types';
import {Label} from "../../atoms/label";

export const FormItem = ({classname, label, children}) => {
    return (
        <div className={classname}>
            <div>
                <Label>{label}</Label>
            </div>
            <div>
                {children}
            </div>
        </div>
    );
}
FormItem.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    label: PropTypes.string
}
FormItem.defaultProps = {
    className: '',
    label: ''
}