
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import React from 'react';
import { CartProvider } from "react-use-cart";
import { AuthProvider } from 'react-auth-kit';

const httpLink = createHttpLink({
  uri:"http://localhost:1337/graphql"
 
});


const client = new ApolloClient({
  link:httpLink,
  cache: new InMemoryCache({ addTypename: false}),
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider authType = {'cookie'}
  authName={'_auth'}
  cookieDomain={window.location.hostname}
  cookieSecure={false}>

  
<React.StrictMode>
<ApolloProvider client={client}>
<CartProvider>
    <App />
  </CartProvider>
</ApolloProvider>
</React.StrictMode>
    </AuthProvider>
)
