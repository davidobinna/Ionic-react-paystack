import { Switch, BrowserRouter as Router } from 'react-router-dom'
import { paynow } from '../views/paynow';
import { homepage } from '../views/homepage';


export const Router = () => {
    return (
          <Router>
             <Switch>
             <Route path="/pay-now" component={paynow}/>
             <Route exact path="/" component={homepage} />
              {/* Catch-all route for Not Found */}
              <Route path="*" component={NotFound} />
             </Switch>
          </Router>
    );
};


