import { useEffect, useReducer } from 'react';
import { firstLoad } from './Core/actions/firstLoad';
import { appContext } from './Core/context/context';
import { reducer } from './Core/reducer/reducer';

import { RouterApp } from './Routers/RouterApp';

function App() {
    const [state, dispatch] = useReducer(reducer, { results: [''] });
    useEffect(() => {
        firstLoad().then(dispatch);
    }, []);
    return (
        <>
            <appContext.Provider value={{ state, dispatch }}>
                <RouterApp />
            </appContext.Provider>
        </>
    );
}

export default App;
