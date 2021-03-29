import React, {useMemo} from 'react';
import {AppRouter} from './components/AppRouter';
import {QueryClient, QueryClientProvider} from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools'

function App() {
    const queryClient = useMemo(() => new QueryClient(), []);

    return (
        <div>
            <QueryClientProvider client={queryClient}>
                <AppRouter/>
                <ReactQueryDevtools initialIsOpen={false}/>
            </QueryClientProvider>
        </div>
    );
}

export default App;
