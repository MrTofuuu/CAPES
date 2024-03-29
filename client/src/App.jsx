import React from 'react';
// IMPORT ROUTER 
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
// IMPORT PAGES
import Home from './pages/Home';
import Heroes from './pages/Heroes';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
// IMPORT COMPONENTS
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Login from './pages/Login';
import SignupForm from './pages/Signup';
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

     
        <Header />
        
        <Footer />
     
    </ApolloProvider>
  );
}

export default App;
