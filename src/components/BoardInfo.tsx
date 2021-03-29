import React from 'react'
import {Board} from '../types';
import {Link} from 'react-router-dom';

interface BoardInfoProps {
    board: Board
}

export const BoardInfo: React.FunctionComponent<BoardInfoProps> = ({board}) => {
    return (
        <div>
            {board.icon && <img height={20} src={board.icon.value}/>}
            {board.title}
            ({board.key})
        </div>
    );
};
