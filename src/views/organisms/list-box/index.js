import React from 'react';
import {PropTypes} from 'prop-types';

export const ListBox = ({classname, children}) => {
    return (
        <div className={classname}>
            {
                children.map((item, key) => (
                    <div key={key}> {item} </div>
                ))
            }
        </div>
    );
}
ListBox.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
}
ListBox.defaultProps = {
    className: ''
}