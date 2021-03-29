import React, {useMemo} from 'react'
import {useParams, useRouteMatch} from 'react-router-dom';
import {Page} from '../../components/Page';
import {useFetch} from '../../hooks/useFetch';
import {getBoard} from '../../services/board';
import {BoardInfo} from '../../components/BoardInfo';
import {TaskCard} from './TaskCard';
import {normalize} from '../../utils/normalize';

interface BoarPageProps {
}

export const BoardPage: React.FunctionComponent<BoarPageProps> = () => {
    const params = useParams<{ id: string }>();
    const id = params.id;

    const [board, loading, error] = useFetch(getBoard(id));

    const rootTasks = useMemo(() => board?.tasks.filter(task => !task.parent),
        [board]);

    const normalizedTasks = useMemo(() => normalize(board?.tasks ?? [], "_id"), [board]);

    return (
        <Page loading={loading} error={error}>
            {board && <>
                <BoardInfo board={board}/>
                {rootTasks?.map(task => (
                    <TaskCard taskId={task._id}
                              tasks={normalizedTasks}/>
                ))}
            </>}
        </Page>
    );
};
