import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import {QueryClient, QueryClientProvider} from 'react-query' 

const client = new QueryClient()

ReactDom.render(
  <QueryClientProvider client={client}>
    <App />
  </QueryClientProvider>, 
  document.getElementById('root'))