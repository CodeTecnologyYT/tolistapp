import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {TaskPage} from "./views/pages/task";

ReactDOM.render(
    <React.StrictMode>
        <TaskPage></TaskPage>
    </React.StrictMode>,
    document.getElementById('root')
);

