import React from 'react';
// IMPORT ROUTER 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
// IMPORT PAGES
import Home from './pages/Home';
import Ourheroes from './pages/OurHeroes';
import Myprofile from './pages/MyProfile';
import NotFound from './pages/NotFound';
// IMPORT COMPONENTS
import Header from './components/Header';
import Footer from './components/Footer';
import LoginForm from './pages/LoginForm';
import SignupForm from './pages/SignupForm';

// REQUIRE APOLLOCLIENT FOR GRAPHQL
const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});
// CREATE MAIN REACT APP ELEMENT
function App() {
  return (
    <ApolloProvider client={client}>

      <Router>
        <Header />
        <div className="flex-column justify-center align-center min-100-vh">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/ourheroes">
              <Ourheroes />
            </Route>
            <Route exact path="/myprofile">
              <Myprofile />
            </Route>
            <Route exact path="/login">
              <LoginForm /></Route>
            <Route exact path="/signup">
              <SignupForm />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
