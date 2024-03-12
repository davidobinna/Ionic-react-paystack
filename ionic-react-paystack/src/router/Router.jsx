import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import { homepage } from '../views/homepage';
import { NotFound } from '../views/NotFound';


export const MyRouter = () => {
    return (
          <Router>
             <Switch>
             <Route exact path="/" component={homepage} />
              {/* Catch-all route for Not Found */}
              <Route path="*" component={NotFound} />
             </Switch>
          </Router>
    );
};


