// Inclue the React library
const React = require("react"),
    router = require("react-router"),
    Route = router.Route,
    Router = router.Router,
    browserHistory = router.browserHistory,
    IndexRoute = router.IndexRoute,
    Main = require("../components/Main");

    module.exports = (
        <Router history={browserHistory}>
            <Route path="/" component={Main}>

            </Route>
        </Router>
    );      