import React from 'react';
import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client';
import App from './App';
import AuthNavigation from './Screens/LoginScreen/AuthNavigation';
import Login from './Screens/LoginScreen/Login';
const client = new ApolloClient({
  uri: 'hhttp://localhost:3000/api/api',  // URL of your GraphQL endpoint
  cache: new InMemoryCache(),
});

export default function ApolloApp() {
  return (
    <ApolloProvider client={client}>
      <Login />
    </ApolloProvider>
  );
}
