import React from 'react';
import {Route, Routes} from "react-router-dom";
import {routes} from "./router/Route";

const AppRouter = () => {
    return (
        <Routes>
            {routes.map(({component, path, exact}) =>
                <Route
                    key={path}
                    element={component}
                    path={path}
                    exact={exact}
                />
            )}
        </Routes>
    );
};

export default AppRouter;