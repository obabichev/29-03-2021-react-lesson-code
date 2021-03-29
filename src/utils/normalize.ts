import {Normalized} from '../types';

export const normalize = <K extends string, T extends { [key in K]: string | number }>(
    list: T[], key: K): Normalized<T> => {
    return list.reduce((container, item) => {
        return {
            ...container,
            [item[key]]: item
        };
    }, {} as Normalized<T>);
}
