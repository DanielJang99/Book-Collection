import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import NotFound from "./pages/NotFound";
import { ErrorBoundary } from "react-error-boundary";
import Error from "./pages/Error";
import PersonContext from "./contexts/PersonContext";

const App = () => (
    <ErrorBoundary FallbackComponent={Error}>
        <PersonContext.Provider>
            <BrowserRouter>
                <Switch>
                    <Route
                        exact
                        path="/Book-Collection/signin"
                        component={Signin}
                    />
                    <Route exact path="/Book-Collection" component={Home} />
                    <Route component={NotFound} />
                </Switch>
            </BrowserRouter>
        </PersonContext.Provider>
    </ErrorBoundary>
);

export default App;
