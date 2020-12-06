import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Drivers from './pages/drivers'
import NotFound from './pages/notFound/notFound'
import * as routes from './routes'
import Header from './components/navbar'
import logo from './assets/logo.png'

const Router = () =>
    <BrowserRouter>
        <Header logo={logo} width={160} height={42}>
            <Switch>
                <Route exact={true} path={routes.drivers} component={Drivers} />
                <Route path={routes.notFound} component={NotFound} />
            </Switch>
        </Header>
    </BrowserRouter>

export default Router