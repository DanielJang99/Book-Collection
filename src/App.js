import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import NotFound from "./pages/NotFound";
import { ErrorBoundary } from "react-error-boundary";
import Error from "./pages/Error";
import PersonContext from "./contexts/PersonContext";

const persons = [
    { name: "Daniel", age: 22 },
    { name: "Bukayo", age: 20 }
];

const App = () => (
    <ErrorBoundary FallbackComponent={Error}>
        <PersonContext.Provider value={persons}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/signin" component={Signin} />
                    <Route exact path="/" component={Home} />
                    <Route component={NotFound} />
                </Switch>
            </BrowserRouter>
        </PersonContext.Provider>
    </ErrorBoundary>
);

export default App;
