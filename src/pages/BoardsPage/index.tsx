import React from 'react'
import {getBoards} from '../../services/board';
import {Link} from 'react-router-dom';
import {Page} from '../../components/Page';
import {BoardInfo} from '../../components/BoardInfo';
import {useQuery} from 'react-query';

interface BoardsPageProps {
}

export const BoardsPage: React.FunctionComponent<BoardsPageProps> = () => {
    const boardsQuery = useQuery('BOARDS', getBoards())

    return (
        <Page loading={boardsQuery.isLoading} error={boardsQuery.error as string}>
            {boardsQuery.data?.map(board => <div key={board._id}>
                <Link to={`/board/${board._id}`}>
                    <BoardInfo board={board}/>
                </Link>
            </div>)}
        </Page>
    );
};
