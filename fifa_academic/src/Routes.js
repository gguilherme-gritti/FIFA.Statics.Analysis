/* Routes Impots */
import { BrowserRouter, Switch, Route as RouteDom } from "react-router-dom";


/* Pages Import */
import Home from "./pages/Home";
import Statics from "./pages/Statics";

/* Context Pages */
import { FifaContextProvider } from "./pages/contexts/FifaContext";


/* Aux Function Create Route */
const Route = ({path, component: Component}) => {
    return <RouteDom path={path} component={Component} />;
}

/* App Routes */
const Routes = () => {
    return (
        <>
            <BrowserRouter>
                <FifaContextProvider>
                    <Switch>
                        <Route path="/home" component={Home} />
                        <Route path="/statistics" component={Statics} />
                    </Switch>
                </FifaContextProvider>
            </BrowserRouter>
        </>
    )
}

export default Routes;