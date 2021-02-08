import React from 'react';
import {PropTypes} from 'prop-types';
import {ListBox} from "../../../../organisms/list-box";
import {ListItem} from "../../../../molecules/list-item";
import {Button} from "../../../../atoms/button";

export const TaskList = React.memo(({tasks,onDeleteTask}) => {

    const onClickHandler = (index) =>{
        onDeleteTask(index);
    };

    return(
        <ListBox>
            {
                tasks.map((item,key)=> (
                    <ListItem key={key}>
                        <div>{item}</div>
                        <Button onClick={()=>onClickHandler(key)}>Delete</Button>
                    </ListItem>
                ))
            }
        </ListBox>
    );
});
TaskList.propTypes = {
    tasks: PropTypes.array
}
TaskList.defaultProps ={
    tasks : []
}