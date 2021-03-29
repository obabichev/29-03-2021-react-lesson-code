import React from 'react'
import {Normalized, Task} from '../../types';

interface TaskProps {
    taskId: string;
    tasks: Normalized<Task>
}

export const TaskCard: React.FunctionComponent<TaskProps> = ({taskId, tasks}) => {
    const task = tasks[taskId];

    if (!task) {
        return null;
    }

    return (
        <div>
            {task.title}
            <div style={{marginLeft: 12}}>
                {task.subtasks.map(subtaskId => (
                    <TaskCard taskId={subtaskId} tasks={tasks}/>
                ))}
            </div>
        </div>
    );
};
