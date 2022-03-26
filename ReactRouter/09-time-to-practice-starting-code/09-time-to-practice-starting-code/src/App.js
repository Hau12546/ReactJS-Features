import QouteDetail from'./components/quotes/QuoteDetail';
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import { Redirect } from 'react-router-dom';
import Layout from './components/layout/Layout';
import AllQoutes from './components/pages/AllQoutes';
import NewQoutes from './components/pages/NewQoutes';
import NoFoundPage from './components/quotes/NoFoundPage';

const DUMMY_DATA = [
	{id:0, text:'Hello', author:'HauNT14'},
	{id:1, text:'Hi', author:'HauNT14'},
]
function App() {
  
  return (
    <div>
      <Layout>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/qoute-comment'></Redirect>
        </Route>
      <Route path='/qoute-comment' exact>
        <NewQoutes></NewQoutes>
      </Route>
      <Route path='/qoute-list' exact>
        <AllQoutes qouteList={DUMMY_DATA}></AllQoutes>
      </Route>
      <Route path='/qoute-list/:qouteID'>
        <QouteDetail></QouteDetail>
      </Route>
      <Route path='*'>
        <NoFoundPage></NoFoundPage>
      </Route>
      </Switch>
      </Layout>
    </div>
  );
}

export default App;
