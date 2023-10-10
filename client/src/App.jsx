import React from 'react';
// IMPORT ROUTER 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
// IMPORT PAGES
import Home from './pages/Home';
import Ourheroes from './pages/OurHeroes';
import Myprofile from './pages/Profile';
import NotFound from './pages/NotFound';
// IMPORT COMPONENTS
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Login from './pages/Login';
import SignupForm from './pages/SignupForm';
import EmergencyForm from './components/EmergencyForm/EmergencyForm';


const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

//End of change to use httplink
// CREATE MAIN REACT APP ELEMENT
function App() {
  return (
    <ApolloProvider client={client}>

      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/ourheroes">
            <Ourheroes />
          </Route>
          <Route exact path="/myprofile">
            <EmergencyForm />
            <Myprofile />
          </Route>
          <Route exact path="/login">
            <Login />
            </Route>
          <Route exact path="/signup">
            <SignupForm />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
