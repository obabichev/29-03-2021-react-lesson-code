import React from 'react'
import {Maybe} from '../types';

interface PageProps {
    loading?: boolean;
    error?: Maybe<string>;
}

export const Page: React.FunctionComponent<PageProps> = ({children, error, loading}) => {
    if (loading) {
        return <div>
            Loading......
        </div>;
    }

    if (error) {
        return <div style={{color: 'red'}}>
            <h2>{error}</h2>
        </div>
    }

    return (
        <div style={{padding: 24}}>{children}</div>
    );
};
