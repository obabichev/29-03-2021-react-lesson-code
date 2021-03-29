import {Board, DetailedBoard, Fetcher} from '../types';

export const getBoards = (): Fetcher<Board[]> => () => {
    return fetch("/api/board")
        .then(r => r.json())
}

export const getBoard = (id: string): Fetcher<DetailedBoard> => () => {
    return fetch(`/api/board/${id}`)
        .then(r => r.json())
}
