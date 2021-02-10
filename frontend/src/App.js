import { Switch, Route } from 'react-router-dom';

// components
import Home from './pages/home/Home';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';

const App = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
        </Switch>
    )
}

export default App;
