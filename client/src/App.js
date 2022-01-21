import React from 'react';
// IMPORT ROUTER 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
// IMPORT PAGES
import Home from './pages/Home';
import Ourheroes from './pages/OurHeroes';
import Myprofile from './pages/MyProfile';
import Matchup from './pages/Matchup';
import Vote from './pages/Vote';
import NotFound from './pages/NotFound';
// IMPORT COMPONENTS
import Header from './components/Header';
import Footer from './components/Footer';
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
      <Header/>
        <div className="flex-column justify-center align-center min-100-vh">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/matchup">
              <Matchup />
            </Route>
            <Route exact path="/matchup/:id">
              <Vote />
            </Route>
            <Route exact path="/ourheroes">
              <Ourheroes />
            </Route>
            <Route exact path="/myprofile">
              <Myprofile />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </div>
      <Footer/>
      </Router>
    </ApolloProvider>
  );
}

export default App;
