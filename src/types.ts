export type Maybe<T> = T | null;

export type Fetcher<T> = () => Promise<T>

export type Normalized<T> = { [key in string]: T | undefined };

export type Icon = {
    key: string;
    value: string
}

export type Task = {
    _id: string;
    title: string;
    key: string;
    subtasks: string[];
    parent?: string;
}

export type Board = {
    _id: string;
    title: string;
    key: string;
    icon?: Icon;
};

export type DetailedBoard = Board & { tasks: Task[] }